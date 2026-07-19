---
id: HIM-V1-C09-S03-T001
slug: completeness-measurement
title: 완전성(측정 지표 관점)
title_en: Completeness — Measurement Perspective
volume: 1
chapter: 9
section: 3
order: 1
status: drafting
difficulty: intermediate
importance: B
exam_frequency: unknown
estimated_minutes: 6
prerequisites:
  - HIM-V1-C01-S14-T001
related_topics:
  - HIM-V1-C09-S13-T001
tags:
  - 데이터품질
  - 완전성
content_type:
  - concept
  - formula
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-TEXTBOOK-DATA-QUALITY-001
assets: []
questions:
  - Q-HIM-000240
---

# 완전성(측정 지표 관점)

## 학습목표

1. 완전성의 개념은 [정확성·완전성·적시성](../chapter-01/s14-accuracy-completeness-timeliness.md)을 참고하고, 이 Topic은 완전성을 수치화하는 방법을 다룬다.

## 한 문장 정의

완전성 측정은 필수 항목 중 실제로 값이 채워진 항목의 비율(완전성률)로 수치화할 수 있다.

## 왜 중요한가

완전성률을 추적하면 어떤 항목이 반복적으로 누락되는지 파악해 개선 우선순위를 정할 수 있다.

## 선수 개념

- [정확성·완전성·적시성](../chapter-01/s14-accuracy-completeness-timeliness.md)

## 핵심 개념

- 완전성률 = (값이 채워진 필수 항목 수 ÷ 전체 필수 항목 수) × 100
- 항목별 완전성 추적: 전체 평균뿐 아니라 항목별로 나누어 확인(예: 알레르기 항목만 유독 낮은 경우)

## 상세 설명

전체 평균 완전성률이 높아도 특정 항목(예: 흡연력)만 유독 낮은 경우가 있다. 항목별로 나누어 추적해야 이런 문제를 발견할 수 있다.

## 비교표 또는 흐름

| 요소 | 내용 |
|---|---|
| 분자 | 값이 채워진 필수 항목 수 |
| 분모 | 전체 필수 항목 수 |
| 세분화 | 항목별로 나누어 추적 필요 |

## 실무 사례

한 병원에서 전체 완전성률은 95%로 양호했지만, 흡연력 항목만 완전성률이 60%로 낮다는 것을 항목별 분석을 통해 발견하고 개선한 사례가 있다.

## 국가시험 포인트

- 완전성률의 분자·분모 구성과 항목별 세분화의 필요성을 확인하는 문제

## 자주 하는 실수

- 전체 평균 완전성률만 보고 특정 항목의 문제를 놓치는 것

## 관련 법령·표준

이 Topic은 데이터 품질 관리 방법론으로 특정 법령에 근거하지 않는다.

## AI Note

해당 없음.

## 핵심 요약

- 완전성은 완전성률(채워진 항목 수÷전체 필수 항목 수)로 수치화한다.
- 전체 평균뿐 아니라 항목별로 나누어 추적해야 한다.

## 플래시카드

1. Q. 완전성률만 전체 평균으로 보면 놓칠 수 있는 것은? / A. 특정 항목만 유독 낮은 경우

## 연습문제

- Q-HIM-000240 (OX)

## 참고문헌

- REF-TEXTBOOK-DATA-QUALITY-001 — 보건의료정보 품질 특성 개괄 (status: located)
