#!/usr/bin/env node
// Validates Topic/Question/Reference/Asset files against schemas/*.schema.json
// and checks ID uniqueness + cross-reference integrity.
// No external dependencies (no js-yaml/ajv) so it runs with plain `node`.
// The YAML subset parser below only supports the constrained shape this
// project actually authors: scalars, block lists ("- item"), list-of-maps,
// one level of nested maps, and empty flow collections ([] / {}).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const errors = [];
const warnings = [];
let filesChecked = 0;

const BLOCK_SCALAR = /^[|>][-+]?$/;

// Consumes a YAML block scalar (">" folded or "|" literal) starting right after
// a "key: >" / "key: |" line. Returns [text, nextIndex].
function readBlockScalar(tokens, i, indent, marker) {
  const folded = marker.startsWith(">");
  const lines = [];
  while (i < tokens.length && tokens[i].indent > indent) {
    lines.push(tokens[i].content);
    i++;
  }
  const text = folded ? lines.join(" ").replace(/\s+/g, " ").trim() : lines.join("\n");
  return [text, i];
}

function parseScalar(raw) {
  const s = raw.trim();
  if (s === "" ) return null;
  if (s === "[]") return [];
  if (s === "{}") return {};
  if (s === "true") return true;
  if (s === "false") return false;
  if (s === "null" || s === "~") return null;
  if (/^\[.*\]$/.test(s)) {
    const inner = s.slice(1, -1).trim();
    if (inner === "") return [];
    return inner.split(",").map((v) => parseScalar(v.trim()));
  }
  if (/^".*"$/.test(s) || /^'.*'$/.test(s)) return s.slice(1, -1);
  if (/^-?\d+(\.\d+)?$/.test(s)) return Number(s);
  return s;
}

function tokenize(text) {
  const lines = text.split("\n");
  const tokens = [];
  for (const raw of lines) {
    if (raw.trim() === "" || raw.trim().startsWith("#")) continue;
    const indent = raw.length - raw.trimStart().length;
    tokens.push({ indent, content: raw.trim(), raw });
  }
  return tokens;
}

// Recursive-descent parser for the constrained YAML subset. Returns [value, nextIndex].
function parseBlock(tokens, i, indent) {
  if (i >= tokens.length || tokens[i].indent < indent) return [null, i];

  if (tokens[i].content.startsWith("- ") || tokens[i].content === "-") {
    const list = [];
    while (i < tokens.length && tokens[i].indent === indent && (tokens[i].content.startsWith("- ") || tokens[i].content === "-")) {
      const itemContent = tokens[i].content === "-" ? "" : tokens[i].content.slice(2);
      if (itemContent === "") {
        const [value, next] = parseBlock(tokens, i + 1, indent + 2);
        list.push(value);
        i = next;
      } else if (/^[A-Za-z0-9_.-]+:\s?/.test(itemContent)) {
        // list item is a map, e.g. "- id: A" followed by more indented "text: ..."
        const colonIdx = itemContent.indexOf(":");
        const key = itemContent.slice(0, colonIdx).trim();
        const rest = itemContent.slice(colonIdx + 1).trim();
        const obj = {};
        if (BLOCK_SCALAR.test(rest)) {
          const [text, next] = readBlockScalar(tokens, i + 1, indent, rest);
          obj[key] = text;
          i = next;
        } else {
          obj[key] = rest === "" ? null : parseScalar(rest);
          i++;
        }
        const childIndent = indent + 2;
        while (i < tokens.length && tokens[i].indent === childIndent && !tokens[i].content.startsWith("- ")) {
          const line = tokens[i].content;
          const ci = line.indexOf(":");
          const k = line.slice(0, ci).trim();
          const v = line.slice(ci + 1).trim();
          if (BLOCK_SCALAR.test(v)) {
            const [text, next] = readBlockScalar(tokens, i + 1, childIndent, v);
            obj[k] = text;
            i = next;
          } else if (v === "" && i + 1 < tokens.length && tokens[i + 1].indent > childIndent) {
            const [value, next] = parseBlock(tokens, i + 1, tokens[i + 1].indent);
            obj[k] = value;
            i = next;
          } else {
            obj[k] = parseScalar(v);
            i++;
          }
        }
        list.push(obj);
      } else {
        list.push(parseScalar(itemContent));
        i++;
      }
    }
    return [list, i];
  }

  const obj = {};
  while (i < tokens.length && tokens[i].indent === indent) {
    const line = tokens[i].content;
    const ci = line.indexOf(":");
    if (ci === -1) { i++; continue; }
    const key = line.slice(0, ci).trim();
    const rest = line.slice(ci + 1).trim();
    if (BLOCK_SCALAR.test(rest)) {
      const [text, next] = readBlockScalar(tokens, i + 1, indent, rest);
      obj[key] = text;
      i = next;
    } else if (rest === "") {
      if (i + 1 < tokens.length && tokens[i + 1].indent > indent) {
        const [value, next] = parseBlock(tokens, i + 1, tokens[i + 1].indent);
        obj[key] = value;
        i = next;
      } else {
        obj[key] = null;
        i++;
      }
    } else {
      obj[key] = parseScalar(rest);
      i++;
    }
  }
  return [obj, i];
}

