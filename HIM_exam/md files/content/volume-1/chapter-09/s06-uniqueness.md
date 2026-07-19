---
id: HIM-V1-C09-S06-T001
slug: uniqueness
title: 유일성
title_en: Uniqueness
volume: 1
chapter: 9
section: 6
order: 1
status: drafting
difficulty: intermediate
importance: A
exam_frequency: unknown
estimated_minutes: 8
prerequisites:
  - HIM-V1-C09-S01-T001
related_topics:
  - HIM-V1-C06-S05-T001
tags:
  - 데이터품질
  - 유일성
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-TEXTBOOK-DATA-QUALITY-001
assets: []
questions:
  - Q-HIM-000243
  - Q-HIM-000244
---

# 유일성

## 학습목표

1. 유일성(Uniqueness)의 정의와 [중복환자와 기록 병합](../chapter-06/s05-duplicate-patients-and-record-merging.md)과의 관계를 설명할 수 있다.
2. 유일성 훼손이 다른 품질 차원에 미치는 영향을 설명할 수 있다.

## 한 문장 정의

유일성은 동일한 실체(환자, 검사 항목 등)가 데이터베이스에 단 하나의 레코드로만 존재해야 한다는 품질 차원이다.

## 왜 중요한가

[중복환자와 기록 병합](../chapter-06/s05-duplicate-patients-and-record-merging.md)에서 다룬 중복환자 문제는 유일성이 훼손된 대표적 사례다. 유일성이 깨지면 통계·분석 결과가 실제보다 부풀려지거나 왜곡될 수 있다.

## 선수 개념

- [데이터 품질의 정의](s01-definition-of-data-quality.md)

## 핵심 개념

- 유일성 정의: 하나의 실체는 하나의 레코드로만 존재해야 함
- 중복의 유형: 완전 중복(동일 정보로 두 번 등록), 부분 중복(오탈자 등으로 인한 유사 중복)
- 유일성 지표: 중복률(전체 레코드 중 중복으로 판명된 레코드의 비율)

## 상세 설명

유일성이 훼손되면 단순히 "레코드가 두 개 있다"는 문제로 끝나지 않는다. 예를 들어 같은 환자가 두 번호로 등록되어 있으면, 그 환자의 통계는 두 명으로 잘못 집계되고, 진료 이력도 흩어져 [정보 흐름](../chapter-04/s12-information-flow-in-hospitals.md)이 끊긴다. 유일성은 다른 품질 차원(완전성, 일관성)의 기반이 되는 차원으로 볼 수 있다.

## 비교표 또는 흐름

| 유형 | 예시 |
|---|---|
| 완전 중복 | 같은 환자가 동일 정보로 두 번 등록 |
| 부분 중복 | 오탈자로 인해 유사하지만 다른 값으로 등록 |

## 실무 사례

한 병원의 환자 데이터베이스에서 유일성 점검을 실시한 결과 예상보다 높은 중복률이 발견되어, [Master Patient Index](../chapter-06/s04-master-patient-index.md) 관리 절차를 강화한 사례가 있다.

## 국가시험 포인트

- 유일성 훼손이 통계·분석에 미치는 영향을 확인하는 문제

## 자주 하는 실수

- 유일성 문제를 단순 데이터 정리 문제로만 여기고 통계 왜곡 등 후속 영향을 놓치는 것

## 관련 법령·표준

이 Topic은 데이터 품질 관리 방법론으로 특정 법령에 근거하지 않는다.

## AI Note

레코드 링키지 알고리즘이 잠재적 중복을 자동 탐지하는 데 활용될 수 있으나, 최종 병합 여부는 사람이 검증해야 한다([중복환자와 기록 병합](../chapter-06/s05-duplicate-patients-and-record-merging.md) 참고).

## 핵심 요약

- 유일성은 하나의 실체가 하나의 레코드로만 존재해야 한다는 원칙이다.
- 유일성 훼손은 통계 왜곡, 진료 연속성 단절 등 광범위한 영향을 준다.

## 플래시카드

1. Q. 유일성이 훼손된 대표적 사례는? / A. 중복환자 등록

## 연습문제

- Q-HIM-000243 (객관식)
- Q-HIM-000244 (OX)

## 참고문헌

- REF-TEXTBOOK-DATA-QUALITY-001 — 보건의료정보 품질 특성 개괄 (status: located)
