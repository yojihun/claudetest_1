"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { getTopicOutlineLabel } from "@/lib/course-meta";
import type { Topic } from "@/lib/types";

type TopicSection = {
  id: string;
  title: string;
  body: string;
};

const hiddenSectionTitles = new Set(["연습문제", "참고문헌"]);
const emptySectionPatterns = [
  /^이 topic은 .*특정 .*근거하지 않는다\.?$/i,
  /^이 topic은 .*관련 내용이 없다\.?$/i,
  /^이 topic은 .*해당 내용이 없다\.?$/i,
  /^해당 내용 없음\.?$/i,
  /^해당 없음\.?$/i,
  /^없음\.?$/i,
];

function slugifySectionTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function isEffectivelyEmptySection(body: string) {
  const normalized = body
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
    .replace(/^[-*]\s+/gm, "")
    .replace(/\s+/g, " ")
    .trim();

  if (!normalized) {
    return true;
  }

  return emptySectionPatterns.some((pattern) => pattern.test(normalized));
}

function parseTopicSections(markdown: string): TopicSection[] {
  const matches = [...markdown.matchAll(/^##\s+(.+)$/gm)];

  if (matches.length === 0) {
    return [
      {
        id: "content",
        title: "학습 내용",
        body: markdown.trim(),
      },
    ];
  }

  return matches
    .map((match, index) => {
      const title = match[1].trim();
      const start = match.index ?? 0;
      const nextStart = matches[index + 1]?.index ?? markdown.length;
      const sectionBody = markdown
        .slice(start, nextStart)
        .replace(/^##\s+.+$/m, "")
        .trim();

      return {
        id: slugifySectionTitle(title) || `section-${index + 1}`,
        title,
        body: sectionBody,
      };
    })
    .filter(
      (section) =>
        !hiddenSectionTitles.has(section.title) && !isEffectivelyEmptySection(section.body),
    );
}

export function TopicArticle({
  topic,
  compact = false,
}: {
  topic: Topic;
  compact?: boolean;
}) {
  const markdownBody = topic.body.replace(/^# .*\n+/m, "");
  const sections = parseTopicSections(markdownBody);

  return (
    <article className="app-panel-strong rounded-[2rem] p-7">
      <div className="space-y-3">
        <p className="text-sm font-semibold text-[var(--teal)]">
          {getTopicOutlineLabel(topic)}
        </p>
        <div className="flex flex-wrap items-center gap-2 text-sm text-[rgba(16,32,51,0.56)]">
          <span className="app-chip rounded-full px-3 py-1">{topic.estimated_minutes}분</span>
          <span className="app-chip rounded-full px-3 py-1">난이도 {topic.difficulty}</span>
          <span className="app-chip rounded-full px-3 py-1">Section {topic.section}</span>
        </div>
      </div>

      <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.05em] text-[var(--navy)] md:text-4xl">
        {topic.title}
      </h2>
      <p className="mt-4 max-w-4xl text-[15px] leading-8 text-[rgba(16,32,51,0.72)] md:text-base">
        {topic.summary}
      </p>

      {!compact ? (
        <div className="mt-10 space-y-6">
          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="app-panel scroll-mt-24 rounded-[1.75rem] p-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--blue-soft),var(--gold-soft))] px-3 text-sm font-bold text-[var(--navy)]">
                  {index + 1}
                </span>
                <h3 className="text-2xl font-extrabold tracking-[-0.04em] text-[var(--navy)]">
                  {section.title}
                </h3>
              </div>

              <div className="mt-5 text-[15px] leading-8 text-[rgba(16,32,51,0.88)] md:text-[17px]">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => (
                      <h4 className="mt-10 mb-4 text-2xl font-extrabold tracking-[-0.04em] text-[var(--navy)]">
                        {children}
                      </h4>
                    ),
                    h2: ({ children }) => (
                      <h4 className="mt-10 mb-4 text-2xl font-extrabold tracking-[-0.04em] text-[var(--navy)]">
                        {children}
                      </h4>
                    ),
                    h3: ({ children }) => (
                      <h5 className="mt-8 mb-3 text-xl font-bold tracking-[-0.03em] text-[var(--navy)]">
                        {children}
                      </h5>
                    ),
                    p: ({ children }) => (
                      <p className="my-5 text-[15px] leading-8 text-[rgba(16,32,51,0.88)] md:text-[17px]">
                        {children}
                      </p>
                    ),
                    ol: ({ children }) => (
                      <ol className="my-5 list-decimal space-y-3 pl-7 text-[15px] leading-8 text-[rgba(16,32,51,0.88)] marker:font-semibold marker:text-[var(--gold)] md:text-[17px]">
                        {children}
                      </ol>
                    ),
                    ul: ({ children }) => (
                      <ul className="my-5 list-disc space-y-3 pl-7 text-[15px] leading-8 text-[rgba(16,32,51,0.88)] marker:text-[var(--teal)] md:text-[17px]">
                        {children}
                      </ul>
                    ),
                    li: ({ children }) => <li className="pl-1">{children}</li>,
                    table: ({ children }) => (
                      <div className="my-7 overflow-x-auto rounded-[1.5rem] border border-[rgba(16,32,51,0.1)] bg-white/88">
                        <table className="min-w-full border-collapse text-left text-sm">
                          {children}
                        </table>
                      </div>
                    ),
                    thead: ({ children }) => (
                      <thead className="bg-[rgba(16,32,51,0.04)]">{children}</thead>
                    ),
                    th: ({ children }) => (
                      <th className="border-b border-[rgba(16,32,51,0.1)] px-4 py-3 font-semibold text-[var(--navy)]">
                        {children}
                      </th>
                    ),
                    td: ({ children }) => (
                      <td className="border-b border-[rgba(16,32,51,0.06)] px-4 py-3 align-top text-[rgba(16,32,51,0.76)]">
                        {children}
                      </td>
                    ),
                    a: ({ children, href }) => (
                      <a
                        href={href}
                        className="font-medium text-[var(--teal)] underline underline-offset-2"
                      >
                        {children}
                      </a>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold text-[var(--navy)]">
                        {children}
                      </strong>
                    ),
                    code: ({ children }) => (
                      <code className="rounded-lg bg-[rgba(36,91,219,0.08)] px-1.5 py-0.5 text-[0.95em] text-[var(--navy)]">
                        {children}
                      </code>
                    ),
                  }}
                >
                  {section.body}
                </ReactMarkdown>
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="mt-7">
          <h3 className="text-sm font-semibold text-[var(--navy)]">핵심 복습 포인트</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[rgba(16,32,51,0.78)]">
            {topic.keyPoints.map((point) => (
              <li
                key={point}
                className="rounded-2xl border border-[rgba(36,91,219,0.1)] bg-white/74 px-4 py-3"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
