---
id: HIM-V1-C09-S05-T001
slug: consistency-measurement
title: 일관성(측정 지표 관점)
title_en: Consistency — Measurement Perspective
volume: 1
chapter: 9
section: 5
order: 1
status: drafting
difficulty: intermediate
importance: B
exam_frequency: unknown
estimated_minutes: 6
prerequisites:
  - HIM-V1-C01-S15-T001
related_topics:
  - HIM-V1-C09-S12-T001
tags:
  - 데이터품질
  - 일관성
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
  - Q-HIM-000242
---

# 일관성(측정 지표 관점)

## 학습목표

1. 일관성의 개념은 [일관성·신뢰성·무결성](../chapter-01/s15-consistency-reliability-integrity.md)을 참고하고, 이 Topic은 일관성을 수치화하는 방법을 다룬다.

## 한 문장 정의

일관성 측정은 동일 항목이 서로 다른 시스템·기록에서 일치하는 비율(일관성률)로 수치화할 수 있다.

## 왜 중요한가

여러 시스템이 연동된 병원 환경에서는 같은 정보(체중, 알레르기 등)가 시스템마다 다르게 저장될 위험이 상존한다.

## 선수 개념

- [일관성·신뢰성·무결성](../chapter-01/s15-consistency-reliability-integrity.md)

## 핵심 개념

- 일관성률 = (여러 시스템 간 값이 일치하는 항목 수 ÷ 비교 대상 전체 항목 수) × 100
- 비교 대상 선정: 특히 안전과 직결되는 항목(알레르기, 진단명 등)을 우선 비교
- 자동 비교 도구: 시스템 간 값을 자동으로 대조해 불일치를 탐지하는 도구 활용 가능

## 상세 설명

일관성률은 특정 항목(예: 알레르기 정보)이 EMR, 처방시스템, 간호기록 등 여러 곳에 각각 저장되어 있을 때, 이 값들이 서로 일치하는지를 확인해 계산한다. 불일치가 발견되면 [데이터 거버넌스](../chapter-03/s11-data-governance-duties.md)에서 다룬 것처럼 어느 시스템의 값을 기준으로 삼을지 규칙을 정해야 한다.

## 비교표 또는 흐름

| 요소 | 내용 |
|---|---|
| 분자 | 시스템 간 값이 일치하는 항목 수 |
| 분모 | 비교 대상 전체 항목 수 |
| 우선순위 | 안전 직결 항목(알레르기 등) 우선 비교 |

## 실무 사례

한 병원에서 EMR과 처방시스템의 알레르기 정보를 자동 비교한 결과 일부 불일치가 발견되어, 어느 시스템을 기준 정보로 삼을지 규칙을 정하고 나머지 시스템을 동기화한 사례가 있다.

## 국가시험 포인트

- 일관성률의 측정 방식과 우선 비교 대상 선정 기준을 확인하는 문제

## 자주 하는 실수

- 모든 항목을 동일한 우선순위로 비교하려다 정작 안전 직결 항목의 불일치를 늦게 발견하는 것

## 관련 법령·표준

이 Topic은 데이터 품질 관리 방법론으로 특정 법령에 근거하지 않는다.

## AI Note

해당 없음.

## 핵심 요약

- 일관성은 시스템 간 값 일치 비율(일관성률)로 측정한다.
- 안전과 직결되는 항목을 우선적으로 비교·관리해야 한다.

## 플래시카드

1. Q. 일관성 비교에서 우선순위를 두어야 할 항목은? / A. 알레르기, 진단명 등 안전 직결 항목

## 연습문제

- Q-HIM-000242 (OX)

## 참고문헌

- REF-TEXTBOOK-DATA-QUALITY-001 — 보건의료정보 품질 특성 개괄 (status: located)
