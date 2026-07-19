"use client";

import Link from "next/link";
import { startTransition, useEffect, useState } from "react";

import { QuestionCard } from "@/components/question-card";
import { TopicArticle } from "@/components/topic-article";
import { buildDailyPack } from "@/lib/study";
import { loadFocusSettings, loadReviewQuestionIds, saveReviewQuestionIds } from "@/lib/storage";
import type { DailyPack, LearningDataset } from "@/lib/types";

export function DailyStudyClient({ dataset }: { dataset: LearningDataset }) {
  const [savedQuestionIds, setSavedQuestionIds] = useState<string[]>([]);
  const [focusDescription, setFocusDescription] = useState("기본 랜덤");
  const [pack, setPack] = useState<DailyPack | null>(null);

  useEffect(() => {
    const focusSettings = loadFocusSettings();
    const reviewIds = loadReviewQuestionIds();
    const nextFocusDescription =
      focusSettings.mode === "volume"
        ? `Volume ${focusSettings.volume} 집중`
        : focusSettings.mode === "chapter"
          ? dataset.chapters.find((item) => item.key === focusSettings.chapterKey)
              ?.label ?? "기본 랜덤"
          : "기본 랜덤";

    startTransition(() => {
      setSavedQuestionIds(reviewIds);
      setFocusDescription(
        focusSettings.mode === "chapter" && nextFocusDescription !== "기본 랜덤"
          ? `${nextFocusDescription} 집중`
          : nextFocusDescription,
      );
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
      <section className="rounded-[2rem] border border-slate-200 bg-white p-8">
        <p className="text-sm text-slate-600">
          학습 팩을 준비하는 중입니다. 콘텐츠 또는 문제 데이터가 더 필요할 수 있습니다.
        </p>
      </section>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_24rem]">
      <div className="space-y-6">
        <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.45)]">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700">
                Daily Study
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                오늘의 학습 콘텐츠 + 문제 {pack.questions.length}개
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                접속할 때마다 랜덤으로 바뀌고, 설정한 집중학습 범위가 있으면 더 자주 반영됩니다.
              </p>
            </div>

            <button
              type="button"
              onClick={reshuffle}
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-800"
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
        <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-6">
          <h3 className="text-lg font-semibold text-slate-950">현재 학습 모드</h3>
          <p className="mt-3 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
            {focusDescription}
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            설정에서 Volume 또는 Chapter를 고르면 매일 학습의 랜덤 출제 비중이
            높아집니다.
          </p>
          <Link
            href="/settings"
            className="mt-4 inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-emerald-300 hover:text-emerald-800"
          >
            설정 열기
          </Link>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-6">
          <h3 className="text-lg font-semibold text-slate-950">오답노트</h3>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            {savedQuestionIds.length}
          </p>
          <p className="mt-2 text-sm text-slate-600">
            나중에 다시 풀어볼 문제 수
          </p>
          <Link
            href="/settings"
            className="mt-4 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
          >
            오답노트 열기
          </Link>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-6">
          <h3 className="text-lg font-semibold text-slate-950">이번 팩 핵심</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            {pack.topic.keyPoints.map((point) => (
              <li key={point} className="rounded-2xl bg-slate-50 px-4 py-3">
                {point}
              </li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  );
}
