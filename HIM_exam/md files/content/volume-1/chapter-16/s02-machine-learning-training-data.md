---
id: HIM-V1-C16-S02-T001
slug: machine-learning-training-data
title: 머신러닝 학습데이터
title_en: Machine Learning Training Data
volume: 1
chapter: 16
section: 2
order: 1
status: drafting
difficulty: intermediate
importance: A
exam_frequency: unknown
estimated_minutes: 8
prerequisites:
  - HIM-V1-C16-S01-T001
  - HIM-V1-C09-S16-T001
related_topics:
  - HIM-V1-C16-S03-T001
tags:
  - 의료AI
  - 학습데이터
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-TEXTBOOK-MEDICAL-AI-001
assets: []
questions:
  - Q-HIM-000365
  - Q-HIM-000366
---

# 머신러닝 학습데이터

## 학습목표

1. 학습(train), 검증(validation), 시험(test) 데이터셋의 역할 차이를 설명할 수 있다.
2. [AI 학습데이터 품질](../chapter-09/s16-ai-training-data-quality.md)에서 다룬 대표성·라벨링 품질이 이 세 데이터셋 모두에 왜 중요한지 설명할 수 있다.

## 한 문장 정의

머신러닝 학습데이터는 모델을 훈련시키는 학습 데이터셋, 학습 중 성능을 조정하는 검증 데이터셋, 최종 성능을 평가하는 시험 데이터셋으로 나뉘어 사용된다.

## 왜 중요한가

이 세 데이터셋을 명확히 분리하지 않으면, 모델이 실제로 새로운 환자에게 얼마나 잘 작동할지 정확히 평가할 수 없다.

## 선수 개념

- [AI 학습데이터 품질](../chapter-09/s16-ai-training-data-quality.md)

## 핵심 개념

- 학습 데이터셋(Training Set): 모델이 패턴을 학습하는 데 사용
- 검증 데이터셋(Validation Set): 학습 중 모델 설정을 조정하는 데 사용
- 시험 데이터셋(Test Set): 학습에 전혀 사용되지 않은 데이터로 최종 성능을 평가
- 데이터 유출(Data Leakage): 시험 데이터가 학습 과정에 섞여 들어가 성능이 과대평가되는 문제

## 상세 설명

시험 데이터셋은 모델이 "한 번도 보지 못한" 데이터여야 진정한 성능을 평가할 수 있다. 만약 같은 환자의 데이터가 학습과 시험 데이터셋에 모두 섞여 있다면(데이터 유출), 모델이 실제로는 학습한 내용을 "기억"해서 맞히는 것일 뿐인데도 성능이 좋아 보이는 착시가 생긴다. 이는 [AI 학습데이터 품질](../chapter-09/s16-ai-training-data-quality.md)에서 다룬 대표성 문제와 함께, 모델 성능 평가의 신뢰성을 훼손하는 대표적 함정이다.

## 비교표 또는 흐름

| 데이터셋 | 역할 |
|---|---|
| 학습(Train) | 모델이 패턴을 학습 |
| 검증(Validation) | 학습 중 설정 조정 |
| 시험(Test) | 학습에 사용되지 않은 데이터로 최종 평가 |

## 실무 사례

한 연구팀이 같은 환자의 여러 검사 기록을 무작위로 학습·시험 데이터셋에 나누어 배정했다가, 같은 환자의 데이터가 양쪽에 섞여 성능이 과대평가된 것을 발견하고 환자 단위로 데이터셋을 재분할한 사례가 있다.

## 국가시험 포인트

- 학습·검증·시험 데이터셋의 역할 차이와 데이터 유출 개념을 확인하는 문제

## 자주 하는 실수

- 시험 데이터셋에 학습에 사용된 데이터가 섞여도 문제없다고 오해하는 것

## 관련 법령·표준

이 Topic은 머신러닝 방법론으로 특정 법령에 근거하지 않는다.

## AI Note

이 Topic 자체가 AI 기술의 내부 작동 방식을 다룬다. 데이터 유출 같은 기술적 함정을 이해하는 것도 AI 결과를 비판적으로 검토하는 능력의 일부다.

## 핵심 요약

- 머신러닝은 학습, 검증, 시험 데이터셋을 구분해 사용한다.
- 데이터 유출은 모델 성능을 실제보다 좋아 보이게 만드는 함정이다.

## 플래시카드

1. Q. 모델의 최종 성능을 평가하는 데 사용되는 데이터셋은? / A. 시험(Test) 데이터셋
2. Q. 같은 환자 데이터가 학습과 시험 데이터셋에 섞이는 문제를 무엇이라 하는가? / A. 데이터 유출(Data Leakage)

## 연습문제

- Q-HIM-000365 (객관식)
- Q-HIM-000366 (OX)

## 참고문헌

- REF-TEXTBOOK-MEDICAL-AI-001 — 의료 AI 개념 개괄 (status: located)
