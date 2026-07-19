"use client";

import { startTransition, useEffect, useState } from "react";

import { QuestionCard } from "@/components/question-card";
import { TopicArticle } from "@/components/topic-article";
import { buildTopicQuestionSet } from "@/lib/study";
import { loadReviewQuestionIds, saveReviewQuestionIds } from "@/lib/storage";
import type { LearningDataset } from "@/lib/types";

export function ChapterStudyClient({ dataset }: { dataset: LearningDataset }) {
  const [selectedVolume, setSelectedVolume] = useState<number>(dataset.volumes[0] ?? 1);
  const [selectedChapterKey, setSelectedChapterKey] = useState<string>(
    dataset.chapters[0]?.key ?? "",
  );
  const [activeTopicId, setActiveTopicId] = useState<string>(dataset.topics[0]?.id ?? "");
  const [savedQuestionIds, setSavedQuestionIds] = useState<string[]>([]);

  useEffect(() => {
    const reviewIds = loadReviewQuestionIds();
    startTransition(() => {
      setSavedQuestionIds(reviewIds);
    });
  }, []);

  const chapterOptions = dataset.chapters.filter(
    (chapter) => chapter.volume === selectedVolume,
  );
  const topicsInChapter = dataset.topics.filter(
    (topic) => topic.chapterKey === selectedChapterKey,
  );
  const activeTopic =
    topicsInChapter.find((topic) => topic.id === activeTopicId) ?? topicsInChapter[0];
  const activeQuestions = activeTopic
    ? buildTopicQuestionSet(activeTopic, dataset.questions)
    : [];

  function updateReviewIds(nextIds: string[]) {
    setSavedQuestionIds(nextIds);
    saveReviewQuestionIds(nextIds);
  }

  function handleVolumeChange(nextVolume: number) {
    startTransition(() => {
      setSelectedVolume(nextVolume);
      const nextChapter = dataset.chapters.find(
        (chapter) => chapter.volume === nextVolume,
      );
      setSelectedChapterKey(nextChapter?.key ?? "");
      const nextTopic = dataset.topics.find(
        (topic) => topic.chapterKey === nextChapter?.key,
      );
      setActiveTopicId(nextTopic?.id ?? "");
    });
  }

  function handleChapterChange(nextChapterKey: string) {
    startTransition(() => {
      setSelectedChapterKey(nextChapterKey);
      const nextTopic = dataset.topics.find(
        (topic) => topic.chapterKey === nextChapterKey,
      );
      setActiveTopicId(nextTopic?.id ?? "");
    });
  }

  function handleSaveReview(questionId: string) {
    if (savedQuestionIds.includes(questionId)) {
      return;
    }
    updateReviewIds([...savedQuestionIds, questionId]);
  }

  function handleRemoveReview(questionId: string) {
    updateReviewIds(savedQuestionIds.filter((savedId) => savedId !== questionId));
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[20rem_minmax(0,1fr)]">
      <aside className="space-y-4">
        <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-6">
          <h2 className="text-xl font-semibold tracking-tight text-slate-950">
            단원 선택
          </h2>

          <div className="mt-5 space-y-4">
            <label className="block text-sm font-medium text-slate-700">
              Volume
              <select
                value={selectedVolume}
                onChange={(event) => handleVolumeChange(Number(event.target.value))}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                {dataset.volumes.map((volume) => (
                  <option key={volume} value={volume}>
                    Volume {volume}
                  </option>
                ))}
              </select>
            </label>

            <label className="block text-sm font-medium text-slate-700">
              Chapter
              <select
                value={selectedChapterKey}
                onChange={(event) => handleChapterChange(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                {chapterOptions.map((chapter) => (
                  <option key={chapter.key} value={chapter.key}>
                    {chapter.label} ({chapter.topicCount} topics)
                  </option>
                ))}
              </select>
            </label>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-6">
          <h3 className="text-lg font-semibold text-slate-950">Topic 목록</h3>
          <div className="mt-4 space-y-2">
            {topicsInChapter.map((topic) => (
              <button
                key={topic.id}
                type="button"
                onClick={() => setActiveTopicId(topic.id)}
                className={`w-full rounded-2xl px-4 py-3 text-left text-sm transition ${
                  topic.id === activeTopic?.id
                    ? "bg-emerald-50 text-emerald-900"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {topic.title}
              </button>
            ))}
          </div>
        </section>
      </aside>

      <div className="space-y-6">
        {activeTopic ? <TopicArticle topic={activeTopic} /> : null}

        <section className="space-y-4">
          <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-6">
            <h3 className="text-xl font-semibold tracking-tight text-slate-950">
              연습문제
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              선택한 Topic과 연결된 문제를 랜덤 순서로 보여줍니다.
            </p>
          </div>

          {activeTopic && activeQuestions.length > 0 ? (
            activeQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                topic={activeTopic}
                isSaved={savedQuestionIds.includes(question.id)}
                onSaveReview={handleSaveReview}
                onRemoveReview={handleRemoveReview}
              />
            ))
          ) : (
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 text-sm text-slate-600">
              이 Topic과 직접 연결된 문제가 아직 없습니다.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
