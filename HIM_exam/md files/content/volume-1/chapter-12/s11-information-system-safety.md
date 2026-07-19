---
id: HIM-V1-C12-S11-T001
slug: information-system-safety
title: 정보시스템 안전
title_en: Information System Safety
volume: 1
chapter: 12
section: 11
order: 1
status: drafting
difficulty: intermediate
importance: A
exam_frequency: unknown
estimated_minutes: 7
prerequisites:
  - HIM-V1-C12-S10-T001
related_topics:
  - HIM-V1-C07-S16-T001
tags:
  - 환자안전
  - 정보시스템안전
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-TEXTBOOK-PATIENT-SAFETY-001
assets: []
questions:
  - Q-HIM-000315
---

# 정보시스템 안전

## 학습목표

1. 정보시스템 자체의 결함이 환자안전 위험이 될 수 있는 사례를 설명할 수 있다.

## 한 문장 정의

정보시스템 안전은 [장애와 비상운영](../chapter-07/s16-system-outages-and-contingency-operations.md)에서 다룬 시스템 장애뿐 아니라, 시스템의 설계 결함(잘못된 경고 로직, 화면 구성 오류 등) 자체가 환자안전 위험이 될 수 있음을 다루는 개념이다.

## 왜 중요한가

의료진의 실수만이 아니라 "시스템 자체의 결함"도 환자안전 사고의 원인이 될 수 있다는 것을 이해해야, [근본원인분석](../chapter-11/s06-root-cause-analysis.md) 시 시스템 자체를 점검 대상에서 빠뜨리지 않는다.

## 선수 개념

- [기록 오류와 환자안전](s10-documentation-errors-and-patient-safety.md)

## 핵심 개념

- 경고 로직 결함: [CPOE](../chapter-07/s11-cpoe.md)의 경고 규칙이 잘못 설계되어 중요한 경고를 놓치는 경우
- 화면 구성 오류(UI 문제): 유사한 두 환자·약물이 화면상 혼동되기 쉽게 배치된 경우
- 시스템 장애: [장애와 비상운영](../chapter-07/s16-system-outages-and-contingency-operations.md)에서 다룬 다운타임 위험

## 상세 설명

예를 들어 EMR 화면에서 같은 성을 가진 두 환자의 이름이 나란히 표시되어 담당자가 혼동할 위험이 있다면, 이는 사람의 실수가 아니라 시스템 설계의 문제다. 이런 위험은 [FMEA](../chapter-11/s07-fmea.md)를 통해 시스템 도입 전에 미리 점검하는 것이 이상적이다.

## 비교표 또는 흐름

| 유형 | 예시 |
|---|---|
| 경고 로직 결함 | 중요한 상호작용을 걸러내지 못하는 규칙 오류 |
| 화면 구성 오류 | 유사한 환자·약물이 혼동되기 쉬운 배치 |
| 시스템 장애 | 다운타임으로 인한 정보 접근 불가 |

## 실무 사례

한 병원에서 EMR 화면에 유사한 이름의 두 약물이 나란히 표시되어 조제 오류가 발생할 뻔했으나, 이후 화면 구성을 개선해 혼동 위험을 줄인 사례가 있다.

## 국가시험 포인트

- 정보시스템 자체의 결함이 환자안전 위험이 될 수 있다는 점을 확인하는 문제

## 자주 하는 실수

- 환자안전 사고의 원인을 항상 사람의 실수로만 찾고 시스템 설계 문제를 배제하는 것

## 관련 법령·표준

이 Topic은 환자안전 개념으로 특정 법령에 근거하지 않는다.

## AI Note

AI 기반 UI 개선 도구가 혼동 위험이 있는 화면 요소를 자동으로 탐지하는 데 활용될 수 있으나, 최종 설계 검증은 사람이 담당한다.

## 핵심 요약

- 정보시스템의 설계 결함(경고 로직, 화면 구성 등) 자체가 환자안전 위험이 될 수 있다.
- 시스템 도입 전 FMEA를 통한 사전 점검이 권장된다.

## 플래시카드

1. Q. 유사한 두 환자·약물이 화면상 혼동되기 쉽게 배치된 문제의 유형은? / A. 화면 구성 오류(UI 문제)

## 연습문제

- Q-HIM-000315 (OX)

## 참고문헌

- REF-TEXTBOOK-PATIENT-SAFETY-001 — 환자안전 개념 개괄 (status: located)
