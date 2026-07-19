---
id: HIM-V1-C09-S01-T001
slug: definition-of-data-quality
title: 데이터 품질의 정의
title_en: Formal Definition of Data Quality
volume: 1
chapter: 9
section: 1
order: 1
status: drafting
difficulty: intermediate
importance: A
exam_frequency: unknown
estimated_minutes: 8
prerequisites:
  - HIM-V1-C01-S13-T001
related_topics:
  - HIM-V1-C09-S13-T001
tags:
  - 데이터품질
  - 정의
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-TEXTBOOK-DATA-QUALITY-001
assets: []
questions:
  - Q-HIM-000237
  - Q-HIM-000238
---

# 데이터 품질의 정의

## 학습목표

1. 데이터 품질을 "목적 적합성(fitness for use)" 관점에서 정의할 수 있다.
2. [보건의료정보의 특성](../chapter-01/s13-characteristics-of-health-information.md)에서 다룬 여섯 특성을 데이터 품질 관리의 여덟 차원으로 확장할 수 있다.

## 한 문장 정의

데이터 품질은 데이터가 특정 목적(진료, 청구, 통계, 연구 등)에 얼마나 적합하게 사용될 수 있는지를 나타내는 성질이다.

## 왜 중요한가

"품질이 좋다"는 절대적 기준이 아니라 목적에 따라 달라진다는 것을 이해해야, [Chapter 1](../chapter-01/s13-characteristics-of-health-information.md)에서 다룬 특성들을 실제 관리 활동에 연결할 수 있다.

## 선수 개념

- [보건의료정보의 특성](../chapter-01/s13-characteristics-of-health-information.md)

## 핵심 개념

- 목적 적합성(fitness for use): 품질은 목적과 분리해서 판단할 수 없음
- 여덟 차원: [Chapter 1](../chapter-01/s13-characteristics-of-health-information.md)의 여섯 특성(정확성·완전성·적시성·일관성·신뢰성·무결성)에 이 Chapter에서 새로 다루는 유일성(Uniqueness)과 유효성(Validity)을 더한 여덟 가지로 확장

## 상세 설명

같은 데이터라도 목적에 따라 "품질이 충분한지"의 기준이 달라진다. 예를 들어 대략적인 병원 통계 보고서에는 소수점 한 자리까지의 정확도로 충분할 수 있지만, 개별 환자의 투약 용량 계산에는 훨씬 높은 정확도가 필요하다. 이 Chapter는 [Chapter 1](../chapter-01/s13-characteristics-of-health-information.md)에서 소개한 여섯 차원에 유일성·유효성을 더해 총 여덟 차원으로 데이터 품질을 체계적으로 관리하는 방법을 다룬다.

## 비교표 또는 흐름

| 차원 | Chapter 1에서 다룬 여부 |
|---|---|
| 정확성·완전성·적시성 | 다룸(개념 수준) |
| 일관성·신뢰성·무결성 | 다룸(개념 수준) |
| 유일성(Uniqueness) | 이 Chapter에서 신규 |
| 유효성(Validity) | 이 Chapter에서 신규 |

## 실무 사례

한 병원의 통계 보고서는 개략적인 수치로도 충분했지만, 같은 데이터를 연구 목적으로 재사용하려 하자 훨씬 엄격한 정확도가 요구되어 데이터를 재검증해야 했던 사례가 있다. 이는 품질 기준이 목적에 따라 달라진다는 것을 보여준다.

## 국가시험 포인트

- 데이터 품질이 절대적 기준이 아니라 목적에 따라 달라진다는 점을 확인하는 문제
- 데이터 품질의 여덟 차원을 나열하는 문제

## 자주 하는 실수

- 데이터 품질을 하나의 절대적 기준으로 판단하려는 것

## 관련 법령·표준

이 Topic은 데이터 품질 관리 방법론으로 특정 법령에 근거하지 않는다.

## AI Note

AI 모델 학습에 사용되는 데이터는 통계 보고서보다 더 엄격한 품질 기준(대표성, 편향 없음 등)이 요구되는 경우가 많다(이 Chapter의 마지막 Topic에서 다룸).

## 핵심 요약

- 데이터 품질은 목적 적합성 관점에서 정의된다.
- 이 Chapter는 여섯 차원에 유일성·유효성을 더한 여덟 차원으로 품질을 다룬다.

## 플래시카드

1. Q. 데이터 품질을 정의하는 핵심 관점은? / A. 목적 적합성(fitness for use)

## 연습문제

- Q-HIM-000237 (OX)
- Q-HIM-000238 (OX)

## 참고문헌

- REF-TEXTBOOK-DATA-QUALITY-001 — 보건의료정보 품질 특성 개괄 (status: located)
