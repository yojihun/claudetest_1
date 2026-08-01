"use client";

import { useState } from "react";
import {
  statTerms,
  formulaCategories,
  interactiveChallenges,
  mockQuestions,
  StatTerm,
  InteractiveChallenge,
  MockQuestion,
} from "@/lib/hospital-statistics-data";
import type { LearningDataset } from "@/lib/types";

export function HospitalStatisticsClient({ dataset }: { dataset: LearningDataset }) {
  const [activeTab, setActiveTab] = useState<"glossary" | "calculation" | "test">("glossary");

  // Glossary state
  const [glossaryFilter, setGlossaryFilter] = useState<string>("전체");
  const filteredTerms =
    glossaryFilter === "전체"
      ? statTerms
      : statTerms.filter((term) => term.category === glossaryFilter);

  // Calculation state
  const [selectedFormulaType, setSelectedFormulaType] = useState<string>("비율/백분율형");
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [gradedChallenges, setGradedChallenges] = useState<Record<string, { isCorrect: boolean; showExplanation: boolean }>>({});

  // Test state
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [showTestGrading, setShowTestGrading] = useState<Record<string, boolean>>({});
  const [testScore, setTestScore] = useState<number | null>(null);

  const activeFormulaCategory = formulaCategories.find((cat) => cat.type === selectedFormulaType) ?? formulaCategories[0];

  function handleGradingChallenge(challenge: InteractiveChallenge) {
    const userAnswer = parseFloat(userAnswers[challenge.id] ?? "");
    const isCorrect = userAnswer === challenge.correctAnswer;
    setGradedChallenges((prev) => ({
      ...prev,
      [challenge.id]: { isCorrect, showExplanation: true },
    }));
  }

  function handleGradingTest() {
    let correctCount = 0;
    const grading: Record<string, boolean> = {};
    mockQuestions.forEach((q) => {
      const selected = selectedOptions[q.id];
      if (selected && q.answer.includes(selected)) {
        correctCount += 1;
      }
      grading[q.id] = true;
    });
    setShowTestGrading(grading);
    setTestScore(correctCount);
  }

  function resetTest() {
    setSelectedOptions({});
    setShowTestGrading({});
    setTestScore(null);
  }

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-teal-600 via-cyan-700 to-blue-700 px-6 py-10 text-white shadow-lg">
        <div className="relative z-10 max-w-3xl space-y-3">
          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold tracking-wider text-teal-100 uppercase">
            Special Section
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            병원통계 집중 학습
          </h1>
          <p className="text-sm text-teal-100/90 md:text-base leading-relaxed">
            국가시험 통계 파트 완전 정복! 수험생들이 가장 어려워하는 병원 통계의 개념, 용어, 공식을 계통별로 정리하고 직접 계산 훈련과 미니 모의고사를 통해 완벽하게 마스터하세요.
          </p>
        </div>
        <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-15 pointer-events-none bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white via-teal-200 to-transparent" />
      </div>

      {/* Tabs navigation */}
      <div className="flex border-b border-[var(--line)] bg-white/50 p-1 rounded-2xl backdrop-blur-md">
        <button
          onClick={() => setActiveTab("glossary")}
          className={`flex-1 rounded-xl py-3 text-center text-sm font-bold tracking-tight transition ${
            activeTab === "glossary"
              ? "bg-teal-600 text-white shadow-sm"
              : "text-[rgba(16,32,51,0.6)] hover:bg-[rgba(16,32,51,0.04)]"
          }`}
        >
          Chapter I. 용어 사전
        </button>
        <button
          onClick={() => setActiveTab("calculation")}
          className={`flex-1 rounded-xl py-3 text-center text-sm font-bold tracking-tight transition ${
            activeTab === "calculation"
              ? "bg-teal-600 text-white shadow-sm"
              : "text-[rgba(16,32,51,0.6)] hover:bg-[rgba(16,32,51,0.04)]"
          }`}
        >
          Chapter II. 계산 방법 훈련
        </button>
        <button
          onClick={() => setActiveTab("test")}
          className={`flex-1 rounded-xl py-3 text-center text-sm font-bold tracking-tight transition ${
            activeTab === "test"
              ? "bg-teal-600 text-white shadow-sm"
              : "text-[rgba(16,32,51,0.6)] hover:bg-[rgba(16,32,51,0.04)]"
          }`}
        >
          Chapter III. 미니 테스트
        </button>
      </div>

      {/* Chapter I: Glossary */}
      {activeTab === "glossary" && (
        <div className="space-y-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {["전체", "병상", "재원일수", "사망", "산과·신생아", "외래·입원"].map((category) => (
              <button
                key={category}
                onClick={() => setGlossaryFilter(category)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                  glossaryFilter === category
                    ? "bg-teal-600 text-white shadow-sm"
                    : "bg-white border border-[var(--line)] text-[rgba(16,32,51,0.7)] hover:bg-[rgba(16,32,51,0.04)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredTerms.map((term) => (
              <div
                key={term.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--line)] bg-white p-6 shadow-sm hover:shadow-md transition duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-extrabold text-teal-700">
                      {term.category}
                    </span>
                    <span className="text-[10px] font-medium text-slate-400">
                      {term.id}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold tracking-tight text-[var(--navy)]">
                      {term.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 italic">
                      {term.nameEn}
                    </p>
                  </div>

                  <div className="space-y-3 text-sm text-[rgba(16,32,51,0.8)]">
                    <p className="leading-relaxed">
                      <strong className="text-[var(--navy)]">뜻:</strong> {term.definition}
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-[var(--navy)]">국시 중요 이유:</strong> {term.whyImportant}
                    </p>
                    <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100">
                      <p className="font-mono text-xs text-teal-800 font-bold mb-2">
                        공식 ({term.unit}): {term.formula}
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <strong className="text-slate-500">분자:</strong> {term.numerator}
                        </div>
                        <div>
                          <strong className="text-slate-500">분모:</strong> {term.denominator}
                        </div>
                      </div>
                    </div>
                    {term.comparison && (
                      <p className="text-xs text-amber-800 bg-amber-50/70 p-3 rounded-xl border border-amber-100">
                        <strong>비교 팁:</strong> {term.comparison}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-3">
                  <p className="text-xs font-bold text-teal-600 bg-teal-50/50 p-2.5 rounded-xl">
                    💡 암기법: {term.keyPoint}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Chapter II: Calculation Training */}
      {activeTab === "calculation" && (
        <div className="grid gap-6 lg:grid-cols-[18rem_minmax(0,1fr)]">
          {/* Sidebar Navigation */}
          <aside className="space-y-4">
            <div className="rounded-3xl border border-[var(--line)] bg-white p-5 shadow-sm">
              <h3 className="text-sm font-bold text-slate-400 tracking-wider uppercase mb-3">
                유형 선택
              </h3>
              <div className="flex flex-col gap-2">
                {formulaCategories.map((cat) => (
                  <button
                    key={cat.type}
                    onClick={() => setSelectedFormulaType(cat.type)}
                    className={`w-full rounded-xl px-4 py-3 text-left text-xs font-bold transition ${
                      selectedFormulaType === cat.type
                        ? "bg-teal-600 text-white shadow-sm"
                        : "text-[rgba(16,32,51,0.7)] hover:bg-slate-50"
                    }`}
                  >
                    {cat.type}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Panel */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-[var(--line)] bg-white p-6 shadow-sm space-y-4">
              <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-700">
                {activeFormulaCategory.type}
              </span>
              <h2 className="text-xl font-bold text-[var(--navy)]">
                {activeFormulaCategory.title}
              </h2>
              <p className="text-sm text-[rgba(16,32,51,0.8)] leading-relaxed">
                {activeFormulaCategory.description}
              </p>

              <div className="space-y-3 pt-3 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase">
                  풀기 전 핵심 확인 순서
                </h4>
                <ol className="list-decimal list-inside space-y-1.5 text-xs text-[rgba(16,32,51,0.72)] leading-relaxed">
                  {activeFormulaCategory.checkSteps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100">
                <h4 className="text-xs font-bold text-red-500 tracking-wider uppercase">
                  자주 하는 실수 / 함정
                </h4>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-red-700/90 leading-relaxed">
                  {activeFormulaCategory.commonMistakes.map((mistake, idx) => (
                    <li key={idx}>{mistake}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Interactive Calculator Section */}
            <div className="rounded-3xl border border-[var(--line)] bg-white p-6 shadow-sm space-y-5">
              <h3 className="text-lg font-bold text-[var(--navy)]">
                ⚡ 실전 대화형 계산 연습
              </h3>
              <p className="text-xs text-slate-400 leading-normal">
                공식만 외우기보다 실제 숫자를 대입하여 풀어보는 단계입니다. 정답을 적은 후 채점하기를 누르세요.
              </p>

              <div className="space-y-6">
                {interactiveChallenges.map((challenge, idx) => {
                  const graded = gradedChallenges[challenge.id];
                  return (
                    <div key={challenge.id} className="border border-slate-100 p-5 rounded-2xl bg-slate-50/50 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-teal-600">
                          연습 {idx + 1}. {challenge.title}
                        </span>
                        {graded && (
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold ${
                              graded.isCorrect
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {graded.isCorrect ? "정답" : "오답"}
                          </span>
                        )}
                      </div>

                      <p className="text-sm font-bold text-[var(--navy)] bg-white p-4 rounded-xl shadow-xs border border-slate-100">
                        {challenge.scenario}
                      </p>

                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-slate-500">
                          {challenge.questionText}
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="number"
                            step="any"
                            placeholder="숫자 입력..."
                            value={userAnswers[challenge.id] ?? ""}
                            onChange={(e) =>
                              setUserAnswers((prev) => ({ ...prev, [challenge.id]: e.target.value }))
                            }
                            className="app-input flex-1 px-4 py-2.5 text-sm"
                          />
                          <span className="flex items-center text-sm font-bold text-slate-600 px-2">
                            {challenge.unit}
                          </span>
                          <button
                            onClick={() => handleGradingChallenge(challenge)}
                            className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl px-5 py-2.5 text-xs font-bold transition"
                          >
                            채점하기
                          </button>
                        </div>
                      </div>

                      {graded?.showExplanation && (
                        <div className="mt-3 bg-white p-4 rounded-xl border border-slate-100 text-xs space-y-2">
                          <p className="font-semibold text-teal-700">공식: {challenge.formulaUsed}</p>
                          <p className="text-slate-600 leading-relaxed"><strong className="text-[var(--navy)]">정답:</strong> {challenge.correctAnswer}{challenge.unit}</p>
                          <p className="text-slate-500 leading-relaxed"><strong className="text-[var(--navy)]">상세 해설:</strong> {challenge.explanation}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chapter III: Test */}
      {activeTab === "test" && (
        <div className="space-y-6">
          <div className="rounded-3xl border border-[var(--line)] bg-white p-6 shadow-sm space-y-3">
            <h2 className="text-xl font-bold text-[var(--navy)]">
              📋 병원통계 미니 테스트 (15문항)
            </h2>
            <p className="text-sm text-[rgba(16,32,51,0.8)]">
              실제 국가시험 난이도에 준하는 신규 기출 변형 문제입니다. 문제를 풀고 하단의 '일괄 채점하기'를 누르면 점수와 함께 오답 해설이 제공됩니다.
            </p>
          </div>

          <div className="space-y-6">
            {mockQuestions.map((q, index) => {
              const isGraded = showTestGrading[q.id];
              const selected = selectedOptions[q.id];
              const isCorrect = selected && q.answer.includes(selected);

              return (
                <div
                  key={q.id}
                  className={`rounded-3xl border p-6 bg-white transition ${
                    isGraded
                      ? isCorrect
                        ? "border-green-200 bg-green-50/10"
                        : "border-red-200 bg-red-50/10"
                      : "border-[var(--line)]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-teal-600">
                      문제 {index + 1}
                    </span>
                    {isGraded && (
                      <span
                        className={`rounded-full px-3 py-0.5 text-xs font-bold ${
                          isCorrect ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}
                      >
                        {isCorrect ? "정답" : "오답"}
                      </span>
                    )}
                  </div>

                  <p className="text-sm font-bold text-[var(--navy)] mb-4 leading-relaxed">
                    {q.stem}
                  </p>

                  <div className="space-y-2">
                    {q.options?.map((opt) => {
                      const isChecked = selected === opt.id;
                      return (
                        <button
                          key={opt.id}
                          disabled={isGraded}
                          onClick={() =>
                            setSelectedOptions((prev) => ({ ...prev, [q.id]: opt.id }))
                          }
                          className={`w-full flex items-start gap-3 rounded-2xl p-4 text-left text-xs font-semibold border transition ${
                            isChecked
                              ? "border-teal-500 bg-teal-50/30 text-teal-900"
                              : "border-slate-100 bg-white hover:bg-slate-50 text-[rgba(16,32,51,0.8)]"
                          }`}
                        >
                          <span
                            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold border transition ${
                              isChecked
                                ? "border-teal-500 bg-teal-500 text-white"
                                : "border-slate-300 text-slate-500"
                            }`}
                          >
                            {opt.id}
                          </span>
                          <span className="leading-relaxed">{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {isGraded && (
                    <div className="mt-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs leading-relaxed space-y-2">
                      <p className="font-bold text-teal-700">
                        정답: {q.answer.join(", ")}
                      </p>
                      <p className="text-slate-600">
                        <strong>풀이 해설:</strong> {q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 justify-center items-center py-6">
            {testScore === null ? (
              <button
                onClick={handleGradingTest}
                className="bg-teal-600 hover:bg-teal-700 text-white rounded-2xl px-10 py-4 font-bold shadow-md transition"
              >
                일괄 채점하기
              </button>
            ) : (
              <div className="text-center space-y-4">
                <div className="bg-teal-50 border border-teal-200 rounded-3xl p-6 shadow-sm inline-block min-w-xs">
                  <p className="text-sm font-bold text-teal-800">테스트 결과</p>
                  <p className="text-4xl font-extrabold text-teal-600 mt-2">
                    {testScore} / {mockQuestions.length}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    맞힌 문제: {(testScore / mockQuestions.length * 100).toFixed(0)}%
                  </p>
                </div>
                <div>
                  <button
                    onClick={resetTest}
                    className="border border-teal-600 hover:bg-teal-50 text-teal-600 rounded-2xl px-8 py-3.5 text-sm font-bold transition"
                  >
                    다시 풀기
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
