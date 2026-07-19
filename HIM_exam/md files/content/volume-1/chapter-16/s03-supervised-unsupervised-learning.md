---
id: HIM-V1-C16-S03-T001
slug: supervised-unsupervised-learning
title: 지도학습과 비지도학습 기초
title_en: Supervised and Unsupervised Learning Basics
volume: 1
chapter: 16
section: 3
order: 1
status: drafting
difficulty: intermediate
importance: B
exam_frequency: unknown
estimated_minutes: 8
prerequisites:
  - HIM-V1-C16-S02-T001
related_topics:
  - HIM-V1-C16-S04-T001
tags:
  - 의료AI
  - 지도학습
  - 비지도학습
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-TEXTBOOK-MEDICAL-AI-001
assets: []
questions:
  - Q-HIM-000367
  - Q-HIM-000368
---

# 지도학습과 비지도학습 기초

## 학습목표

1. 지도학습과 비지도학습의 차이를 라벨(정답) 유무를 기준으로 설명할 수 있다.
2. 각 학습 방식이 의료 현장에서 어떻게 활용되는지 예를 들 수 있다.

## 한 문장 정의

지도학습은 정답(라벨)이 있는 데이터로 모델을 학습시키는 방식이고, 비지도학습은 정답 없이 데이터 안에서 패턴이나 군집을 찾는 방식이다.

## 왜 중요한가

두 방식의 차이를 이해하지 못하면, AI가 제시하는 결과의 성격(예측인지 군집화인지)을 오해해 잘못된 방식으로 해석하거나 활용하게 된다.

## 선수 개념

- [머신러닝 학습데이터](s02-machine-learning-training-data.md)

## 핵심 개념

- 지도학습(Supervised Learning): 입력과 정답(라벨)이 쌍으로 주어진 데이터로 학습(예: 질병 유무가 표시된 환자 데이터로 예측 모델 학습)
- 비지도학습(Unsupervised Learning): 정답 라벨 없이 데이터의 구조·군집을 탐색(예: 유사한 증상 패턴을 가진 환자군 발견)
- 라벨(Label): 지도학습에서 정답에 해당하는 값

## 상세 설명

의료 현장에서 지도학습은 "이 환자가 특정 질병에 걸릴 것인가"처럼 이미 결과를 아는 과거 데이터로 미래를 예측하는 데 주로 쓰인다. 비지도학습은 정답이 없는 상태에서 "이 환자들은 서로 비슷한 특성을 가진 몇 개의 그룹으로 나뉘는가"와 같이 데이터 안에 숨겨진 구조를 찾는 데 쓰인다. [머신러닝 학습데이터](s02-machine-learning-training-data.md)에서 다룬 학습·검증·시험 데이터셋 구분은 주로 지도학습에서 중요하게 작동하는 개념이다.

## 비교표 또는 흐름

| 구분 | 지도학습 | 비지도학습 |
|---|---|---|
| 라벨(정답) | 있음 | 없음 |
| 목적 | 예측 | 패턴·군집 탐색 |
| 의료 예시 | 질병 위험 예측 | 유사 환자군 발견 |

## 실무 사례

한 연구팀이 당뇨병 환자 데이터에서 비지도학습으로 몇 개의 하위 유형을 발견한 뒤, 각 유형별 예후를 지도학습으로 예측하는 2단계 접근을 사용한 사례가 있다.

## 국가시험 포인트

- 지도학습과 비지도학습을 라벨 유무로 구분하는 문제

## 자주 하는 실수

- 비지도학습도 "정답을 맞히는" 것으로 오해하는 것

## 관련 법령·표준

이 Topic은 머신러닝 방법론으로 특정 법령에 근거하지 않는다.

## AI Note

지도학습 모델의 예측 결과와 비지도학습의 군집화 결과는 성격이 다르므로, 해석 시 이 차이를 인지해야 한다.

## 핵심 요약

- 지도학습은 라벨이 있는 데이터로 예측 모델을 학습한다.
- 비지도학습은 라벨 없이 데이터의 패턴·군집을 탐색한다.

## 플래시카드

1. Q. 정답(라벨)이 있는 데이터로 학습하는 방식은? / A. 지도학습
2. Q. 유사 환자군 발견처럼 라벨 없이 패턴을 찾는 방식은? / A. 비지도학습

## 연습문제

- Q-HIM-000367 (객관식)
- Q-HIM-000368 (OX)

## 참고문헌

- REF-TEXTBOOK-MEDICAL-AI-001 — 의료 AI 개념 개괄 (status: located)
