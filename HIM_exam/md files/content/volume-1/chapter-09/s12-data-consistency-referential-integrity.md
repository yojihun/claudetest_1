---
id: HIM-V1-C09-S12-T001
slug: data-consistency-referential-integrity
title: 데이터 정합성
title_en: Data Consistency and Referential Integrity
volume: 1
chapter: 9
section: 12
order: 1
status: drafting
difficulty: advanced
importance: A
exam_frequency: unknown
estimated_minutes: 8
prerequisites:
  - HIM-V1-C09-S05-T001
related_topics:
  - HIM-V1-C09-S13-T001
tags:
  - 데이터품질
  - 정합성
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-TEXTBOOK-DATA-QUALITY-001
assets: []
questions:
  - Q-HIM-000254
  - Q-HIM-000255
---

# 데이터 정합성

## 학습목표

1. 데이터 정합성(참조 무결성 포함)과 [일관성](s05-consistency-measurement.md)의 차이를 설명할 수 있다.
2. 정합성이 깨진 사례(고아 레코드 등)를 판단할 수 있다.

## 한 문장 정의

데이터 정합성은 서로 연관된 여러 데이터(예: 처방 기록과 그 처방이 속한 환자 정보) 사이의 논리적 관계가 올바르게 유지되는 성질을 말한다.

## 왜 중요한가

[일관성](s05-consistency-measurement.md)이 "같은 값이 여러 곳에서 같은가"를 다룬다면, 정합성은 "서로 다른 종류의 데이터 간 관계가 맞는가"를 다룬다는 점에서 구분되는 문제다.

## 선수 개념

- [일관성(측정 지표 관점)](s05-consistency-measurement.md)

## 핵심 개념

- 참조 무결성: 처방 기록이 존재하려면 그 처방이 속한 환자 레코드도 반드시 존재해야 함
- 고아 레코드(Orphan Record): 참조해야 할 상위 레코드가 없는 상태로 남은 레코드(예: 삭제된 환자의 처방 기록이 남아있는 경우)
- 정합성 점검: 두 테이블·시스템 간 참조 관계가 실제로 유지되고 있는지 정기 점검

## 상세 설명

예를 들어 환자 레코드가 삭제되었는데 그 환자의 처방 기록이 시스템에 그대로 남아있다면, 이 처방 기록은 "고아 레코드"가 되어 어느 환자의 것인지 알 수 없게 된다. 이는 [일관성](s05-consistency-measurement.md)(같은 값의 일치 여부)과는 다른 문제로, "관계 자체가 끊어졌는가"를 다룬다.

## 비교표 또는 흐름

| 구분 | 일관성 | 정합성 |
|---|---|---|
| 핵심 질문 | 같은 값이 여러 곳에서 일치하는가 | 서로 다른 데이터 간 관계가 유지되는가 |
| 훼손 사례 | 같은 항목이 시스템마다 다른 값 | 처방 기록의 환자 레코드가 존재하지 않음(고아 레코드) |

## 실무 사례

한 병원에서 환자 삭제 절차 오류로 일부 처방 기록이 존재하지 않는 환자를 참조하는 고아 레코드로 남아, 통계 집계 시 원인 불명의 오류가 발생한 사례가 있다.

## 국가시험 포인트

- 정합성과 일관성의 차이를 사례로 구분하는 문제
- 고아 레코드 개념을 확인하는 문제

## 자주 하는 실수

- 정합성 문제를 단순 일관성 문제로 혼동하는 것

## 관련 법령·표준

이 Topic은 데이터 품질 관리 방법론으로 특정 법령에 근거하지 않는다.

## AI Note

시스템 설계 시 참조 무결성 제약을 데이터베이스 차원에서 강제할 수 있으나, 기존 시스템의 정합성 점검은 별도 감사가 필요하다.

## 핵심 요약

- 데이터 정합성은 서로 다른 데이터 간 논리적 관계가 유지되는지를 다룬다.
- 고아 레코드는 정합성이 깨진 대표적 사례다.

## 플래시카드

1. Q. 삭제된 환자를 참조하는 처방 기록처럼 상위 레코드가 없는 상태를 무엇이라 하는가? / A. 고아 레코드(Orphan Record)

## 연습문제

- Q-HIM-000254 (객관식)
- Q-HIM-000255 (OX)

## 참고문헌

- REF-TEXTBOOK-DATA-QUALITY-001 — 보건의료정보 품질 특성 개괄 (status: located)
