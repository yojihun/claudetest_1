"use client";

import { startTransition, useEffect, useState } from "react";

import { QuestionCard } from "@/components/question-card";
import { TopicArticle } from "@/components/topic-article";
import { buildDailyPack } from "@/lib/study";
import { loadFocusSettings, loadReviewQuestionIds, saveReviewQuestionIds } from "@/lib/storage";
import type { DailyPack, LearningDataset } from "@/lib/types";

export function DailyStudyClient({ dataset }: { dataset: LearningDataset }) {
  const [savedQuestionIds, setSavedQuestionIds] = useState<string[]>([]);
  const [pack, setPack] = useState<DailyPack | null>(null);

  useEffect(() => {
    const focusSettings = loadFocusSettings();
    const reviewIds = loadReviewQuestionIds();

    startTransition(() => {
      setSavedQuestionIds(reviewIds);
      setPack(buildDailyPack(dataset.topics, dataset.questions, focusSettings));
    });
  }, [dataset]);

  function persistReviewIds(nextIds: string[]) {
    setSavedQuestionIds(nextIds);
    saveReviewQuestionIds(nextIds);
  }

  function handleSaveReview(questionId: string) {
    if (savedQuestionIds.includes(questionId)) {
      return;
    }
    persistReviewIds([...savedQuestionIds, questionId]);
  }

  function handleRemoveReview(questionId: string) {
    persistReviewIds(savedQuestionIds.filter((savedId) => savedId !== questionId));
  }

  function reshuffle() {
    const focusSettings = loadFocusSettings();
    startTransition(() => {
      setPack(buildDailyPack(dataset.topics, dataset.questions, focusSettings));
    });
  }

  if (!pack) {
    return (
      <section className="app-panel rounded-[2rem] p-8">
        <p className="text-sm app-subtle">
          학습 팩을 준비하는 중입니다. 콘텐츠 또는 문제 데이터가 더 필요할 수 있습니다.
        </p>
      </section>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_24rem]">
      <div className="space-y-6">
        <section className="app-panel-strong rounded-[2rem] p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="app-kicker">Daily Pack</p>
              <h2 className="mt-2 app-section-title">매일 학습</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 app-subtle">
                오늘의 핵심 이론과 연계 문제를 한 세트로 묶어 빠르게 회독할 수 있게 구성했습니다.
              </p>
            </div>

            <button
              type="button"
              onClick={reshuffle}
              className="app-button-primary rounded-full px-5 py-3 text-sm font-semibold transition"
            >
              새 조합 받기
            </button>
          </div>
        </section>

        <TopicArticle topic={pack.topic} />

        <div className="space-y-4">
          {pack.questions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              topic={pack.topic}
              isSaved={savedQuestionIds.includes(question.id)}
              onSaveReview={handleSaveReview}
              onRemoveReview={handleRemoveReview}
            />
          ))}
        </div>
      </div>

      <aside className="space-y-4">
        <section className="app-panel rounded-[2rem] p-6">
          <p className="app-kicker">Review Queue</p>
          <h3 className="mt-2 text-lg font-semibold text-[var(--navy)]">저장한 문제</h3>
          <p className="mt-2 text-sm app-subtle">오답노트로 바로 이어지는 복습 대기열</p>
          <p className="mt-4 app-metric">
            {savedQuestionIds.length}
          </p>
        </section>

        <section className="app-panel-tint rounded-[2rem] p-6">
          <p className="app-kicker">Pack Focus</p>
          <h3 className="mt-2 text-lg font-semibold text-[var(--navy)]">이번 팩 핵심</h3>
          <ul className="mt-4 space-y-3 text-sm text-[rgba(16,32,51,0.82)]">
            {pack.topic.keyPoints.map((point) => (
              <li
                key={point}
                className="rounded-2xl border border-[color:rgba(2,140,116,0.14)] bg-white/76 px-4 py-3"
              >
                {point}
              </li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  );
}
