import { cache } from "react";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

import type {
  CatalogChapter,
  GlossaryEntry,
  LearningDataset,
  Question,
  Topic,
} from "@/lib/types";

const REPO_ROOT = path.resolve(process.cwd(), "..", "..");
const MD_ROOT = path.join(REPO_ROOT, "md files");
const CONTENT_ROOT = path.join(MD_ROOT, "content");
const QUESTION_ROOT = path.join(MD_ROOT, "questions");
const GLOSSARY_PATH = path.join(MD_ROOT, "GLOSSARY.md");
const BLOCK_SCALAR = /^[|>][-+]?$/;

async function collectFiles(dir: string, extension: string): Promise<string[]> {
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

type Token = {
  indent: number;
  content: string;
};

function parseScalar(raw: string): unknown {
  const text = raw.trim();
  if (text === "") {
    return null;
  }
  if (text === "[]") {
    return [];
  }
  if (text === "{}") {
    return {};
  }
  if (text === "true") {
    return true;
  }
  if (text === "false") {
    return false;
  }
  if (text === "null" || text === "~") {
    return null;
  }
  if (/^\[.*\]$/.test(text)) {
    const inner = text.slice(1, -1).trim();
    return inner === ""
      ? []
      : inner.split(",").map((item) => parseScalar(item.trim()));
  }
  if ((/^".*"$/).test(text) || (/^'.*'$/).test(text)) {
    return text.slice(1, -1);
  }
  if (/^-?\d+(\.\d+)?$/.test(text)) {
    return Number(text);
  }
  return text;
}

function tokenizeYaml(text: string): Token[] {
  return text
    .split("\n")
    .filter((line) => line.trim() !== "" && !line.trim().startsWith("#"))
    .map((line) => ({
      indent: line.length - line.trimStart().length,
      content: line.trim(),
    }));
}

function readBlockScalar(tokens: Token[], index: number, indent: number, marker: string) {
  const folded = marker.startsWith(">");
  const lines: string[] = [];
  let nextIndex = index;

  while (nextIndex < tokens.length && tokens[nextIndex].indent > indent) {
    lines.push(tokens[nextIndex].content);
    nextIndex += 1;
  }

  const text = folded
    ? lines.join(" ").replace(/\s+/g, " ").trim()
    : lines.join("\n");
  return [text, nextIndex] as const;
}

function parseYamlBlock(tokens: Token[], index: number, indent: number): [unknown, number] {
  if (index >= tokens.length || tokens[index].indent < indent) {
    return [null, index];
  }

  if (tokens[index].content.startsWith("- ") || tokens[index].content === "-") {
    const items: unknown[] = [];
    let nextIndex = index;

    while (
      nextIndex < tokens.length &&
      tokens[nextIndex].indent === indent &&
      (tokens[nextIndex].content.startsWith("- ") || tokens[nextIndex].content === "-")
    ) {
      const itemContent =
        tokens[nextIndex].content === "-"
          ? ""
          : tokens[nextIndex].content.slice(2);

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
        const record: Record<string, unknown> = {};

        if (BLOCK_SCALAR.test(remainder)) {
          const [text, childIndex] = readBlockScalar(
            tokens,
            nextIndex + 1,
            indent,
            remainder,
          );
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

  const record: Record<string, unknown> = {};
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

function parseConstrainedYaml(text: string) {
  const tokens = tokenizeYaml(text);
  if (tokens.length === 0) {
    return {};
  }
  const [value] = parseYamlBlock(tokens, 0, tokens[0].indent);
  return value as Record<string, unknown>;
}

function normalizeParagraphs(markdown: string) {
  return markdown
    .replace(/^# .*\n?/m, "")
    .split(/\n{2,}/)
    .map((chunk) => chunk.trim())
    .filter(Boolean);
}

function extractSection(markdown: string, heading: string) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const sectionPattern = new RegExp(
    `^## ${escaped}\\s*$\\n?([\\s\\S]*?)(?=^##\\s|$)`,
    "m",
  );
  const match = markdown.match(sectionPattern);
  return match?.[1]?.trim() ?? "";
}

function extractSummary(markdown: string) {
  const summarySection = extractSection(markdown, "핵심 요약");
  if (summarySection) {
    return summarySection
      .split("\n")
      .map((line) => line.replace(/^[-*]\s*/, "").trim())
      .filter(Boolean)
      .join(" ");
  }

  const firstParagraph = normalizeParagraphs(markdown).find(
    (paragraph) => !paragraph.startsWith("## "),
  );
  return firstParagraph ?? "";
}

function extractKeyPoints(markdown: string) {
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

export const getTopics = cache(async (): Promise<Topic[]> => {
  const files = await collectFiles(CONTENT_ROOT, ".md");
  const topics = await Promise.all(
    files.map(async (filePath) => {
      const raw = await fs.readFile(filePath, "utf8");
      const parsed = matter(raw);
      const data = parsed.data as Record<string, unknown>;
      const volume = Number(data.volume);
      const chapter = Number(data.chapter);
      const section = Number(data.section);
      const order = Number(data.order);
      const chapterKey = `V${volume}-C${chapter}`;

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
        prerequisites: Array.isArray(data.prerequisites)
          ? data.prerequisites.map(String)
          : [],
        related_topics: Array.isArray(data.related_topics)
          ? data.related_topics.map(String)
          : [],
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        content_type: Array.isArray(data.content_type)
          ? data.content_type.map(String)
          : [],
        as_of_date: data.as_of_date ? String(data.as_of_date) : undefined,
        verified: Boolean(data.verified),
        reviewers: Array.isArray(data.reviewers) ? data.reviewers.map(String) : [],
        references: Array.isArray(data.references)
          ? data.references.map(String)
          : [],
        assets: Array.isArray(data.assets) ? data.assets.map(String) : [],
        questions: Array.isArray(data.questions)
          ? data.questions.map(String)
          : [],
        body: parsed.content.trim(),
        summary: extractSummary(parsed.content.trim()),
        keyPoints: extractKeyPoints(parsed.content.trim()),
        chapterKey,
        chapterLabel: `Volume ${volume} · Chapter ${chapter}`,
      } satisfies Topic;
    }),
  );

  return topics.sort(
    (left, right) =>
      left.volume - right.volume ||
      left.chapter - right.chapter ||
      left.section - right.section ||
      left.order - right.order,
  );
});

export const getQuestions = cache(async (): Promise<Question[]> => {
  const files = await collectFiles(QUESTION_ROOT, ".yaml");
  const questions = await Promise.all(
    files.map(async (filePath) => {
      const raw = await fs.readFile(filePath, "utf8");
      const parsed = parseConstrainedYaml(raw);
      const options = Array.isArray(parsed.options)
        ? parsed.options.map((option) => {
            const item = option as Record<string, unknown>;
            return {
              id: String(item.id),
              text: String(item.text),
            };
          })
        : [];

      return {
        id: String(parsed.id),
        status: String(parsed.status ?? "drafting"),
        type: String(parsed.type ?? "multiple_choice"),
        topic_ids: Array.isArray(parsed.topic_ids) ? parsed.topic_ids.map(String) : [],
        subject_area: parsed.subject_area ? String(parsed.subject_area) : undefined,
        difficulty: parsed.difficulty ? String(parsed.difficulty) : undefined,
        cognitive_level: parsed.cognitive_level
          ? String(parsed.cognitive_level)
          : undefined,
        importance: parsed.importance ? String(parsed.importance) : undefined,
        stem: String(parsed.stem ?? ""),
        options,
        answer: Array.isArray(parsed.answer) ? parsed.answer.map(String) : [],
        explanation: String(parsed.explanation ?? ""),
        distractor_explanations:
          typeof parsed.distractor_explanations === "object" &&
          parsed.distractor_explanations !== null
            ? Object.fromEntries(
                Object.entries(
                  parsed.distractor_explanations as Record<string, unknown>,
                ).map(([key, value]) => [key, String(value)]),
              )
            : {},
        references: Array.isArray(parsed.references)
          ? parsed.references.map(String)
          : [],
        verified: Boolean(parsed.verified),
      } satisfies Question;
    }),
  );

  return questions.sort((left, right) => left.id.localeCompare(right.id));
});

export const getGlossaryMarkdown = cache(async () => {
  return fs.readFile(GLOSSARY_PATH, "utf8");
});

export const getGlossaryEntries = cache(async (): Promise<GlossaryEntry[]> => {
  const markdown = await getGlossaryMarkdown();
  const section = extractSection(markdown, "핵심 용어");
  const rows = section
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("|"))
    .slice(2);

  return rows
    .map((row) => {
      const cells = row
        .split("|")
        .map((cell) => cell.trim())
        .filter(Boolean);

      if (cells.length < 4) {
        return null;
      }

      return {
        term: cells[0],
        english: cells[1],
        abbreviation: cells[2],
        description: cells[3],
      } satisfies GlossaryEntry;
    })
    .filter((entry): entry is GlossaryEntry => entry !== null);
});

function buildChapters(topics: Topic[]): CatalogChapter[] {
  const chapterMap = new Map<string, CatalogChapter>();

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

    const chapter = chapterMap.get(topic.chapterKey);
    if (chapter) {
      chapter.topicCount += 1;
    }
  }

  return [...chapterMap.values()].sort(
    (left, right) =>
      left.volume - right.volume || left.chapter - right.chapter,
  );
}

export const getLearningDataset = cache(async (): Promise<LearningDataset> => {
  const [topics, questions, glossaryEntries, glossaryMarkdown] = await Promise.all([
    getTopics(),
    getQuestions(),
    getGlossaryEntries(),
    getGlossaryMarkdown(),
  ]);
  const volumes = [...new Set(topics.map((topic) => topic.volume))].sort(
    (left, right) => left - right,
  );

  return {
    topics,
    questions,
    glossaryEntries,
    glossaryMarkdown,
    volumes,
    chapters: buildChapters(topics),
  };
});
