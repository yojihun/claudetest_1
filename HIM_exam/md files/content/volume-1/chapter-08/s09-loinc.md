---
id: HIM-V1-C08-S09-T001
slug: loinc
title: LOINC
title_en: LOINC
volume: 1
chapter: 8
section: 9
order: 1
status: drafting
difficulty: intermediate
importance: B
exam_frequency: unknown
estimated_minutes: 6
prerequisites:
  - HIM-V1-C08-S08-T001
related_topics:
  - HIM-V1-C08-S10-T001
tags:
  - 의료정보표준
  - LOINC
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-STANDARD-LOINC-001
assets: []
questions:
  - Q-HIM-000227
---

# LOINC

## 학습목표

1. LOINC이 표준화하는 대상과 SNOMED CT와의 차이를 설명할 수 있다.

## 한 문장 정의

LOINC(Logical Observation Identifiers Names and Codes)은 혈액검사, 소변검사, 활력징후 등 검사·관찰 항목의 명칭을 표준화된 코드로 표현하는 표준이다.

## 왜 중요한가

LOINC은 [LIS](../chapter-07/s08-lis.md)에서 생성되는 검사 결과 항목이 시스템 간에 동일하게 인식되도록 하는 핵심 표준이다.

## 선수 개념

- [SNOMED CT](s08-snomed-ct.md)

## 핵심 개념

- 표준화 대상: 검사·관찰 "항목 자체"의 명칭과 코드(예: "공복혈당"이라는 항목명 표준화)
- SNOMED CT와의 차이: SNOMED CT는 임상 개념 전반을, LOINC은 검사·관찰 항목에 특화
- 활용처: 검사 결과 보고, 여러 검사실 간 결과 비교

## 상세 설명

한 병원의 "공복혈당" 검사가 다른 병원에서는 다른 명칭으로 저장되어 있다면, 두 기관의 검사 결과를 자동으로 비교하기 어렵다. LOINC은 이런 검사·관찰 항목에 공통 코드를 부여해, 서로 다른 검사실의 결과라도 같은 항목으로 인식되게 한다.

## 비교표 또는 흐름

| 표준 | 표준화 대상 |
|---|---|
| SNOMED CT | 임상 개념 전반(진단, 소견, 처치 등) |
| LOINC | 검사·관찰 항목의 명칭·코드 |

## 실무 사례

두 병원이 서로 다른 검사 장비를 사용하면서도 LOINC 코드를 함께 기록해, 전원된 환자의 검사 결과를 자동으로 비교할 수 있었던 사례가 있다.

## 국가시험 포인트

- LOINC과 SNOMED CT의 표준화 대상 차이를 구분하는 문제

## 자주 하는 실수

- LOINC을 SNOMED CT와 같은 목적의 표준으로 혼동하는 것

## 관련 법령·표준

이 Topic은 국제 표준 개관으로 특정 법령에 근거하지 않는다.

## AI Note

해당 없음.

## 핵심 요약

- LOINC은 검사·관찰 항목의 명칭·코드를 표준화하는 표준이다.
- 서로 다른 검사실의 결과를 비교 가능하게 하는 데 핵심적이다.

## 플래시카드

1. Q. 검사·관찰 항목의 명칭을 표준화하는 국제 표준은? / A. LOINC

## 연습문제

- Q-HIM-000227 (OX)

## 참고문헌

- REF-STANDARD-LOINC-001 — LOINC 개괄 (status: located)
