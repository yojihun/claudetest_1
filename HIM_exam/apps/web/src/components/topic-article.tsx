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

function slugifySectionTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
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

  return matches.map((match, index) => {
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
  });
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
    <article className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-7 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.45)]">
      <div className="space-y-3">
        <p className="text-sm font-medium text-emerald-800">
          {getTopicOutlineLabel(topic)}
        </p>
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <span>{topic.estimated_minutes}분</span>
          <span>난이도 {topic.difficulty}</span>
          <span>Section {topic.section}</span>
        </div>
      </div>

      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950">
        {topic.title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600">{topic.summary}</p>

      {!compact ? (
        <div className="mt-10 space-y-6">
          <nav className="rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              빠른 이동
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-300 hover:text-emerald-800"
                >
                  {index + 1}. {section.title}
                </a>
              ))}
            </div>
          </nav>

          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_-46px_rgba(15,23,42,0.5)]"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-emerald-100 px-3 text-sm font-semibold text-emerald-900">
                  {index + 1}
                </span>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {section.title}
                </h3>
              </div>

              <div className="mt-5 text-[17px] leading-8 text-slate-800">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => (
                      <h4 className="mt-10 mb-4 text-2xl font-semibold tracking-tight text-slate-950">
                        {children}
                      </h4>
                    ),
                    h2: ({ children }) => (
                      <h4 className="mt-10 mb-4 text-2xl font-semibold tracking-tight text-slate-950">
                        {children}
                      </h4>
                    ),
                    h3: ({ children }) => (
                      <h5 className="mt-8 mb-3 text-xl font-semibold tracking-tight text-slate-950">
                        {children}
                      </h5>
                    ),
                    p: ({ children }) => (
                      <p className="my-5 text-[17px] leading-8 text-slate-800">
                        {children}
                      </p>
                    ),
                    ol: ({ children }) => (
                      <ol className="my-5 list-decimal space-y-3 pl-7 text-[17px] leading-8 text-slate-800 marker:font-semibold marker:text-amber-500">
                        {children}
                      </ol>
                    ),
                    ul: ({ children }) => (
                      <ul className="my-5 list-disc space-y-3 pl-7 text-[17px] leading-8 text-slate-800 marker:text-emerald-600">
                        {children}
                      </ul>
                    ),
                    li: ({ children }) => <li className="pl-1">{children}</li>,
                    table: ({ children }) => (
                      <div className="my-7 overflow-x-auto rounded-2xl border border-slate-200">
                        <table className="min-w-full border-collapse bg-white text-left text-sm">
                          {children}
                        </table>
                      </div>
                    ),
                    thead: ({ children }) => (
                      <thead className="bg-slate-50">{children}</thead>
                    ),
                    th: ({ children }) => (
                      <th className="border-b border-slate-200 px-4 py-3 font-semibold text-slate-950">
                        {children}
                      </th>
                    ),
                    td: ({ children }) => (
                      <td className="border-b border-slate-100 px-4 py-3 align-top text-slate-700">
                        {children}
                      </td>
                    ),
                    a: ({ children, href }) => (
                      <a
                        href={href}
                        className="font-medium text-emerald-800 underline underline-offset-2"
                      >
                        {children}
                      </a>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold text-slate-950">
                        {children}
                      </strong>
                    ),
                    code: ({ children }) => (
                      <code className="rounded bg-slate-100 px-1.5 py-0.5 text-[0.95em] text-slate-900">
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
          <h3 className="text-sm font-semibold text-slate-900">핵심 복습 포인트</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
            {topic.keyPoints.map((point) => (
              <li
                key={point}
                className="rounded-2xl bg-slate-50 px-4 py-3"
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
