"use client";

import { startTransition, useEffect, useMemo, useState } from "react";

import { getRomanVolumeLabel, getVolumeTitle } from "@/lib/course-meta";
import { getExamDateLabel } from "@/lib/exam-info";
import { QuestionCard } from "@/components/question-card";
import {
  loadFocusSettings,
  loadFontScale,
  loadReviewQuestionIds,
  saveFocusSettings,
  saveFontScale,
  saveReviewQuestionIds,
} from "@/lib/storage";
import type { FocusSettings, LearningDataset } from "@/lib/types";

export function SettingsClient({ dataset }: { dataset: LearningDataset }) {
  const [focusSettings, setFocusSettings] = useState<FocusSettings>({ mode: "none" });
  const [savedQuestionIds, setSavedQuestionIds] = useState<string[]>([]);
  const [fontScale, setFontScale] = useState(3);

  useEffect(() => {
    const nextFocusSettings = loadFocusSettings();
    const nextSavedQuestionIds = loadReviewQuestionIds();
    const nextFontScale = loadFontScale();

    startTransition(() => {
      setFocusSettings(nextFocusSettings);
      setSavedQuestionIds(nextSavedQuestionIds);
      setFontScale(nextFontScale);
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

  function updateFontScale(nextScale: number) {
    setFontScale(nextScale);
    saveFontScale(nextScale);
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
      <section className="app-panel-strong rounded-[2rem] p-6">
        <p className="app-kicker">Settings</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.05em] text-[var(--navy)]">
          설정
        </h2>
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-6">
          <div className="app-panel rounded-[2rem] p-6">
            <h3 className="text-2xl font-extrabold tracking-[-0.04em] text-[var(--navy)]">
              집중학습 설정
            </h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
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
                      {getRomanVolumeLabel(volume)}. {getVolumeTitle(volume)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="app-panel rounded-[2rem] p-6">
            <h3 className="text-2xl font-extrabold tracking-[-0.04em] text-[var(--navy)]">
              시험 정보
            </h3>
            <p className="mt-3 text-sm leading-7 app-subtle">
              2026 보건의료정보관리사 국가시험일: {getExamDateLabel()}
            </p>

            <div className="mt-6 space-y-4 text-sm leading-7 text-[rgba(16,32,51,0.78)]">
              <div className="rounded-[1.5rem] border border-[rgba(16,32,51,0.08)] bg-white/72 p-4">
                <p className="font-semibold text-[var(--navy)]">
                  3교시 지참도서
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>
                    `한국표준질병·사인분류(KCD) 제1권`
                    : `KCD-8 + 제8차·제9차 신·구대조표` 또는 `KCD-9`
                  </li>
                  <li>
                    `한국표준질병·사인분류(KCD) 제3권`
                    : `KCD-8 + 제8차·제9차 신·구대조표` 또는 `KCD-9`
                  </li>
                  <li>`국제의료행위분류`: `ICD-9-CM, Volume 3` 제1차 개정판</li>
                  <li>
                    `종양학 국제질병분류(ICD-O)`
                    : 제3판 1차 개정판 또는 2차 개정판
                  </li>
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-[rgba(16,32,51,0.08)] bg-white/72 p-4">
                <p className="font-semibold text-[var(--navy)]">핵심 유의사항</p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>
                    지참 도서는 대한보건의료정보관리사협회 발행본만 가능하며,
                    타 출판사 서적·제본본·복사본은 불가합니다.
                  </li>
                  <li>
                    `제8차·제9차 신·구대조표`는 협회 발행 책자만 인정됩니다.
                  </li>
                  <li>
                    시험일 기준 최신 정오사항 반영 도서를 기준으로 출제되며,
                    별도 정오표 지참은 불가하지만 개인 도서에 정오사항 메모는 가능합니다.
                  </li>
                  <li>
                    구형 도서(old version) 지참에 따른 불이익은 응시자 책임입니다.
                  </li>
                </ul>
                <p className="mt-3 text-sm text-[rgba(16,32,51,0.58)]">
                  문의: 대한보건의료정보관리사협회 02-424-8514
                </p>
              </div>
            </div>
          </div>

          <div className="app-panel rounded-[2rem] p-6">
            <h3 className="text-2xl font-extrabold tracking-[-0.04em] text-[var(--navy)]">
              글자 크기
            </h3>
            <p className="mt-2 text-sm app-subtle">현재 크기: {fontScale}단계</p>

            <div className="mt-6">
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={fontScale}
                onChange={(event) => updateFontScale(Number(event.target.value))}
                className="w-full accent-[var(--blue)]"
              />
              <div className="mt-2 flex justify-between text-xs text-[rgba(16,32,51,0.52)]">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
              </div>
            </div>
          </div>
        </div>

        <aside className="app-panel rounded-[2rem] p-6">
          <p className="app-kicker">Status</p>
          <h3 className="mt-2 text-lg font-extrabold tracking-[-0.03em] text-[var(--navy)]">
            현재 상태
          </h3>
          <p className="mt-4 text-sm app-subtle">오답노트 저장 문제</p>
          <p className="mt-2 app-metric">{savedQuestionIds.length}</p>
          <p className="mt-4 text-sm app-subtle">글자 크기 {fontScale}단계</p>
        </aside>
      </section>

      <section id="review-notes" className="space-y-4">
        <div className="app-panel-strong rounded-[2rem] p-6">
          <p className="app-kicker">Review Notes</p>
          <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.04em] text-[var(--navy)]">
            오답노트
          </h3>
          <p className="mt-2 text-sm leading-7 app-subtle">
            틀렸거나 다시 보고 싶은 문제를 여기에서 다시 풀 수 있습니다.
          </p>
        </div>

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
      </section>
    </div>
  );
}
