import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import matter from "gray-matter";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const APP_ROOT = path.resolve(SCRIPT_DIR, "..");
const PROJECT_ROOT = path.resolve(APP_ROOT, "..", "..");
const MD_ROOT = path.join(PROJECT_ROOT, "md files");
const CONTENT_ROOT = path.join(MD_ROOT, "content");
const QUESTION_ROOT = path.join(MD_ROOT, "questions");
const GLOSSARY_PATH = path.join(MD_ROOT, "GLOSSARY.md");
const OUTPUT_PATH = path.join(APP_ROOT, "src", "generated", "learning-dataset.json");
const BLOCK_SCALAR = /^[|>][-+]?$/;
const VOLUME_TITLES = {
  1: "보건의료정보관리",
  2: "의학용어",
  3: "병원통계·질병분류·암등록",
  4: "실무",
};
const CHAPTER_TITLES = {
  "V1-C1": "보건의료정보관리 개론",
  "V1-C2": "의료기록의 이해",
  "V1-C3": "보건의료정보관리사의 직무",
  "V1-C4": "의료기관과 조직",
  "V1-C5": "의무기록 작성",
  "V1-C6": "의무기록 관리",
  "V1-C7": "EMR·EHR와 의료정보시스템",
  "V1-C8": "의료정보 표준",
  "V1-C9": "의료데이터 품질관리",
  "V1-C10": "의료정보 활용",
  "V1-C11": "의료의 질 관리",
  "V1-C12": "환자안전",
  "V1-C13": "의료기관 인증",
  "V1-C14": "의료관계 법규",
  "V1-C15": "건강보험",
  "V1-C16": "의료데이터와 AI",
  "V2-C1": "의학용어의 구조",
  "V2-C2": "인체 구조와 기본 개념",
  "V2-C3": "근골격계",
  "V2-C4": "심혈관계",
  "V2-C5": "혈액·림프·면역계",
  "V2-C6": "호흡기계",
  "V2-C7": "소화기계",
  "V2-C8": "비뇨기계",
  "V2-C9": "생식기계",
  "V2-C10": "내분비계",
  "V2-C11": "신경계",
  "V2-C12": "감각계",
  "V2-C13": "피부계",
  "V2-C14": "정신건강",
  "V2-C15": "종양학 용어",
  "V2-C16": "검사·수술·약물 관련 용어",
  "V3-C1": "병원통계",
  "V3-C2": "질병·의료행위 분류",
  "V3-C3": "암등록",
  "V4-C1": "기록 해석의 기초",
  "V4-C2": "외래기록 실무",
  "V4-C3": "입원기록 실무",
  "V4-C4": "응급기록 실무",
  "V4-C5": "수술기록 실무",
  "V4-C6": "산과·신생아 기록 실무",
  "V4-C7": "종양 기록 실무",
  "V4-C8": "질병분류 통합 사례",
  "V4-C9": "의료행위 분류 통합 사례",
  "V4-C10": "암등록 통합 사례",
  "V4-C11": "의료통계 통합 사례",
  "V4-C12": "기록 완결성 분석",
  "V4-C13": "개인정보·법규 사례",
  "V4-C14": "보험청구 연계 사례",
  "V4-C15": "종합 모의 실무",
};

function getChapterLabel(volume, chapter, chapterKey) {
  const volumeTitle = VOLUME_TITLES[volume] ?? `Volume ${volume}`;
  const chapterTitle = CHAPTER_TITLES[chapterKey] ?? `Chapter ${chapter}`;
  return `${volumeTitle} · ${chapter}. ${chapterTitle}`;
}

async function collectFiles(dir, extension) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return collectFiles(fullPath, extension);
      }
      if (!entry.isFile()) {
        return [];
      }
      if (!entry.name.endsWith(extension) || entry.name.startsWith("_")) {
        return [];
      }
      return [fullPath];
    }),
  );

  return nested.flat().sort();
}

function parseScalar(raw) {
  const text = raw.trim();
  if (text === "") return null;
  if (text === "[]") return [];
  if (text === "{}") return {};
  if (text === "true") return true;
  if (text === "false") return false;
  if (text === "null" || text === "~") return null;
  if (/^\[.*\]$/.test(text)) {
    const inner = text.slice(1, -1).trim();
    return inner === "" ? [] : inner.split(",").map((item) => parseScalar(item.trim()));
  }
  if ((/^".*"$/).test(text) || (/^'.*'$/).test(text)) {
    return text.slice(1, -1);
  }
  if (/^-?\d+(\.\d+)?$/.test(text)) {
    return Number(text);
  }
  return text;
}