function parseYAML(text) {
  const tokens = tokenize(text);
  if (tokens.length === 0) return {};
  const [value] = parseBlock(tokens, 0, tokens[0].indent);
  return value;
}

function extractFrontmatter(mdText) {
  const match = mdText.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return null;
  return { frontmatter: parseYAML(match[1]), body: match[2] };
}

function listFiles(dir, ext) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(full, ext));
    else if (entry.name.endsWith(ext) && !entry.name.startsWith("_")) out.push(full);
  }
  return out;
}

function rel(p) { return path.relative(ROOT, p); }

// --- schema-driven field checks (hand-rolled, mirrors schemas/*.schema.json) ---

function checkEnum(file, obj, field, allowed, required = true) {
  const v = obj[field];
  if (v === undefined || v === null) {
    if (required) errors.push(`${rel(file)}: 필수 필드 누락 - ${field}`);
    return;
  }
  if (!allowed.includes(v)) {
    errors.push(`${rel(file)}: ${field} 값 '${v}'는 허용되지 않음 (허용: ${allowed.join(", ")})`);
  }
}

function checkPattern(file, obj, field, pattern, required = true) {
  const v = obj[field];
  if (v === undefined || v === null) {
    if (required) errors.push(`${rel(file)}: 필수 필드 누락 - ${field}`);
    return;
  }
  if (!pattern.test(String(v))) {
    errors.push(`${rel(file)}: ${field} 값 '${v}'가 패턴 ${pattern}과 일치하지 않음`);
  }
}

function asArray(v) { return Array.isArray(v) ? v : (v ? [v] : []); }

const topicIds = new Set();
const referenceIds = new Set();
const assetIds = new Set();
const questionIds = new Set();

// Pass 1: collect IDs
const topicFiles = listFiles(path.join(ROOT, "content"), ".md");
const questionFiles = listFiles(path.join(ROOT, "questions"), ".yaml");
const referenceFiles = listFiles(path.join(ROOT, "references"), ".yaml");
const assetFiles = listFiles(path.join(ROOT, "assets"), ".yaml");

const parsedTopics = [];
for (const file of topicFiles) {
  const text = fs.readFileSync(file, "utf8");
  const parsed = extractFrontmatter(text);
  if (!parsed) { errors.push(`${rel(file)}: frontmatter(---)를 찾을 수 없음`); continue; }
  parsedTopics.push({ file, ...parsed });
  if (parsed.frontmatter.id) {
    if (topicIds.has(parsed.frontmatter.id)) errors.push(`${rel(file)}: 중복 Topic ID ${parsed.frontmatter.id}`);
    topicIds.add(parsed.frontmatter.id);
  }
}

const parsedQuestions = [];
for (const file of questionFiles) {
  const data = parseYAML(fs.readFileSync(file, "utf8"));
  parsedQuestions.push({ file, data });
  if (data.id) {
    if (questionIds.has(data.id)) errors.push(`${rel(file)}: 중복 Question ID ${data.id}`);
    questionIds.add(data.id);
  }
}

const parsedReferences = [];
for (const file of referenceFiles) {
  const data = parseYAML(fs.readFileSync(file, "utf8"));
  parsedReferences.push({ file, data });
  if (data.id) referenceIds.add(data.id);
}

const parsedAssets = [];
for (const file of assetFiles) {
  const data = parseYAML(fs.readFileSync(file, "utf8"));
  parsedAssets.push({ file, data });
  if (data.id) assetIds.add(data.id);
}

// Pass 2: schema validation + cross-reference checks

const ALLOWED_HEADINGS = new Set([
  "학습목표", "한 문장 정의", "왜 중요한가", "선수 개념", "핵심 개념",
  "상세 설명", "비교표", "비교표 또는 흐름", "업무 흐름", "실무 사례",
  "국가시험 포인트", "자주 하는 실수", "관련 법령·표준", "AI Note",
  "핵심 요약", "플래시카드", "연습문제", "참고문헌",
]);

