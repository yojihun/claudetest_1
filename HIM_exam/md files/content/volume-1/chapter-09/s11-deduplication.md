---
id: HIM-V1-C09-S11-T001
slug: deduplication
title: 중복 제거
title_en: Deduplication
volume: 1
chapter: 9
section: 11
order: 1
status: drafting
difficulty: advanced
importance: A
exam_frequency: unknown
estimated_minutes: 8
prerequisites:
  - HIM-V1-C09-S06-T001
  - HIM-V1-C09-S10-T001
related_topics:
  - HIM-V1-C06-S05-T001
tags:
  - 데이터품질
  - 중복제거
content_type:
  - concept
  - process
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-TEXTBOOK-DATA-QUALITY-001
assets: []
questions:
  - Q-HIM-000252
  - Q-HIM-000253
---

# 중복 제거

## 학습목표

1. 정확 매칭과 유사 매칭(fuzzy matching)의 차이를 설명할 수 있다.
2. 중복 제거 과정에서 발생할 수 있는 두 가지 오류 유형(과다 병합·과소 병합)을 설명할 수 있다.

## 한 문장 정의

중복 제거는 [유일성](s06-uniqueness.md)이 훼손된 레코드를 찾아 하나로 통합하거나 삭제하는 기술적 절차이다.

## 왜 중요한가

[중복환자와 기록 병합](../chapter-06/s05-duplicate-patients-and-record-merging.md)에서 다룬 병합 절차의 기술적 기반이 되는 방법론이다.

## 선수 개념

- [유일성](s06-uniqueness.md)
- [오류 탐지](s10-error-detection.md)

## 핵심 개념

- 정확 매칭(Exact Matching): 모든 필드가 완전히 동일한 경우만 중복으로 판단
- 유사 매칭(Fuzzy Matching): 오탈자, 표기 차이 등을 고려해 유사도 점수로 중복 후보를 판단
- 과다 병합(False Positive): 실제로는 다른 사람인데 같은 사람으로 잘못 병합
- 과소 병합(False Negative): 실제로는 같은 사람인데 다른 사람으로 남겨둠

## 상세 설명

정확 매칭은 오류 위험이 낮지만 오탈자가 있는 중복을 놓치기 쉽다(과소 병합 위험). 유사 매칭은 더 많은 중복 후보를 찾아내지만, 임계값을 너무 느슨하게 설정하면 실제로는 다른 사람을 같은 사람으로 병합하는 과다 병합 위험이 커진다. [중복환자와 기록 병합](../chapter-06/s05-duplicate-patients-and-record-merging.md)에서 다룬 것처럼, 과다 병합은 특히 심각한 안전 문제로 이어질 수 있어 유사 매칭 결과는 반드시 사람이 최종 확인해야 한다.

## 비교표 또는 흐름

| 방식 | 특징 | 주요 위험 |
|---|---|---|
| 정확 매칭 | 완전 일치만 인정 | 과소 병합(중복 놓침) |
| 유사 매칭 | 유사도 점수로 후보 판단 | 과다 병합(다른 사람을 병합) |

## 실무 사례

한 병원에서 유사 매칭 알고리즘의 임계값을 너무 낮게 설정해, 실제로는 다른 사람인 두 환자가 자동으로 병합될 뻔했으나 최종 확인 단계에서 발견되어 병합이 취소된 사례가 있다.

## 국가시험 포인트

- 과다 병합과 과소 병합의 차이와 각각의 위험을 확인하는 문제

## 자주 하는 실수

- 유사 매칭 알고리즘의 결과를 자동으로 신뢰하고 사람의 최종 확인을 생략하는 것

## 관련 법령·표준

이 Topic은 데이터 품질 관리 방법론으로 특정 법령에 근거하지 않는다.

## AI Note

AI 기반 레코드 링키지 알고리즘이 유사 매칭을 정교화할 수 있으나, 최종 병합 승인은 사람이 담당해야 한다.

## 핵심 요약

- 중복 제거는 정확 매칭과 유사 매칭으로 이루어진다.
- 과다 병합(다른 사람을 병합)은 과소 병합보다 더 심각한 안전 위험을 가질 수 있다.

## 플래시카드

1. Q. 실제로는 다른 사람인데 같은 사람으로 잘못 병합하는 오류는? / A. 과다 병합(False Positive)

## 연습문제

- Q-HIM-000252 (객관식)
- Q-HIM-000253 (OX)

## 참고문헌

- REF-TEXTBOOK-DATA-QUALITY-001 — 보건의료정보 품질 특성 개괄 (status: located)