function tokenizeYaml(text) {
  return text
    .split("\n")
    .filter((line) => line.trim() !== "" && !line.trim().startsWith("#"))
    .map((line) => ({
      indent: line.length - line.trimStart().length,
      content: line.trim(),
    }));
}

function readBlockScalar(tokens, index, indent, marker) {
  const folded = marker.startsWith(">");
  const lines = [];
  let nextIndex = index;
  while (nextIndex < tokens.length && tokens[nextIndex].indent > indent) {
    lines.push(tokens[nextIndex].content);
    nextIndex += 1;
  }
  const text = folded ? lines.join(" ").replace(/\s+/g, " ").trim() : lines.join("\n");
  return [text, nextIndex];
}

function parseYamlBlock(tokens, index, indent) {
  if (index >= tokens.length || tokens[index].indent < indent) {
    return [null, index];
  }

  if (tokens[index].content.startsWith("- ") || tokens[index].content === "-") {
    const items = [];
    let nextIndex = index;

    while (
      nextIndex < tokens.length &&
      tokens[nextIndex].indent === indent &&
      (tokens[nextIndex].content.startsWith("- ") || tokens[nextIndex].content === "-")
    ) {
      const itemContent =
        tokens[nextIndex].content === "-" ? "" : tokens[nextIndex].content.slice(2);

      if (itemContent === "") {
        const [value, childIndex] = parseYamlBlock(tokens, nextIndex + 1, indent + 2);
        items.push(value);
        nextIndex = childIndex;
        continue;
      }

      if (/^[A-Za-z0-9_.-]+:\s?/.test(itemContent)) {
        const separatorIndex = itemContent.indexOf(":");
        const key = itemContent.slice(0, separatorIndex).trim();
        const remainder = itemContent.slice(separatorIndex + 1).trim();
        const record = {};

        if (BLOCK_SCALAR.test(remainder)) {
          const [text, childIndex] = readBlockScalar(tokens, nextIndex + 1, indent, remainder);
          record[key] = text;
          nextIndex = childIndex;
        } else {
          record[key] = remainder === "" ? null : parseScalar(remainder);
          nextIndex += 1;
        }

        const childIndent = indent + 2;
        while (
          nextIndex < tokens.length &&
          tokens[nextIndex].indent === childIndent &&
          !tokens[nextIndex].content.startsWith("- ")
        ) {
          const line = tokens[nextIndex].content;
          const childSeparatorIndex = line.indexOf(":");
          const childKey = line.slice(0, childSeparatorIndex).trim();
          const childRemainder = line.slice(childSeparatorIndex + 1).trim();

          if (BLOCK_SCALAR.test(childRemainder)) {
            const [text, childIndex] = readBlockScalar(
              tokens,
              nextIndex + 1,
              childIndent,
              childRemainder,
            );
            record[childKey] = text;
            nextIndex = childIndex;
          } else if (
            childRemainder === "" &&
            nextIndex + 1 < tokens.length &&
            tokens[nextIndex + 1].indent > childIndent
          ) {
            const [value, childIndex] = parseYamlBlock(
              tokens,
              nextIndex + 1,
              tokens[nextIndex + 1].indent,
            );
            record[childKey] = value;
            nextIndex = childIndex;
          } else {
            record[childKey] = parseScalar(childRemainder);
            nextIndex += 1;
          }
        }

        items.push(record);
        continue;
      }

      items.push(parseScalar(itemContent));
      nextIndex += 1;
    }

    return [items, nextIndex];
  }

  const record = {};
  let nextIndex = index;

  while (nextIndex < tokens.length && tokens[nextIndex].indent === indent) {
    const line = tokens[nextIndex].content;
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) {
      nextIndex += 1;
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const remainder = line.slice(separatorIndex + 1).trim();

    if (BLOCK_SCALAR.test(remainder)) {
      const [text, childIndex] = readBlockScalar(tokens, nextIndex + 1, indent, remainder);
      record[key] = text;
      nextIndex = childIndex;
    } else if (remainder === "") {
      if (nextIndex + 1 < tokens.length && tokens[nextIndex + 1].indent > indent) {
        const [value, childIndex] = parseYamlBlock(
          tokens,
          nextIndex + 1,
          tokens[nextIndex + 1].indent,
        );
        record[key] = value;
        nextIndex = childIndex;
      } else {
        record[key] = null;
        nextIndex += 1;
      }
    } else {
      record[key] = parseScalar(remainder);
      nextIndex += 1;
    }
  }

  return [record, nextIndex];
}

