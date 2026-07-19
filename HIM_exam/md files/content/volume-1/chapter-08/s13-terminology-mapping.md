---
id: HIM-V1-C08-S13-T001
slug: terminology-mapping
title: 용어 매핑
title_en: Terminology Mapping
volume: 1
chapter: 8
section: 13
order: 1
status: drafting
difficulty: advanced
importance: B
exam_frequency: unknown
estimated_minutes: 8
prerequisites:
  - HIM-V1-C08-S12-T001
related_topics:
  - HIM-V1-C08-S14-T001
tags:
  - 의료정보표준
  - 용어매핑
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-STANDARD-SNOMEDCT-001
assets: []
questions:
  - Q-HIM-000233
---

# 용어 매핑

## 학습목표

1. 용어 매핑이 필요한 이유를 설명할 수 있다.
2. 매핑 시 발생할 수 있는 문제(1:1 대응이 아닌 경우)를 설명할 수 있다.

## 한 문장 정의

용어 매핑은 서로 다른 표준(예: SNOMED CT와 KCD)의 코드를 연결해, 하나의 코드로 입력된 정보를 다른 표준의 코드로도 활용할 수 있게 하는 작업이다.

## 왜 중요한가

이 Chapter에서 다룬 여러 표준(SNOMED CT, ICD/KCD, LOINC 등)은 각자의 목적을 위해 존재하지만, 실제 병원에서는 이들을 서로 연결해야 하는 경우가 많다.

## 선수 개념

- [KCD](s12-kcd.md)

## 핵심 개념

- 매핑 테이블: 한 표준의 코드와 다른 표준의 코드를 연결한 대응표
- 1:1 매핑의 한계: 두 표준의 세밀함 차이로 인해 완벽한 1:1 대응이 안 되는 경우가 많음(예: SNOMED CT의 세밀한 개념이 KCD의 하나의 큰 코드에 여러 개 대응)
- 매핑 검증: 매핑이 실제 임상적으로 타당한지 전문가 검토 필요

## 상세 설명

SNOMED CT처럼 세밀한 표준과 KCD처럼 상대적으로 큰 범주의 표준을 매핑할 때, 하나의 SNOMED CT 코드가 여러 KCD 코드 후보에 걸치거나 그 반대의 상황이 발생할 수 있다. 이런 경우 기계적으로 매핑하면 오류가 생길 수 있어, 매핑 테이블 자체를 전문가가 검증하는 과정이 필요하다.

## 비교표 또는 흐름

| 상황 | 매핑의 어려움 |
|---|---|
| 세밀한 코드 → 큰 범주 코드 | 여러 세밀한 코드가 하나의 큰 코드로 뭉뚱그려질 수 있음 |
| 큰 범주 코드 → 세밀한 코드 | 하나의 큰 코드에 대응하는 세밀한 코드 후보가 여러 개일 수 있음 |

## 실무 사례

한 병원에서 SNOMED CT 기반 임상 기록을 KCD 코드로 자동 매핑했는데, 세부 유형이 다른 두 진단이 같은 KCD 코드로 뭉뚱그려져 통계에 왜곡이 생긴 사례가 있다. 이는 매핑 검증이 왜 필요한지 보여준다.

## 국가시험 포인트

- 용어 매핑에서 1:1 대응이 항상 가능한 것은 아니라는 점을 확인하는 문제

## 자주 하는 실수

- 서로 다른 표준 간 매핑이 항상 정확한 1:1 대응이라고 오해하는 것

## 관련 법령·표준

이 Topic은 표준 관리 실무로 특정 법령에 근거하지 않는다.

## AI Note

AI 기반 자동 매핑 도구가 매핑 후보를 제안할 수 있으나, 임상적 타당성 검증은 전문가의 몫이다.

## 핵심 요약

- 용어 매핑은 서로 다른 표준의 코드를 연결하는 작업이다.
- 세밀함의 차이로 완벽한 1:1 대응이 어려운 경우가 많아 전문가 검증이 필요하다.

## 플래시카드

1. Q. 용어 매핑에서 항상 1:1 대응이 가능한가? / A. 아니다. 표준 간 세밀함 차이로 여러 대응 후보가 생길 수 있다.

## 연습문제

- Q-HIM-000233 (OX)

## 참고문헌

- REF-STANDARD-SNOMEDCT-001 — SNOMED CT 개괄 (status: located)
