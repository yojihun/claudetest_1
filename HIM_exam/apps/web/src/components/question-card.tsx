"use client";

import { useState } from "react";

import type { Question, Topic } from "@/lib/types";

function normalize(value: string) {
  return value.trim().toLowerCase();
}

export function QuestionCard({
  question,
  topic,
  isSaved,
  onSaveReview,
  onRemoveReview,
}: {
  question: Question;
  topic: Topic;
  isSaved: boolean;
  onSaveReview: (questionId: string) => void;
  onRemoveReview?: (questionId: string) => void;
}) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [freeTextAnswer, setFreeTextAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const hasChoices = question.options.length > 0;
  const correctAnswer = question.answer.join(", ");
  const isObjective = hasChoices;
  const isCorrect =
    isObjective && submitted
      ? normalize(selectedAnswer) === normalize(question.answer[0] ?? "")
      : null;

  return (
    <section className="app-panel-strong rounded-[2rem] p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(16,32,51,0.52)]">
          <span className="app-chip rounded-full px-3 py-1">{question.type.replaceAll("_", " ")}</span>
          <span className="app-chip rounded-full px-3 py-1">{question.id}</span>
        </div>
        <button
          type="button"
          onClick={() =>
            isSaved
              ? onRemoveReview?.(question.id)
              : onSaveReview(question.id)
          }
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            isSaved
              ? "border border-[rgba(255,159,45,0.16)] bg-[var(--gold-soft)] text-[var(--navy)] hover:bg-[#ffe7b3]"
              : "app-button-ghost"
          }`}
        >
          {isSaved ? "오답노트 해제" : "오답노트 보관"}
        </button>
      </div>

      <p className="mt-5 text-lg font-semibold leading-8 text-[var(--navy)]">
        {question.stem}
      </p>

      {hasChoices ? (
        <div className="mt-5 space-y-3">
          {question.options.map((option) => (
            <label
              key={option.id}
              className={`flex cursor-pointer gap-3 rounded-[1.35rem] border px-4 py-4 transition ${
                selectedAnswer === option.id
                  ? "border-[rgba(36,91,219,0.34)] bg-[linear-gradient(135deg,rgba(231,238,255,0.98),rgba(221,251,243,0.9))] shadow-[0_20px_36px_-28px_rgba(36,91,219,0.5)]"
                  : "border-[rgba(16,32,51,0.1)] bg-white/65 hover:border-[rgba(36,91,219,0.18)] hover:bg-white/88"
              }`}
            >
              <input
                type="radio"
                name={question.id}
                value={option.id}
                checked={selectedAnswer === option.id}
                onChange={(event) => setSelectedAnswer(event.target.value)}
                className="mt-1 accent-[var(--blue)]"
              />
              <span className="text-sm leading-7 text-[rgba(16,32,51,0.78)]">
                <strong className="mr-2 text-[var(--navy)]">{option.id}.</strong>
                {option.text}
              </span>
            </label>
          ))}
        </div>
      ) : (
        <div className="mt-5">
          <textarea
            value={freeTextAnswer}
            onChange={(event) => setFreeTextAnswer(event.target.value)}
            placeholder="풀이 근거를 간단히 적어보세요."
            className="app-input min-h-32 w-full rounded-2xl px-4 py-4 text-sm text-[rgba(16,32,51,0.88)] outline-none ring-0 placeholder:text-[rgba(16,32,51,0.34)]"
          />
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          disabled={hasChoices ? !selectedAnswer : !freeTextAnswer.trim()}
          className="app-button-primary rounded-full px-5 py-3 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-45"
        >
          {hasChoices ? "정답 확인" : "모범 답안 보기"}
        </button>
      </div>

      {submitted ? (
        <div className="mt-6 space-y-5">
          <div
            className={`rounded-[1.5rem] px-4 py-4 text-sm ${
              isObjective
                ? isCorrect
                  ? "border border-[rgba(11,122,117,0.16)] bg-[var(--teal-soft)] text-[var(--teal)]"
                  : "border border-[rgba(209,74,87,0.16)] bg-[var(--rose-soft)] text-[var(--rose)]"
                : "border border-[rgba(36,91,219,0.14)] bg-[var(--blue-soft)] text-[var(--blue)]"
            }`}
          >
            {isObjective ? (
              <p>
                <strong className="mr-2">
                  {isCorrect ? "정답입니다." : "다시 보면 좋아요."}
                </strong>
                정답은 {correctAnswer}입니다.
              </p>
            ) : (
              <p>
                <strong className="mr-2">모범 답안</strong>
                {correctAnswer}
              </p>
            )}
          </div>

          <div className="rounded-2xl border border-[rgba(16,32,51,0.08)] bg-white/72 px-4 py-4 text-sm leading-7 text-[rgba(16,32,51,0.76)]">
            <h3 className="font-semibold text-[var(--navy)]">해설</h3>
            <p className="mt-2">{question.explanation}</p>
          </div>

          <div className="rounded-[1.75rem] border border-[rgba(2,140,116,0.16)] bg-[linear-gradient(145deg,rgba(221,251,243,0.94),rgba(231,238,255,0.84))] px-4 py-4">
            <h3 className="text-sm font-semibold text-[var(--navy)]">
              문제 해결에 필요한 학습 내용 다시 보기
            </h3>
            <p className="mt-2 text-sm leading-7 text-[rgba(16,32,51,0.8)]">
              {topic.summary}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[rgba(16,32,51,0.82)]">
              {topic.keyPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl border border-[rgba(255,255,255,0.72)] bg-white/74 px-3 py-3"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </section>
  );
}
