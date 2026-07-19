"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { getTopicOutlineLabel } from "@/lib/course-meta";
import type { Topic } from "@/lib/types";

export function TopicArticle({
  topic,
  compact = false,
}: {
  topic: Topic;
  compact?: boolean;
}) {
  const markdownBody = topic.body.replace(/^# .*\n+/m, "");

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
        <div className="prose prose-slate mt-10 max-w-none text-[17px] leading-8 prose-headings:scroll-mt-24 prose-headings:font-semibold prose-h2:mt-14 prose-h2:mb-5 prose-h2:text-2xl prose-h2:text-slate-950 prose-h3:mt-10 prose-h3:mb-4 prose-p:my-6 prose-p:leading-8 prose-li:my-2 prose-li:leading-8 prose-li:marker:text-emerald-600 prose-ol:my-6 prose-ul:my-6 prose-table:my-8 prose-td:align-top prose-th:text-slate-950">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownBody}</ReactMarkdown>
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
