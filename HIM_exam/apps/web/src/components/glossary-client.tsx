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
      <section className="app-panel-strong rounded-[2rem] p-6">
        <p className="app-kicker">Glossary Lab</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.05em] text-[var(--navy)]">
          의학용어 사전
        </h2>
        <p className="mt-2 text-sm leading-7 app-subtle">
          카드를 눌러 의미를 확인하고, 모르는 용어는 저장해둘 수 있습니다.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="app-panel-strong rounded-[2rem] p-6">
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
            className="min-h-80 cursor-pointer rounded-[1.75rem] border border-[rgba(36,91,219,0.14)] bg-[linear-gradient(145deg,rgba(16,32,51,0.98),rgba(36,91,219,0.9)_52%,rgba(2,140,116,0.88))] p-7 text-white shadow-[0_30px_80px_-38px_rgba(16,32,51,0.8)] outline-none transition hover:border-[rgba(255,255,255,0.24)]"
          >
            {activeEntry ? (
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(255,255,255,0.72)]">
                    랜덤 카드
                  </p>
                  <h3 className="mt-5 text-4xl font-extrabold tracking-[-0.05em] text-white">
                    {activeEntry.term}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {activeEntry.abbreviation !== "-" ? (
                      <span className="rounded-full bg-[rgba(255,255,255,0.18)] px-3 py-1 text-sm font-semibold text-white">
                        {activeEntry.abbreviation}
                      </span>
                    ) : null}
                    {activeEntry.english ? (
                      <span className="rounded-full bg-[rgba(255,255,255,0.12)] px-3 py-1 text-sm text-[rgba(255,255,255,0.8)]">
                        {activeEntry.english}
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="mt-8">
                  {revealed ? (
                    <div className="rounded-[1.5rem] bg-[rgba(255,255,255,0.92)] p-5">
                      <p className="text-sm font-semibold text-[rgba(16,32,51,0.54)]">의미</p>
                      <p className="mt-3 text-lg leading-8 text-[var(--navy)]">
                        {activeEntry.description}
                      </p>
                    </div>
                  ) : (
                    <div className="rounded-[1.5rem] border border-dashed border-[rgba(255,255,255,0.28)] bg-[rgba(255,255,255,0.08)] px-5 py-6 text-sm text-[rgba(255,255,255,0.72)]">
                      카드를 클릭하면 의미가 보입니다.
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-sm text-[rgba(255,255,255,0.72)]">표시할 용어가 없습니다.</p>
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={showNextTerm}
              className="app-button-primary rounded-full px-5 py-3 text-sm font-semibold transition"
            >
              다음
            </button>
            <button
              type="button"
              onClick={saveCurrentTerm}
              disabled={!activeEntry || isSaved}
              className="app-button-secondary rounded-full px-5 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-45"
            >
              {isSaved ? "저장됨" : "저장"}
            </button>
          </div>
        </div>

        <aside className="app-panel rounded-[2rem] p-6">
          <p className="app-kicker">Saved Terms</p>
          <h3 className="mt-2 text-xl font-extrabold tracking-[-0.04em] text-[var(--navy)]">
            저장한 용어
          </h3>
          <p className="mt-2 text-sm app-subtle">
            나중에 다시 보고 싶은 용어
          </p>
          <p className="mt-4 app-metric">
            {savedEntries.length}
          </p>

          <div className="mt-5 space-y-3">
            {savedEntries.length > 0 ? (
              savedEntries.slice(0, 6).map((entry) => {
                const termId = createTermId(entry);
                return (
                  <div
                    key={termId}
                    className="rounded-2xl border border-[rgba(16,32,51,0.08)] bg-white/72 px-4 py-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-[var(--navy)]">{entry.term}</p>
                        {entry.english ? (
                          <p className="mt-1 text-sm text-[rgba(16,32,51,0.52)]">
                            {entry.english}
                          </p>
                        ) : null}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeSavedTerm(termId)}
                        className="text-sm text-[rgba(16,32,51,0.52)] transition hover:text-[var(--rose)]"
                      >
                        제거
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="rounded-2xl border border-dashed border-[rgba(16,32,51,0.16)] px-4 py-5 text-sm text-[rgba(16,32,51,0.52)]">
                아직 저장한 용어가 없습니다.
              </div>
            )}
          </div>
        </aside>
      </section>

      <section className="app-panel rounded-[2rem] p-6">
        <p className="app-kicker">Search</p>
        <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.04em] text-[var(--navy)]">
          사전 검색
        </h3>

        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="예: HIM, EHR, 무결성"
          className="app-input mt-5 w-full rounded-2xl px-4 py-4 text-sm outline-none"
        />
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredEntries.map((entry) => (
          <article
            key={`${entry.term}-${entry.abbreviation}`}
            className="app-panel rounded-[2rem] p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-[var(--navy)]">{entry.term}</h3>
                {entry.english ? (
                  <p className="mt-1 text-sm text-[rgba(16,32,51,0.52)]">{entry.english}</p>
                ) : null}
              </div>
              {entry.abbreviation !== "-" ? (
                <span className="app-chip rounded-full px-3 py-1 text-[var(--teal)]">
                  {entry.abbreviation}
                </span>
              ) : null}
            </div>
            <p className="mt-4 text-sm leading-7 text-[rgba(16,32,51,0.76)]">
              {entry.description}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
