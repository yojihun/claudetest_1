"use client";

import { useDeferredValue, useState } from "react";

import type { GlossaryEntry } from "@/lib/types";

export function GlossaryClient({ entries }: { entries: GlossaryEntry[] }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = deferredQuery.trim().toLowerCase();

  const filteredEntries = entries.filter((entry) => {
    if (!normalizedQuery) {
      return true;
    }

    const searchSpace = [
      entry.term,
      entry.english,
      entry.abbreviation,
      entry.description,
    ]
      .join(" ")
      .toLowerCase();

    return searchSpace.includes(normalizedQuery);
  });

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
          Glossary
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
          의학용어 사전
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          프로젝트 표준 표기와 약어를 바로 검색할 수 있습니다.
        </p>

        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="예: HIM, EHR, 무결성"
          className="mt-5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm outline-none focus:border-emerald-400"
        />
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredEntries.map((entry) => (
          <article
            key={`${entry.term}-${entry.abbreviation}`}
            className="rounded-[2rem] border border-slate-200 bg-white/90 p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-950">{entry.term}</h3>
                <p className="mt-1 text-sm text-slate-500">{entry.english}</p>
              </div>
              {entry.abbreviation !== "-" ? (
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                  {entry.abbreviation}
                </span>
              ) : null}
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              {entry.description}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
