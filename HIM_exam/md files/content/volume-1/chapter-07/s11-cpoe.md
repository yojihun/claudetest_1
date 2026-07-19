---
id: HIM-V1-C07-S11-T001
slug: cpoe
title: CPOE
title_en: Computerized Physician Order Entry (CPOE)
volume: 1
chapter: 7
section: 11
order: 1
status: drafting
difficulty: intermediate
importance: A
exam_frequency: unknown
estimated_minutes: 8
prerequisites:
  - HIM-V1-C07-S05-T001
related_topics:
  - HIM-V1-C07-S12-T001
tags:
  - 의료정보시스템
  - CPOE
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-AHIMA-HIM-001
assets: []
questions:
  - Q-HIM-000201
  - Q-HIM-000202
---

# CPOE

## 학습목표

1. CPOE가 [OCS](s05-ocs.md)보다 발전된 점을 설명할 수 있다.
2. CPOE의 대표적 안전 기능을 나열할 수 있다.

## 한 문장 정의

컴퓨터 처방 입력 시스템(Computerized Physician Order Entry, CPOE)은 의사가 직접 처방을 입력하면서 약물 상호작용, 알레르기, 중복 처방 등을 실시간으로 경고받는 시스템이다.

## 왜 중요한가

CPOE는 [투약안전](../chapter-12/s06-medication-safety.md)과 직접 연결되는 대표적 환자안전 기술이다. [OCS](s05-ocs.md)가 단순 전달이라면, CPOE는 여기에 안전 검증 기능을 더한다.

## 선수 개념

- [OCS](s05-ocs.md)

## 핵심 개념

- 실시간 경고: 약물 상호작용, 알레르기, 중복 처방 발생 시 경고 표시
- 표준 용량 제안: 일반적인 처방 용량 범위를 벗어나면 알림
- 의사가 직접 입력: 중간 전달자(간호사 등)를 거치지 않고 처방자가 직접 입력해 전달 오류 감소

## 상세 설명

CPOE의 핵심은 "의사가 직접 입력"한다는 점과 "실시간 검증"이 함께 이루어진다는 점이다. 예를 들어 이미 처방된 약물과 상호작용이 있는 약물을 입력하면 시스템이 즉시 경고를 표시한다. 다만 이런 경고가 너무 자주 뜨면 의료진이 경고를 습관적으로 무시하는 "경고 피로(alert fatigue)" 현상이 나타날 수 있어, 경고의 정밀도를 관리하는 것도 중요한 과제다.

## 비교표 또는 흐름

| 구분 | OCS | CPOE |
|---|---|---|
| 핵심 기능 | 처방 전달 | 처방 전달 + 실시간 안전 검증 |
| 위험 | 전달 오류 | 경고 피로로 인한 경고 무시 |

## 실무 사례

한 병원에서 CPOE의 경고가 지나치게 자주 발생해 의료진이 습관적으로 경고를 무시하게 되었고, 실제로 중요한 상호작용 경고까지 놓친 사례가 있다. 이는 경고 피로 문제를 관리해야 하는 이유를 보여준다.

## 국가시험 포인트

- CPOE와 OCS의 차이(안전 검증 기능 유무)를 확인하는 문제
- 경고 피로 개념을 이해했는지 확인하는 문제

## 자주 하는 실수

- CPOE의 경고 기능이 있으면 모든 처방 오류가 자동으로 방지된다고 오해하는 것(경고 피로로 무시될 수 있음)

## 관련 법령·표준

이 Topic은 시스템 개념으로 특정 법령에 근거하지 않는다.

## AI Note

AI가 경고의 정밀도를 높여 불필요한 경고를 줄이는 데 활용될 수 있으나, 중요한 경고까지 놓치지 않도록 균형을 맞추는 것이 과제로 남아 있다.

## 핵심 요약

- CPOE는 처방 입력 시 실시간으로 약물 상호작용 등을 검증하는 시스템이다.
- 경고가 지나치게 많으면 경고 피로로 무시될 위험이 있다.

## 플래시카드

1. Q. 경고가 너무 잦아 의료진이 습관적으로 무시하게 되는 현상은? / A. 경고 피로(alert fatigue)

## 연습문제

- Q-HIM-000201 (객관식)
- Q-HIM-000202 (OX)

## 참고문헌

- REF-AHIMA-HIM-001 — AHIMA의 HIM 정의 (status: located)
