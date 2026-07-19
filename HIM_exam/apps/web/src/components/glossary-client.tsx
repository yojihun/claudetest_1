"use client";

import { startTransition, useDeferredValue, useEffect, useMemo, useState } from "react";

import {
  loadSavedGlossaryTerms,
  saveSavedGlossaryTerms,
} from "@/lib/storage";
import type { GlossaryEntry } from "@/lib/types";

function createTermId(entry: GlossaryEntry) {
  return `${entry.term}__${entry.abbreviation}__${entry.english}`;
}

function pickRandomEntry(entries: GlossaryEntry[], excludeId?: string) {
  if (entries.length === 0) {
    return null;
  }

  if (entries.length === 1) {
    return entries[0];
  }

  const filtered = excludeId
    ? entries.filter((entry) => createTermId(entry) !== excludeId)
    : entries;

  const pool = filtered.length > 0 ? filtered : entries;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function GlossaryClient({ entries }: { entries: GlossaryEntry[] }) {
  const [query, setQuery] = useState("");
  const [activeEntry, setActiveEntry] = useState<GlossaryEntry | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [savedTermIds, setSavedTermIds] = useState<string[]>([]);
  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = deferredQuery.trim().toLowerCase();

  useEffect(() => {
    startTransition(() => {
      setSavedTermIds(loadSavedGlossaryTerms());
      setActiveEntry(pickRandomEntry(entries));
    });
  }, [entries]);

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

  const activeEntryId = activeEntry ? createTermId(activeEntry) : null;
  const isSaved = activeEntryId ? savedTermIds.includes(activeEntryId) : false;

  const savedEntries = useMemo(
    () =>
      savedTermIds
        .map((termId) => entries.find((entry) => createTermId(entry) === termId))
        .filter((entry): entry is GlossaryEntry => entry !== undefined),
    [entries, savedTermIds],
  );

  function showNextTerm() {
    const nextEntry = pickRandomEntry(entries, activeEntryId ?? undefined);
    startTransition(() => {
      setActiveEntry(nextEntry);
      setRevealed(false);
    });
  }

  function saveCurrentTerm() {
    if (!activeEntryId || savedTermIds.includes(activeEntryId)) {
      return;
    }

    const nextIds = [...savedTermIds, activeEntryId];
    setSavedTermIds(nextIds);
    saveSavedGlossaryTerms(nextIds);
  }

  function removeSavedTerm(termId: string) {
    const nextIds = savedTermIds.filter((savedId) => savedId !== termId);
    setSavedTermIds(nextIds);
    saveSavedGlossaryTerms(nextIds);
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-6">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
          의학용어 사전
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          카드를 눌러 의미를 확인하고, 모르는 용어는 저장해둘 수 있습니다.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-6">
          <div
            role="button"
            tabIndex={0}
            onClick={() => setRevealed((current) => !current)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setRevealed((current) => !current);
              }
            }}
            className="min-h-80 cursor-pointer rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(160deg,_rgba(240,249,244,0.95),_rgba(255,255,255,0.98))] p-7 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.45)] outline-none transition hover:border-emerald-300"
          >
            {activeEntry ? (
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                    랜덤 카드
                  </p>
                  <h3 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950">
                    {activeEntry.term}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeEntry.abbreviation !== "-" ? (
                      <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-emerald-800">
                        {activeEntry.abbreviation}
                      </span>
                    ) : null}
                    <span className="rounded-full bg-white px-3 py-1 text-sm text-slate-600">
                      {activeEntry.english}
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  {revealed ? (
                    <div className="rounded-[1.5rem] bg-white/85 p-5">
                      <p className="text-sm font-semibold text-slate-500">의미</p>
                      <p className="mt-3 text-lg leading-8 text-slate-800">
                        {activeEntry.description}
                      </p>
                    </div>
                  ) : (
                    <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-white/55 px-5 py-6 text-sm text-slate-500">
                      카드를 클릭하면 의미가 보입니다.
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-sm text-slate-500">표시할 용어가 없습니다.</p>
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={showNextTerm}
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-800"
            >
              다음
            </button>
            <button
              type="button"
              onClick={saveCurrentTerm}
              disabled={!activeEntry || isSaved}
              className="rounded-full bg-slate-100 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
            >
              {isSaved ? "저장됨" : "저장"}
            </button>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-slate-200 bg-white/90 p-6">
          <h3 className="text-xl font-semibold tracking-tight text-slate-950">
            저장한 용어
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            나중에 다시 보고 싶은 용어
          </p>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
            {savedEntries.length}
          </p>

          <div className="mt-5 space-y-3">
            {savedEntries.length > 0 ? (
              savedEntries.slice(0, 6).map((entry) => {
                const termId = createTermId(entry);
                return (
                  <div
                    key={termId}
                    className="rounded-2xl bg-slate-50 px-4 py-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-slate-950">{entry.term}</p>
                        <p className="mt-1 text-sm text-slate-500">
                          {entry.english}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeSavedTerm(termId)}
                        className="text-sm text-slate-500 transition hover:text-rose-700"
                      >
                        제거
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 px-4 py-5 text-sm text-slate-500">
                아직 저장한 용어가 없습니다.
              </div>
            )}
          </div>
        </aside>
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-6">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
          사전 검색
        </h3>

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
