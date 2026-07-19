"use client";

import { useEffect, useMemo, useState } from "react";

type PastExamQuestion = {
  id: string;
  number: number;
  stem: string;
  options: Array<{
    id: string;
    text: string;
  }>;
  answer: string;
  answerText: string;
  explanation: string;
};

const STORAGE_KEY = "him-past-exam-2025-session2-index";

function formatStem(stem: string) {
  return stem
    .replaceAll("•", "\n• ")
    .replaceAll("–", "\n- ")
    .trim();
}

function getSectionLabel(number: number) {
  if (number <= 16) {
    return "보건의료정보관리학";
  }
  if (number <= 68) {
    return "의학용어·해부·암등록";
  }
  return "의료관계법규";
}

export function PastExamClient({ questions }: { questions: PastExamQuestion[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const savedIndex = Number.parseInt(localStorage.getItem(STORAGE_KEY) ?? "0", 10);
    if (Number.isFinite(savedIndex) && savedIndex >= 0 && savedIndex < questions.length) {
      setCurrentIndex(savedIndex);
    }
  }, [questions.length]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(currentIndex));
  }, [currentIndex]);

  const currentQuestion = questions[currentIndex];
  const selectedAnswer = selectedAnswers[currentQuestion.id] ?? "";
  const isRevealed = Boolean(revealedIds[currentQuestion.id]);
  const isCorrect = isRevealed && selectedAnswer === currentQuestion.answer;
  const sectionLabel = useMemo(
    () => getSectionLabel(currentQuestion.number),
    [currentQuestion.number],
  );

  function handleSelectAnswer(answer: string) {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answer,
    }));
  }

  function handleRevealAnswer() {
    setRevealedIds((prev) => ({
      ...prev,
      [currentQuestion.id]: true,
    }));
  }

  function moveQuestion(offset: number) {
    setCurrentIndex((prev) => Math.min(Math.max(prev + offset, 0), questions.length - 1));
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <div className="space-y-6">
        <section className="app-panel-strong rounded-[2.2rem] p-7">
          <p className="app-kicker">Past Exam</p>
          <h1 className="mt-2 app-section-title">2025 기출문제</h1>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <span className="app-chip rounded-full px-3 py-1.5">2교시</span>
            <span className="app-chip rounded-full px-3 py-1.5">총 {questions.length}문항</span>
            <span className="app-chip rounded-full px-3 py-1.5">{sectionLabel}</span>
          </div>
          <p className="mt-4 text-sm leading-7 app-subtle">
            한 문제씩 풀고, 바로 아래에서 정답과 선택지 기준 해설을 확인할 수 있습니다.
          </p>
        </section>

        <section className="app-panel rounded-[2rem] p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="app-kicker">Question</p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.05em] text-[var(--navy)]">
                {currentQuestion.number}번
              </h2>
            </div>

            <label className="min-w-[13rem]">
              <span className="mb-2 block text-sm font-semibold text-[var(--navy)]">
                문제 이동
              </span>
              <select
                value={currentQuestion.id}
                onChange={(event) => {
                  const nextIndex = questions.findIndex(
                    (question) => question.id === event.target.value,
                  );
                  if (nextIndex >= 0) {
                    setCurrentIndex(nextIndex);
                  }
                }}
                className="app-input w-full rounded-2xl px-4 py-3 outline-none"
              >
                {questions.map((question) => (
                  <option key={question.id} value={question.id}>
                    {question.number}번
                  </option>
                ))}
              </select>
            </label>
          </div>
        </section>

        <section className="app-panel-strong rounded-[2rem] p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(16,32,51,0.52)]">
              <span className="app-chip rounded-full px-3 py-1">{sectionLabel}</span>
              <span className="app-chip rounded-full px-3 py-1">2025 2교시</span>
            </div>
            <p className="text-sm app-subtle">
              {currentIndex + 1} / {questions.length}
            </p>
          </div>

          <p className="mt-5 whitespace-pre-line text-lg font-semibold leading-8 text-[var(--navy)]">
            {formatStem(currentQuestion.stem)}
          </p>

          <div className="mt-6 space-y-3">
            {currentQuestion.options.map((option) => (
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
                  name={currentQuestion.id}
                  value={option.id}
                  checked={selectedAnswer === option.id}
                  onChange={(event) => handleSelectAnswer(event.target.value)}
                  className="mt-1 accent-[var(--blue)]"
                />
                <span className="text-sm leading-7 text-[rgba(16,32,51,0.8)]">
                  <strong className="mr-2 text-[var(--navy)]">{option.id}.</strong>
                  {option.text}
                </span>
              </label>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => moveQuestion(-1)}
              disabled={currentIndex === 0}
              className="app-button-ghost rounded-full px-5 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-45"
            >
              이전 문제
            </button>
            <button
              type="button"
              onClick={handleRevealAnswer}
              disabled={!selectedAnswer}
              className="app-button-primary rounded-full px-5 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-45"
            >
              정답 확인
            </button>
            <button
              type="button"
              onClick={() => moveQuestion(1)}
              disabled={currentIndex === questions.length - 1}
              className="app-button-secondary rounded-full px-5 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-45"
            >
              다음 문제
            </button>
          </div>

          {isRevealed ? (
            <div className="mt-6 space-y-5">
              <div
                className={`rounded-[1.5rem] px-4 py-4 text-sm ${
                  isCorrect
                    ? "border border-[rgba(11,122,117,0.16)] bg-[var(--teal-soft)] text-[var(--teal)]"
                    : "border border-[rgba(209,74,87,0.16)] bg-[var(--rose-soft)] text-[var(--rose)]"
                }`}
              >
                <p>
                  <strong className="mr-2">
                    {isCorrect ? "정답입니다." : "정답을 확인해 보세요."}
                  </strong>
                  정답은 {currentQuestion.answer}번입니다.
                </p>
              </div>

              <div className="rounded-2xl border border-[rgba(16,32,51,0.08)] bg-white/72 px-4 py-4 text-sm leading-7 text-[rgba(16,32,51,0.76)]">
                <h3 className="font-semibold text-[var(--navy)]">정답 선택지</h3>
                <p className="mt-2 text-[var(--navy)]">{currentQuestion.answerText}</p>
              </div>

              <div className="rounded-2xl border border-[rgba(16,32,51,0.08)] bg-white/72 px-4 py-4 text-sm leading-7 text-[rgba(16,32,51,0.76)]">
                <h3 className="font-semibold text-[var(--navy)]">설명</h3>
                <p className="mt-2">{currentQuestion.explanation}</p>
              </div>
            </div>
          ) : null}
        </section>
      </div>

      <aside className="space-y-4">
        <section className="app-panel rounded-[2rem] p-6">
          <p className="app-kicker">Progress</p>
          <h3 className="mt-2 text-lg font-semibold text-[var(--navy)]">현재 위치</h3>
          <p className="mt-4 app-metric">{currentQuestion.number}</p>
          <p className="mt-3 text-sm app-subtle">
            마지막으로 보던 문제를 다음 접속에서도 이어서 확인할 수 있습니다.
          </p>
        </section>

        <section className="app-panel-tint rounded-[2rem] p-6">
          <p className="app-kicker">Source</p>
          <h3 className="mt-2 text-lg font-semibold text-[var(--navy)]">문항 기준</h3>
          <ul className="mt-4 space-y-3 text-sm text-[rgba(16,32,51,0.82)]">
            <li className="rounded-2xl border border-[color:rgba(2,140,116,0.14)] bg-white/76 px-4 py-3">
              2025년도 제42회 보건의료정보관리사 국가시험 2교시
            </li>
            <li className="rounded-2xl border border-[color:rgba(2,140,116,0.14)] bg-white/76 px-4 py-3">
              최종답안 기준 정답 반영
            </li>
            <li className="rounded-2xl border border-[color:rgba(2,140,116,0.14)] bg-white/76 px-4 py-3">
              1교시는 추후 같은 형식으로 추가 확장 가능
            </li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
