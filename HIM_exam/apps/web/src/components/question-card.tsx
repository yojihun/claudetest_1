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
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.55)]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          <span>{question.type.replaceAll("_", " ")}</span>
          <span>{question.id}</span>
        </div>
        <button
          type="button"
          onClick={() =>
            isSaved
              ? onRemoveReview?.(question.id)
              : onSaveReview(question.id)
          }
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            isSaved
              ? "bg-amber-100 text-amber-900 hover:bg-amber-200"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          {isSaved ? "오답노트 해제" : "오답노트 보관"}
        </button>
      </div>

      <p className="mt-4 text-lg font-medium leading-8 text-slate-950">
        {question.stem}
      </p>

      {hasChoices ? (
        <div className="mt-5 space-y-3">
          {question.options.map((option) => (
            <label
              key={option.id}
              className={`flex cursor-pointer gap-3 rounded-2xl border px-4 py-4 transition ${
                selectedAnswer === option.id
                  ? "border-emerald-400 bg-emerald-50"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <input
                type="radio"
                name={question.id}
                value={option.id}
                checked={selectedAnswer === option.id}
                onChange={(event) => setSelectedAnswer(event.target.value)}
                className="mt-1"
              />
              <span className="text-sm leading-7 text-slate-700">
                <strong className="mr-2 text-slate-950">{option.id}.</strong>
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
            className="min-h-32 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-800 outline-none ring-0 placeholder:text-slate-400 focus:border-emerald-400"
          />
        </div>
      )}

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          disabled={hasChoices ? !selectedAnswer : !freeTextAnswer.trim()}
          className="rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {hasChoices ? "정답 확인" : "모범 답안 보기"}
        </button>
      </div>

      {submitted ? (
        <div className="mt-6 space-y-5">
          <div
            className={`rounded-2xl px-4 py-4 text-sm ${
              isObjective
                ? isCorrect
                  ? "bg-emerald-50 text-emerald-900"
                  : "bg-rose-50 text-rose-900"
                : "bg-sky-50 text-sky-900"
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

          <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
            <h3 className="font-semibold text-slate-950">해설</h3>
            <p className="mt-2">{question.explanation}</p>
          </div>

          <div className="rounded-2xl bg-emerald-50/70 px-4 py-4">
            <h3 className="text-sm font-semibold text-emerald-950">
              문제 해결에 필요한 학습 내용 다시 보기
            </h3>
            <p className="mt-2 text-sm leading-7 text-emerald-950/85">
              {topic.summary}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-emerald-950/85">
              {topic.keyPoints.map((point) => (
                <li key={point} className="rounded-2xl bg-white/70 px-3 py-3">
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
