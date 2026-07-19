---
id: HIM-V1-C08-S01-T001
slug: need-for-standardization
title: 표준화의 필요성
title_en: The Need for Standardization
volume: 1
chapter: 8
section: 1
order: 1
status: drafting
difficulty: basic
importance: A
exam_frequency: unknown
estimated_minutes: 7
prerequisites:
  - HIM-V1-C03-S10-T001
related_topics:
  - HIM-V1-C08-S02-T001
tags:
  - 의료정보표준
  - 표준화
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-ONC-EMR-EHR-PHR-001
assets: []
questions:
  - Q-HIM-000214
  - Q-HIM-000215
---

# 표준화의 필요성

## 학습목표

1. 의료정보 표준화가 필요한 이유를 설명할 수 있다.
2. 표준화가 없을 때 발생하는 문제를 사례로 설명할 수 있다.

## 한 문장 정의

의료정보 표준화는 서로 다른 시스템·기관이 같은 개념을 같은 방식으로 표현하도록 합의해, 정보가 의미 있게 교환되도록 하는 작업이다.

## 왜 중요한가

이는 [의료정보 표준화](../chapter-03/s10-standardization-duties.md)에서 다룬 직무의 이론적 배경이다. 표준이 왜 필요한지 알아야 이후 배울 개별 표준(HL7, FHIR 등)의 의미를 이해할 수 있다.

## 선수 개념

- [의료정보 표준화](../chapter-03/s10-standardization-duties.md)

## 핵심 개념

- 표준 없는 상황의 문제: 같은 개념(예: 혈액형)을 시스템마다 다른 코드로 저장
- 표준의 효과: 시스템 간 자동 교환·비교·통계 집계 가능
- 표준의 범위: 데이터 형식뿐 아니라 용어의 의미까지 일치시켜야 함(다음 Topic에서 다룸)

## 상세 설명

표준이 없으면 [EHR](../chapter-07/s03-ehr-health-information-exchange.md)에서 다룬 기관 간 정보 교환이 사실상 불가능하다. 예를 들어 병원 A가 "고혈압"을 코드 001로, 병원 B가 "HTN"으로 저장한다면, 두 시스템은 서로의 데이터를 자동으로 이해할 수 없다. 표준은 이런 "같은 것을 다르게 부르는" 문제를 해결하는 공통 언어 역할을 한다.

## 비교표 또는 흐름

| 상황 | 결과 |
|---|---|
| 표준 없음 | 시스템마다 다른 표현, 자동 교환 불가 |
| 표준 있음 | 공통 형식으로 자동 교환·비교 가능 |

## 실무 사례

두 병원이 전원 시스템을 연동하려 했으나, 진단명 표현 방식이 서로 달라 자동 연동이 실패하고 결국 수작업으로 정보를 옮겨야 했던 사례가 있다. 표준화된 코드 체계를 사용했다면 이런 문제를 피할 수 있었을 것이다.

## 국가시험 포인트

- 표준화가 없을 때 발생하는 문제를 사례에서 판단하는 문제

## 자주 하는 실수

- 표준화를 단순 "형식 통일"로만 이해하고 의미의 일치까지 필요하다는 점을 놓치는 것

## 관련 법령·표준

이 Topic은 표준화 개념의 총론으로 개별 표준은 이후 Topic에서 다룬다.

## AI Note

해당 없음.

## 핵심 요약

- 표준화는 서로 다른 시스템이 같은 개념을 같은 방식으로 표현하게 하는 작업이다.
- 표준이 없으면 EHR 수준의 기관 간 정보 교환이 사실상 불가능하다.

## 플래시카드

1. Q. 표준화가 없을 때 생기는 대표적 문제는? / A. 같은 개념이 시스템마다 다르게 표현되어 자동 교환이 불가능해짐

## 연습문제

- Q-HIM-000214 (OX)
- Q-HIM-000215 (OX)

## 참고문헌

- REF-ONC-EMR-EHR-PHR-001 — EMR/EHR/PHR 구분 자료 (status: located)
