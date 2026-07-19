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

type PastExamSession = {
  id: string;
  label: string;
  sourceLabel: string;
  description: string;
  questions: PastExamQuestion[];
};

const SESSION_STORAGE_KEY = "him-past-exam-session";

function formatExamText(text: string) {
  return text
    .replace(/\s*•\s*/g, "\n• ")
    .replace(/\s*–\s*/g, "\n- ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function getExamTextLines(text: string) {
  return formatExamText(text)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
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

export function PastExamClient({ sessions }: { sessions: PastExamSession[] }) {
  const [currentSessionId, setCurrentSessionId] = useState(sessions[0]?.id ?? "");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});

  const currentSession =
    sessions.find((session) => session.id === currentSessionId) ?? sessions[0];
  const questions = currentSession.questions;
  const storageKey = `him-past-exam-index-${currentSession.id}`;

  useEffect(() => {
    const savedSessionId = localStorage.getItem(SESSION_STORAGE_KEY);
    if (savedSessionId && sessions.some((session) => session.id === savedSessionId)) {
      setCurrentSessionId(savedSessionId);
    }
  }, [sessions]);

  useEffect(() => {
    if (!currentSession) {
      return;
    }

    const savedIndex = Number.parseInt(localStorage.getItem(storageKey) ?? "0", 10);
    if (Number.isFinite(savedIndex) && savedIndex >= 0 && savedIndex < questions.length) {
      setCurrentIndex(savedIndex);
    } else {
      setCurrentIndex(0);
    }
  }, [currentSession, questions.length, storageKey]);

  useEffect(() => {
    if (!currentSession) {
      return;
    }
    localStorage.setItem(SESSION_STORAGE_KEY, currentSession.id);
    localStorage.setItem(storageKey, String(currentIndex));
  }, [currentIndex, currentSession, storageKey]);

  if (!currentSession || questions.length === 0) {
    return null;
  }

  const currentQuestion = questions[currentIndex];
  const selectedAnswer = selectedAnswers[currentQuestion.id] ?? "";
  const isRevealed = Boolean(revealedIds[currentQuestion.id]);
  const isCorrect = isRevealed && selectedAnswer === currentQuestion.answer;
  const sectionLabel = useMemo(
    () => getSectionLabel(currentQuestion.number),
    [currentQuestion.number],
  );
  const stemLines = getExamTextLines(currentQuestion.stem);

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
            <span className="app-chip rounded-full px-3 py-1.5">{currentSession.label}</span>
            <span className="app-chip rounded-full px-3 py-1.5">총 {questions.length}문항</span>
            <span className="app-chip rounded-full px-3 py-1.5">{sectionLabel}</span>
          </div>
          <p className="mt-4 text-sm leading-7 app-subtle">
            {currentSession.description}
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

            <div className="flex min-w-[13rem] flex-col gap-4">
              <label>
                <span className="mb-2 block text-sm font-semibold text-[var(--navy)]">
                  교시 선택
                </span>
                <select
                  value={currentSession.id}
                  onChange={(event) => setCurrentSessionId(event.target.value)}
                  className="app-input w-full rounded-2xl px-4 py-3 outline-none"
                >
                  {sessions.map((session) => (
                    <option key={session.id} value={session.id}>
                      {session.label}
                    </option>
                  ))}
                </select>
              </label>

              <label>
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
          </div>
        </section>

        <section className="app-panel-strong rounded-[2rem] p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(16,32,51,0.52)]">
              <span className="app-chip rounded-full px-3 py-1">{sectionLabel}</span>
              <span className="app-chip rounded-full px-3 py-1">{currentSession.label}</span>
            </div>
            <p className="text-sm app-subtle">
              {currentIndex + 1} / {questions.length}
            </p>
          </div>

          <div className="mt-5 rounded-[1.5rem] border border-[rgba(16,32,51,0.08)] bg-white/72 px-5 py-5">
            <div className="space-y-3">
              {stemLines.map((line, index) => (
                <p
                  key={`${currentQuestion.id}-stem-${index}`}
                  className={`text-[15px] text-[var(--navy)] md:text-[17px] ${
                    line.startsWith("•") || line.startsWith("-")
                      ? "pl-3 font-medium leading-8"
                      : "leading-8"
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

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
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[var(--navy)]">{option.id}.</p>
                  <div className="mt-2 space-y-2">
                    {getExamTextLines(option.text).map((line, lineIndex) => (
                      <p
                        key={`${currentQuestion.id}-${option.id}-${lineIndex}`}
                        className={`text-sm text-[rgba(16,32,51,0.8)] md:text-[15px] ${
                          line.startsWith("•") || line.startsWith("-")
                            ? "pl-3 leading-7"
                            : "leading-7"
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
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
                <div className="mt-2 space-y-2">
                  {getExamTextLines(currentQuestion.answerText).map((line, index) => (
                    <p
                      key={`${currentQuestion.id}-answer-${index}`}
                      className="text-[var(--navy)] leading-7"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[rgba(16,32,51,0.08)] bg-white/72 px-4 py-4 text-sm leading-7 text-[rgba(16,32,51,0.76)]">
                <h3 className="font-semibold text-[var(--navy)]">설명</h3>
                <div className="mt-2 space-y-2">
                  {getExamTextLines(currentQuestion.explanation).map((line, index) => (
                    <p
                      key={`${currentQuestion.id}-explanation-${index}`}
                      className="leading-7"
                    >
                      {line}
                    </p>
                  ))}
                </div>
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
              {currentSession.sourceLabel}
            </li>
            <li className="rounded-2xl border border-[color:rgba(2,140,116,0.14)] bg-white/76 px-4 py-3">
              최종답안 기준 정답 반영
            </li>
            <li className="rounded-2xl border border-[color:rgba(2,140,116,0.14)] bg-white/76 px-4 py-3">
              {currentSession.id === "session1"
                ? "OCR 텍스트 기반으로 구성되어 일부 표현은 추가 보정될 수 있음"
                : "문항 카드에서 바로 정답과 설명을 확인 가능"}
            </li>
          </ul>
        </section>
      </aside>
    </div>
  );
}
