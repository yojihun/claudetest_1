---
id: HIM-V1-C16-S08-T001
slug: bias-and-fairness
title: 편향과 공정성
title_en: Bias and Fairness
volume: 1
chapter: 16
section: 8
order: 1
status: drafting
difficulty: intermediate
importance: A
exam_frequency: unknown
estimated_minutes: 8
prerequisites:
  - HIM-V1-C16-S07-T001
  - HIM-V1-C09-S16-T001
related_topics:
  - HIM-V1-C16-S09-T001
tags:
  - 의료AI
  - 편향
  - 공정성
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-TEXTBOOK-MEDICAL-AI-001
assets: []
questions:
  - Q-HIM-000377
  - Q-HIM-000378
---

# 편향과 공정성

## 학습목표

1. 의료 AI에서 편향(bias)이 발생하는 원인을 설명할 수 있다.
2. [AI 학습데이터 품질](../chapter-09/s16-ai-training-data-quality.md)에서 다룬 대표성 문제가 편향·공정성 문제로 어떻게 이어지는지 설명할 수 있다.

## 한 문장 정의

의료 AI에서 편향이란 학습데이터가 특정 집단을 충분히 대표하지 못해, 모델이 다른 집단에서는 부정확하거나 불공정한 결과를 내는 현상을 말한다.

## 왜 중요한가

편향된 AI 모델은 특정 연령·성별·인종·지역 환자군에서 예측 성능이 떨어져, 오히려 의료 불평등을 심화시킬 수 있다.

## 선수 개념

- [생성형 AI의 환각과 위험 관리](s07-generative-ai-risks.md)
- [AI 학습데이터 품질](../chapter-09/s16-ai-training-data-quality.md)

## 핵심 개념

- 편향(Bias): 학습데이터의 불균형으로 인해 특정 집단에서 모델 성능이 떨어지는 현상
- 공정성(Fairness): 모델이 여러 집단에 걸쳐 고르게 정확한 성능을 내는 것
- 대표성(Representativeness): 학습데이터가 실제 진료 대상 전체를 얼마나 반영하는가

## 상세 설명

[AI 학습데이터 품질](../chapter-09/s16-ai-training-data-quality.md)에서 언급했듯, 특정 연령대나 특정 병원의 환자 데이터로만 학습된 모델은 다른 집단에 적용했을 때 부정확하게 작동할 위험이 있다. 이런 대표성 부족이 누적되면, 모델이 특정 집단에서는 정확하지만 다른 집단(예: 특정 인종, 특정 성별)에서는 부정확한 편향된 결과를 낳는다. 공정성은 이런 편향을 최소화해 모델이 여러 집단에 걸쳐 고르게 작동하도록 하는 목표를 가리킨다.

## 비교표 또는 흐름

| 개념 | 의미 |
|---|---|
| 대표성 부족 | 학습데이터가 특정 집단에 치우침 |
| 편향 | 그 결과 특정 집단에서 성능 저하 |
| 공정성 | 여러 집단에 걸쳐 고르게 정확한 성능을 추구하는 목표 |

## 실무 사례

한 피부질환 진단 AI가 특정 피부색 환자의 영상 데이터로 주로 학습되어, 다른 피부색 환자에서는 진단 정확도가 떨어지는 문제가 확인되어 데이터 재구성이 필요했던 사례가 있다.

## 국가시험 포인트

- 편향의 원인(대표성 부족)과 공정성의 목표를 연결하는 문제

## 자주 하는 실수

- 편향 문제를 모델의 알고리즘 결함으로만 오해하고 학습데이터 구성 문제를 간과하는 것

## 관련 법령·표준

이 Topic은 개념 설명으로 특정 법령에 근거하지 않는다.

## AI Note

편향 문제는 AI를 활용하는 보건의료정보관리사가 반드시 인지해야 할 한계이며, 특정 집단에서의 성능 저하 가능성을 항상 고려해야 한다.

## 핵심 요약

- 편향은 학습데이터의 대표성 부족에서 비롯되어 특정 집단에서 모델 성능이 떨어지는 현상이다.
- 공정성은 여러 집단에 걸쳐 고르게 정확한 성능을 추구하는 목표이다.

## 플래시카드

1. Q. 학습데이터의 대표성 부족으로 특정 집단에서 모델 성능이 떨어지는 현상은? / A. 편향(Bias)
2. Q. 모델이 여러 집단에 걸쳐 고르게 정확한 성능을 내는 것을 무엇이라 하는가? / A. 공정성(Fairness)

## 연습문제

- Q-HIM-000377 (객관식)
- Q-HIM-000378 (OX)

## 참고문헌

- REF-TEXTBOOK-MEDICAL-AI-001 — 의료 AI 개념 개괄 (status: located)