for (const { file, frontmatter: fm, body } of parsedTopics) {
  filesChecked++;
  checkPattern(file, fm, "id", /^HIM-V[0-9]+-C[0-9]+-S[0-9]+-T[0-9]+$/);
  checkPattern(file, fm, "slug", /^[a-z0-9]+(-[a-z0-9]+)*$/);
  if (!fm.title) errors.push(`${rel(file)}: 필수 필드 누락 - title`);
  checkEnum(file, fm, "status", ["planned", "researching", "drafting", "reviewing", "verified", "published", "deprecated"]);
  checkEnum(file, fm, "difficulty", ["basic", "intermediate", "advanced"]);
  checkEnum(file, fm, "importance", ["A", "B", "C", "D"]);
  checkEnum(file, fm, "exam_frequency", ["high", "medium", "low", "unknown"]);
  if (typeof fm.verified !== "boolean") errors.push(`${rel(file)}: verified는 boolean이어야 함`);

  for (const refId of asArray(fm.references)) {
    if (!referenceIds.has(refId)) warnings.push(`${rel(file)}: references에 있는 ${refId}가 references/ 디렉터리에 없음`);
  }
  for (const astId of asArray(fm.assets)) {
    if (!assetIds.has(astId)) warnings.push(`${rel(file)}: assets에 있는 ${astId}가 assets/ 메타데이터에 없음`);
  }
  for (const qId of asArray(fm.questions)) {
    if (!questionIds.has(qId)) warnings.push(`${rel(file)}: questions에 있는 ${qId}가 questions/ 디렉터리에 없음`);
  }
  for (const preq of asArray(fm.prerequisites)) {
    if (!topicIds.has(preq)) warnings.push(`${rel(file)}: prerequisites의 ${preq}가 아직 존재하지 않는 Topic ID`);
  }
  for (const rel_ of asArray(fm.related_topics)) {
    if (!topicIds.has(rel_)) warnings.push(`${rel(file)}: related_topics의 ${rel_}가 아직 존재하지 않는 Topic ID`);
  }

  const headings = [...body.matchAll(/^##\s+(.+)$/gm)].map((m) => m[1].trim());
  const seen = new Set();
  for (const h of headings) {
    if (!ALLOWED_HEADINGS.has(h)) warnings.push(`${rel(file)}: 알 수 없는 본문 섹션 제목 '## ${h}'`);
    if (seen.has(h)) warnings.push(`${rel(file)}: 섹션 제목 '## ${h}' 중복`);
    seen.add(h);
  }
}

const CHOICE_TYPES = new Set(["true_false", "multiple_choice", "multiple_select"]);

for (const { file, data } of parsedQuestions) {
  filesChecked++;
  checkPattern(file, data, "id", /^Q-[A-Z]+-[0-9]{6}$/);
  checkEnum(file, data, "status", ["planned", "drafting", "reviewing", "verified", "published", "deprecated"]);
  checkEnum(file, data, "type", [
    "true_false", "multiple_choice", "multiple_select", "short_answer",
    "calculation", "matching", "ordering", "case_based",
    "record_interpretation", "coding", "flashcard",
  ]);
  if (!data.stem) errors.push(`${rel(file)}: 필수 필드 누락 - stem`);
  if (!data.explanation) errors.push(`${rel(file)}: 필수 필드 누락 - explanation`);
  if (typeof data.verified !== "boolean") errors.push(`${rel(file)}: verified는 boolean이어야 함`);

  const topics = asArray(data.topic_ids);
  if (topics.length === 0) errors.push(`${rel(file)}: topic_ids가 비어 있음 (최소 1개 필요)`);
  for (const t of topics) {
    if (!topicIds.has(t)) warnings.push(`${rel(file)}: topic_ids의 ${t}가 content/ 안에 존재하지 않음`);
  }

  const answers = asArray(data.answer);
  if (answers.length === 0) errors.push(`${rel(file)}: answer가 비어 있음`);

  if (CHOICE_TYPES.has(data.type)) {
    const options = asArray(data.options);
    if (options.length === 0) {
      errors.push(`${rel(file)}: type=${data.type}인데 options가 없음`);
    } else {
      const optionIds = options.map((o) => o.id);
      for (const a of answers) {
        if (!optionIds.includes(a)) errors.push(`${rel(file)}: answer '${a}'가 options ID 목록(${optionIds.join(",")})에 없음`);
      }
    }
  }

  for (const refId of asArray(data.references)) {
    if (!referenceIds.has(refId)) warnings.push(`${rel(file)}: references의 ${refId}가 references/ 디렉터리에 없음`);
  }
}

for (const { file, data } of parsedReferences) {
  filesChecked++;
  checkPattern(file, data, "id", /^REF-/);
  if (!data.title) warnings.push(`${rel(file)}: title이 비어 있음`);
  if (!data.type) warnings.push(`${rel(file)}: type이 비어 있음`);
}

for (const { file, data } of parsedAssets) {
  filesChecked++;
  checkPattern(file, data, "id", /^AST-/);
  if (!data.alt) errors.push(`${rel(file)}: alt(대체 텍스트) 누락`);
  const topics = asArray(data.topic_ids);
  for (const t of topics) {
    if (!topicIds.has(t)) warnings.push(`${rel(file)}: topic_ids의 ${t}가 content/ 안에 존재하지 않음`);
  }
}

console.log(`검사한 파일: ${filesChecked}개 (Topic ${parsedTopics.length}, Question ${parsedQuestions.length}, Reference ${parsedReferences.length}, Asset ${parsedAssets.length})`);
console.log(`오류(error): ${errors.length}건, 경고(warning): ${warnings.length}건\n`);

if (warnings.length) {
  console.log("--- 경고 ---");
  warnings.forEach((w) => console.log("  WARN  " + w));
}
if (errors.length) {
  console.log("\n--- 오류 ---");
  errors.forEach((e) => console.log("  FAIL  " + e));
}

process.exit(errors.length > 0 ? 1 : 0);
