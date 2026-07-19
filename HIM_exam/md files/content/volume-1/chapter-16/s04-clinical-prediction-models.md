---
id: HIM-V1-C16-S04-T001
slug: clinical-prediction-models
title: 임상예측 모델
title_en: Clinical Prediction Models
volume: 1
chapter: 16
section: 4
order: 1
status: drafting
difficulty: intermediate
importance: A
exam_frequency: unknown
estimated_minutes: 8
prerequisites:
  - HIM-V1-C16-S03-T001
related_topics:
  - HIM-V1-C16-S05-T001
tags:
  - 의료AI
  - 임상예측
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-TEXTBOOK-MEDICAL-AI-001
assets: []
questions:
  - Q-HIM-000369
  - Q-HIM-000370
---

# 임상예측 모델

## 학습목표

1. 임상예측 모델의 정의와 대표적 활용 사례를 설명할 수 있다.
2. 임상예측 모델의 성능 지표(민감도, 특이도 등)가 왜 중요한지 설명할 수 있다.

## 한 문장 정의

임상예측 모델은 환자의 임상 데이터를 바탕으로 질병 발생 위험, 재입원 가능성, 예후 등을 예측하는 지도학습 기반 AI 모델이다.

## 왜 중요한가

임상예측 모델은 의료진의 조기 개입을 돕지만, 예측 오류가 환자 안전에 직결될 수 있어 성능과 한계를 정확히 이해해야 한다.

## 선수 개념

- [지도학습과 비지도학습 기초](s03-supervised-unsupervised-learning.md)

## 핵심 개념

- 임상예측 모델: 환자 데이터로 질병 위험·예후 등을 예측하는 모델
- 패혈증 조기 경보, 재입원 위험 예측, 낙상 위험 예측 등이 대표적 활용 사례
- 민감도(Sensitivity)·특이도(Specificity): 예측 모델의 성능을 평가하는 핵심 지표

## 상세 설명

임상예측 모델은 대부분 [지도학습](s03-supervised-unsupervised-learning.md) 방식으로, 과거 환자들의 데이터(입력)와 실제 결과(라벨, 예: 재입원 여부)를 이용해 학습한다. 모델이 위험도가 높다고 예측한 환자를 의료진이 놓치지 않게 돕는 것이 목적이지만, 민감도가 너무 낮으면 위험 환자를 놓치고, 특이도가 너무 낮으면 불필요한 경보가 남발되어 의료진의 신뢰를 잃는 "경보 피로(Alert Fatigue)"가 발생할 수 있다.

## 비교표 또는 흐름

| 지표 | 의미 | 낮을 때 문제 |
|---|---|---|
| 민감도 | 실제 위험 환자를 놓치지 않는 능력 | 위험 환자 누락 |
| 특이도 | 위험하지 않은 환자를 정확히 구분하는 능력 | 불필요한 경보 남발 |

## 실무 사례

한 병원이 패혈증 조기 경보 모델을 도입했으나 특이도가 낮아 잦은 오경보로 의료진이 경보를 무시하게 되는 문제가 발생해, 모델의 임계값(threshold)을 재조정한 사례가 있다.

## 국가시험 포인트

- 임상예측 모델의 정의와 민감도·특이도 개념을 연결하는 문제

## 자주 하는 실수

- 임상예측 모델의 예측을 확정 진단으로 오해하는 것

## 관련 법령·표준

이 Topic은 개념 설명으로 특정 법령에 근거하지 않는다.

## AI Note

임상예측 모델의 결과는 확률적 위험도이며, 최종 진단과 치료 결정은 의료진의 판단에 따른다.

## 핵심 요약

- 임상예측 모델은 환자 데이터로 질병 위험·예후를 예측하는 지도학습 기반 모델이다.
- 민감도와 특이도의 균형이 모델의 실제 유용성을 좌우한다.

## 플래시카드

1. Q. 실제 위험 환자를 놓치지 않는 능력을 나타내는 지표는? / A. 민감도
2. Q. 오경보가 잦아 의료진이 경보를 무시하게 되는 현상은? / A. 경보 피로(Alert Fatigue)

## 연습문제

- Q-HIM-000369 (객관식)
- Q-HIM-000370 (OX)

## 참고문헌

- REF-TEXTBOOK-MEDICAL-AI-001 — 의료 AI 개념 개괄 (status: located)