function parseConstrainedYaml(text) {
  const tokens = tokenizeYaml(text);
  if (tokens.length === 0) {
    return {};
  }
  const [value] = parseYamlBlock(tokens, 0, tokens[0].indent);
  return value;
}

function extractSection(markdown, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const sectionPattern = new RegExp(`^#{1,2}\\s+${escaped}\\s*$\\n?([\\s\\S]*?)(?=^#{1,2}\\s|$)`, "m");
  const match = markdown.match(sectionPattern);
  return match?.[1]?.trim() ?? "";
}

function cleanMarkdownCell(value) {
  return value
    .replace(/\*\*/g, "")
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
    .trim();
}

function extractGlossaryEntries(markdown) {
  const lines = markdown.split("\n");
  const entries = [];

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line.startsWith("|")) {
      continue;
    }

    const cells = line
      .split("|")
      .map((cell) => cleanMarkdownCell(cell))
      .filter(Boolean);

    if (cells.length < 2) {
      continue;
    }

    const headerLike =
      /^표준 표기$/i.test(cells[0]) ||
      /^용어\b/i.test(cells[0]) ||
      /^term$/i.test(cells[0]) ||
      /^용어\s*\(term\)$/i.test(cells[0]) ||
      /^의미\s*\(meaning\)$/i.test(cells[1] ?? "") ||
      /^---+$/.test(cells[0]);

    if (headerLike) {
      continue;
    }

    if (cells.every((cell) => /^-+$/.test(cell))) {
      continue;
    }

    if (cells.length >= 4) {
      const [term, english, abbreviation, description] = cells;
      if (!term || !description) {
        continue;
      }
      entries.push({
        term,
        english,
        abbreviation,
        description,
      });
      continue;
    }

    const [term, description] = cells;
    if (!term || !description) {
      continue;
    }

    if (description === "|" || /^\[?접두사|\[?접미사|\[?어근/.test(term)) {
      continue;
    }

    entries.push({
      term,
      english: "",
      abbreviation: "-",
      description,
    });
  }

  return entries;
}

function extractSummary(markdown) {
  const summarySection = extractSection(markdown, "핵심 요약");
  if (summarySection) {
    return summarySection
      .split("\n")
      .map((line) => line.replace(/^[-*]\s*/, "").trim())
      .filter(Boolean)
      .join(" ");
  }

  return markdown
    .replace(/^# .*\n?/m, "")
    .split(/\n{2,}/)
    .map((chunk) => chunk.trim())
    .find(Boolean) ?? "";
}

function extractKeyPoints(markdown) {
  const summarySection = extractSection(markdown, "핵심 요약");
  if (summarySection) {
    const items = summarySection
      .split("\n")
      .map((line) => line.replace(/^[-*]\s*/, "").trim())
      .filter(Boolean);
    if (items.length > 0) {
      return items;
    }
  }

  const conceptSection = extractSection(markdown, "핵심 개념");
  if (conceptSection) {
    return conceptSection
      .split("\n")
      .map((line) => line.replace(/^[-*]\s*/, "").trim())
      .filter(Boolean)
      .slice(0, 4);
  }

  return [extractSummary(markdown)].filter(Boolean);
}

function buildChapters(topics) {
  const chapterMap = new Map();
  for (const topic of topics) {
    if (!chapterMap.has(topic.chapterKey)) {
      chapterMap.set(topic.chapterKey, {
        key: topic.chapterKey,
        volume: topic.volume,
        chapter: topic.chapter,
        label: topic.chapterLabel,
        topicCount: 0,
      });
    }
    chapterMap.get(topic.chapterKey).topicCount += 1;
  }
  return [...chapterMap.values()].sort(
    (left, right) => left.volume - right.volume || left.chapter - right.chapter,
  );
}

export async function buildLearningDataset() {
  const topicFiles = await collectFiles(CONTENT_ROOT, ".md");
  const questionFiles = await collectFiles(QUESTION_ROOT, ".yaml");
  const glossaryMarkdown = await fs.readFile(GLOSSARY_PATH, "utf8");

  const topics = (
    await Promise.all(
      topicFiles.map(async (filePath) => {
        const raw = await fs.readFile(filePath, "utf8");
        const parsed = matter(raw);
        const data = parsed.data;
        const volume = Number(data.volume);
        const chapter = Number(data.chapter);
        const section = Number(data.section);
        const order = Number(data.order);
        const chapterKey = `V${volume}-C${chapter}`;
        const body = parsed.content.trim();

        return {
          id: String(data.id),
          slug: String(data.slug),
          title: String(data.title),
          title_en: data.title_en ? String(data.title_en) : undefined,
          volume,
          chapter,
          section,
          order,
          status: String(data.status ?? "drafting"),
          difficulty: String(data.difficulty ?? "basic"),
          importance: String(data.importance ?? "C"),
          exam_frequency: String(data.exam_frequency ?? "unknown"),
          estimated_minutes: Number(data.estimated_minutes ?? 0),
          prerequisites: Array.isArray(data.prerequisites) ? data.prerequisites.map(String) : [],
          related_topics: Array.isArray(data.related_topics) ? data.related_topics.map(String) : [],
          tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
          content_type: Array.isArray(data.content_type) ? data.content_type.map(String) : [],
          as_of_date: data.as_of_date ? String(data.as_of_date) : undefined,
          verified: Boolean(data.verified),
          reviewers: Array.isArray(data.reviewers) ? data.reviewers.map(String) : [],
          references: Array.isArray(data.references) ? data.references.map(String) : [],
          assets: Array.isArray(data.assets) ? data.assets.map(String) : [],
          questions: Array.isArray(data.questions) ? data.questions.map(String) : [],
          body,
          summary: extractSummary(body),
          keyPoints: extractKeyPoints(body),
          chapterKey,
          chapterLabel: getChapterLabel(volume, chapter, chapterKey),
        };
      }),
    )
  ).sort(
    (left, right) =>
      left.volume - right.volume ||
      left.chapter - right.chapter ||
      left.section - right.section ||
      left.order - right.order,
  );

  const questions = (
    await Promise.all(
      questionFiles.map(async (filePath) => {
        const raw = await fs.readFile(filePath, "utf8");
        const parsed = parseConstrainedYaml(raw);
        const options = Array.isArray(parsed.options)
          ? parsed.options.map((option) => ({
              id: String(option.id),
              text: String(option.text),
            }))
          : [];

        return {
          id: String(parsed.id),
          status: String(parsed.status ?? "drafting"),
          type: String(parsed.type ?? "multiple_choice"),
          topic_ids: Array.isArray(parsed.topic_ids) ? parsed.topic_ids.map(String) : [],
          subject_area: parsed.subject_area ? String(parsed.subject_area) : undefined,
          difficulty: parsed.difficulty ? String(parsed.difficulty) : undefined,
          cognitive_level: parsed.cognitive_level ? String(parsed.cognitive_level) : undefined,
          importance: parsed.importance ? String(parsed.importance) : undefined,
          stem: String(parsed.stem ?? ""),
          options,
          answer: Array.isArray(parsed.answer) ? parsed.answer.map(String) : [],
          explanation: String(parsed.explanation ?? ""),
          distractor_explanations:
            parsed.distractor_explanations &&
            typeof parsed.distractor_explanations === "object"
              ? Object.fromEntries(
                  Object.entries(parsed.distractor_explanations).map(([key, value]) => [
                    key,
                    String(value),
                  ]),
                )
              : {},
          references: Array.isArray(parsed.references) ? parsed.references.map(String) : [],
          verified: Boolean(parsed.verified),
        };
      }),
    )
  ).sort((left, right) => left.id.localeCompare(right.id));

  const glossaryEntries = extractGlossaryEntries(glossaryMarkdown);

  return {
    topics,
    questions,
    glossaryEntries,
    glossaryMarkdown,
    volumes: [...new Set(topics.map((topic) => topic.volume))].sort((a, b) => a - b),
    chapters: buildChapters(topics),
  };
}

export async function writeLearningDatasetSnapshot() {
  const dataset = await buildLearningDataset();
  await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await fs.writeFile(OUTPUT_PATH, `${JSON.stringify(dataset, null, 2)}\n`, "utf8");
  return OUTPUT_PATH;
}
