"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import type { Topic } from "@/lib/types";

export function TopicArticle({
  topic,
  compact = false,
}: {
  topic: Topic;
  compact?: boolean;
}) {
  return (
    <article className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.45)]">
      <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
        <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">
          {topic.chapterLabel}
        </span>
        <span>{topic.estimated_minutes}분 학습</span>
        <span>난이도 {topic.difficulty}</span>
      </div>

      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
        {topic.title}
      </h2>
      <p className="mt-2 text-sm text-slate-600">{topic.summary}</p>

      {!compact ? (
        <div className="prose prose-slate mt-6 max-w-none prose-headings:scroll-mt-24 prose-headings:font-semibold prose-li:marker:text-emerald-600">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{topic.body}</ReactMarkdown>
        </div>
      ) : (
        <div className="mt-5">
          <h3 className="text-sm font-semibold text-slate-900">핵심 복습 포인트</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
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
