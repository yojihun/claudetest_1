---
id: HIM-V1-C16-S07-T001
slug: generative-ai-risks
title: 생성형 AI의 환각과 위험 관리
title_en: Generative AI Hallucination and Risk Management
volume: 1
chapter: 16
section: 7
order: 1
status: drafting
difficulty: intermediate
importance: A
exam_frequency: unknown
estimated_minutes: 8
prerequisites:
  - HIM-V1-C16-S06-T001
  - HIM-V1-C05-S10-T001
related_topics:
  - HIM-V1-C16-S08-T001
tags:
  - 의료AI
  - 생성형AI
  - 환각
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-TEXTBOOK-MEDICAL-AI-001
assets: []
questions:
  - Q-HIM-000375
  - Q-HIM-000376
---

# 생성형 AI의 환각과 위험 관리

## 학습목표

1. 생성형 AI의 '환각(Hallucination)' 현상을 설명할 수 있다.
2. [생성형 AI와 기록 작성](../chapter-05/s10-generative-ai-and-documentation.md)에서 다룬 활용 사례에 환각 위험이 어떻게 적용되는지 설명할 수 있다.

## 한 문장 정의

생성형 AI의 환각이란 모델이 실제로는 존재하지 않거나 사실이 아닌 정보를 그럴듯한 문장으로 생성해내는 현상을 말한다.

## 왜 중요한가

의무기록 요약이나 초안 작성에 생성형 AI를 활용할 때 환각으로 생성된 잘못된 정보가 검수 없이 기록에 남으면 환자 안전과 법적 책임 문제로 이어질 수 있다.

## 선수 개념

- [임상 자연어처리](s06-clinical-nlp.md)
- [생성형 AI와 기록 작성](../chapter-05/s10-generative-ai-and-documentation.md)

## 핵심 개념

- 환각(Hallucination): 생성형 AI가 사실이 아닌 정보를 그럴듯하게 생성하는 현상
- 인간 검수(Human-in-the-loop): 생성 결과를 사람이 검토·확인하는 절차
- 근거 제시(Grounding): 생성 결과의 출처를 명시해 검증 가능하게 하는 방법

## 상세 설명

[생성형 AI와 기록 작성](../chapter-05/s10-generative-ai-and-documentation.md)에서 다룬 기록 요약·초안 작성 활용은 업무 효율을 높이지만, 생성형 AI가 존재하지 않는 검사 결과나 없는 병력을 그럴듯하게 지어내는 환각 위험이 항상 따른다. 이 문제를 관리하는 핵심 방법은 인간 검수 절차를 반드시 거치는 것과, 생성 결과가 어떤 원본 자료에 근거했는지 표시하는 근거 제시 방식을 적용하는 것이다.

## 비교표 또는 흐름

| 위험 관리 방법 | 내용 |
|---|---|
| 인간 검수 | 생성 결과를 담당자가 반드시 확인 |
| 근거 제시 | 생성 결과의 원본 출처 표시 |

## 실무 사례

한 병원이 생성형 AI로 퇴원요약 초안을 작성하게 하되, 담당 의사가 원본 기록과 대조해 확인한 후에만 최종 기록으로 확정하도록 절차를 마련한 사례가 있다.

## 국가시험 포인트

- 생성형 AI 환각 개념과 위험 관리 방법(인간 검수)을 확인하는 문제

## 자주 하는 실수

- 생성형 AI가 작성한 초안을 검수 없이 그대로 최종 기록으로 확정하는 것

## 관련 법령·표준

이 Topic은 개념 설명으로 특정 법령에 근거하지 않는다.

## AI Note

이 Topic 자체가 생성형 AI의 한계를 다룬다. 생성형 AI 결과는 항상 사람의 검수를 거쳐야 한다는 원칙이 핵심이다.

## 핵심 요약

- 생성형 AI는 사실이 아닌 정보를 그럴듯하게 생성하는 환각 위험이 있다.
- 인간 검수와 근거 제시가 환각 위험을 관리하는 핵심 방법이다.

## 플래시카드

1. Q. 생성형 AI가 사실이 아닌 정보를 그럴듯하게 만들어내는 현상은? / A. 환각(Hallucination)
2. Q. 생성 결과를 사람이 검토·확인하는 절차를 무엇이라 하는가? / A. 인간 검수(Human-in-the-loop)

## 연습문제

- Q-HIM-000375 (객관식)
- Q-HIM-000376 (OX)

## 참고문헌

- REF-TEXTBOOK-MEDICAL-AI-001 — 의료 AI 개념 개괄 (status: located)
