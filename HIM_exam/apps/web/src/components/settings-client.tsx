"use client";

import { startTransition, useEffect, useMemo, useState } from "react";

import { QuestionCard } from "@/components/question-card";
import { loadFocusSettings, loadReviewQuestionIds, saveFocusSettings, saveReviewQuestionIds } from "@/lib/storage";
import type { FocusSettings, LearningDataset } from "@/lib/types";

export function SettingsClient({ dataset }: { dataset: LearningDataset }) {
  const [focusSettings, setFocusSettings] = useState<FocusSettings>({ mode: "none" });
  const [savedQuestionIds, setSavedQuestionIds] = useState<string[]>([]);

  useEffect(() => {
    const nextFocusSettings = loadFocusSettings();
    const nextSavedQuestionIds = loadReviewQuestionIds();
    startTransition(() => {
      setFocusSettings(nextFocusSettings);
      setSavedQuestionIds(nextSavedQuestionIds);
    });
  }, []);

  const savedQuestions = useMemo(
    () =>
      savedQuestionIds
        .map((questionId) =>
          dataset.questions.find((question) => question.id === questionId),
        )
        .filter((question) => question !== undefined),
    [dataset.questions, savedQuestionIds],
  );

  function updateFocusSettings(nextSettings: FocusSettings) {
    setFocusSettings(nextSettings);
    saveFocusSettings(nextSettings);
  }

  function removeReviewQuestion(questionId: string) {
    const nextIds = savedQuestionIds.filter((savedId) => savedId !== questionId);
    setSavedQuestionIds(nextIds);
    saveReviewQuestionIds(nextIds);
  }

  function addReviewQuestion(questionId: string) {
    if (savedQuestionIds.includes(questionId)) {
      return;
    }

    const nextIds = [...savedQuestionIds, questionId];
    setSavedQuestionIds(nextIds);
    saveReviewQuestionIds(nextIds);
  }

  return (
    <div className="space-y-6">
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="app-panel-strong rounded-[2rem] p-6">
          <p className="app-kicker">
            Settings
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.05em] text-[var(--navy)]">
            집중학습 설정
          </h2>
          <p className="mt-2 text-sm leading-7 app-subtle">
            매일 학습 첫 화면과 랜덤 문제 노출에 반영됩니다.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <button
              type="button"
              onClick={() => updateFocusSettings({ mode: "none" })}
              className={`rounded-[1.6rem] border px-4 py-4 text-left transition ${
                focusSettings.mode === "none"
                  ? "border-[rgba(36,91,219,0.18)] bg-[linear-gradient(135deg,rgba(231,238,255,0.98),rgba(221,251,243,0.92))] text-[var(--blue)] shadow-[0_18px_30px_-24px_rgba(36,91,219,0.42)]"
                  : "border-[rgba(16,32,51,0.08)] bg-white/65 text-[rgba(16,32,51,0.74)] hover:border-[rgba(36,91,219,0.16)] hover:bg-white/88"
              }`}
            >
              <strong className="block text-sm font-semibold">기본 랜덤</strong>
              <span className="mt-2 block text-sm leading-6">전체 범위에서 고르게 출제</span>
            </button>

            <div className="rounded-[1.6rem] border border-[rgba(16,32,51,0.08)] bg-white/68 px-4 py-4">
              <strong className="block text-sm text-[var(--navy)]">Volume 집중</strong>
              <select
                value={focusSettings.mode === "volume" ? focusSettings.volume : ""}
                onChange={(event) =>
                  updateFocusSettings({
                    mode: "volume",
                    volume: Number(event.target.value),
                  })
                }
                className="app-input mt-3 w-full rounded-xl px-3 py-2 text-sm"
              >
                <option value="" disabled>
                  Volume 선택
                </option>
                {dataset.volumes.map((volume) => (
                  <option key={volume} value={volume}>
                    Volume {volume}
                  </option>
                ))}
              </select>
            </div>

            <div className="rounded-[1.6rem] border border-[rgba(16,32,51,0.08)] bg-white/68 px-4 py-4">
              <strong className="block text-sm text-[var(--navy)]">Chapter 집중</strong>
              <select
                value={focusSettings.mode === "chapter" ? focusSettings.chapterKey : ""}
                onChange={(event) =>
                  updateFocusSettings({
                    mode: "chapter",
                    chapterKey: event.target.value,
                  })
                }
                className="app-input mt-3 w-full rounded-xl px-3 py-2 text-sm"
              >
                <option value="" disabled>
                  Chapter 선택
                </option>
                {dataset.chapters.map((chapter) => (
                  <option key={chapter.key} value={chapter.key}>
                    {chapter.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <aside className="app-panel rounded-[2rem] p-6">
          <p className="app-kicker">Status</p>
          <h3 className="mt-2 text-lg font-extrabold tracking-[-0.03em] text-[var(--navy)]">
            현재 상태
          </h3>
          <p className="mt-4 text-sm app-subtle">오답노트 저장 문제</p>
          <p className="mt-2 app-metric">
            {savedQuestionIds.length}
          </p>
        </aside>
      </section>

      <section
        id="review-notes"
        className="app-panel-strong rounded-[2rem] p-6"
      >
        <p className="app-kicker">Review Notes</p>
        <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.04em] text-[var(--navy)]">
          오답노트 다시 풀기
        </h3>
        <p className="mt-2 text-sm leading-7 app-subtle">
          틀렸거나 다시 보고 싶은 문제를 여기에서 다시 풀 수 있습니다.
        </p>
      </section>

      <div className="space-y-4">
        {savedQuestions.length > 0 ? (
          savedQuestions.map((question) => {
            const linkedTopic =
              dataset.topics.find((topic) => question.topic_ids.includes(topic.id)) ??
              dataset.topics[0];

            return linkedTopic ? (
              <QuestionCard
                key={question.id}
                question={question}
                topic={linkedTopic}
                isSaved
                onSaveReview={addReviewQuestion}
                onRemoveReview={removeReviewQuestion}
              />
            ) : null;
          })
        ) : (
          <div className="rounded-[2rem] border border-dashed border-[rgba(16,32,51,0.16)] bg-white/60 px-6 py-10 text-sm app-subtle">
            아직 오답노트에 저장된 문제가 없습니다. 매일 학습이나 단원별 학습에서
            문제를 보관하면 여기에 쌓입니다.
          </div>
        )}
      </div>
    </div>
  );
}
