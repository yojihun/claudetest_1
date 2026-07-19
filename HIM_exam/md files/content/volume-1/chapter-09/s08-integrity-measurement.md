---
id: HIM-V1-C09-S08-T001
slug: integrity-measurement
title: 무결성(측정 지표 관점)
title_en: Integrity — Measurement Perspective
volume: 1
chapter: 9
section: 8
order: 1
status: drafting
difficulty: intermediate
importance: B
exam_frequency: unknown
estimated_minutes: 6
prerequisites:
  - HIM-V1-C01-S15-T001
related_topics:
  - HIM-V1-C07-S15-T001
tags:
  - 데이터품질
  - 무결성
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-TEXTBOOK-DATA-QUALITY-001
assets: []
questions:
  - Q-HIM-000247
---

# 무결성(측정 지표 관점)

## 학습목표

1. 무결성의 개념은 [일관성·신뢰성·무결성](../chapter-01/s15-consistency-reliability-integrity.md)을 참고하고, 이 Topic은 무결성을 어떻게 감시·측정하는지를 다룬다.

## 한 문장 정의

무결성 측정은 [감사로그](../chapter-07/s15-audit-logs.md) 분석을 통해 비정상적인 접근·수정 건수를 추적하는 방식으로 이루어진다.

## 왜 중요한가

무결성은 정확성처럼 표본 대조로 측정하기보다, 접근·변경 이력을 지속적으로 감시하는 방식으로 관리된다는 점에서 다른 차원과 측정 방법이 다르다.

## 선수 개념

- [일관성·신뢰성·무결성](../chapter-01/s15-consistency-reliability-integrity.md)

## 핵심 개념

- 비정상 변경 건수: 업무 시간 외 대량 수정, 권한 없는 접근 등 이상 패턴 건수
- 변경이력 완전성: 모든 수정이 이력에 기록되고 있는지 확인
- 로그 자체의 무결성: 로그가 조작되지 않았는지 별도 확인

## 상세 설명

무결성은 "얼마나 정확한가"가 아니라 "허가되지 않은 변경이 있었는가"를 확인하는 차원이므로, [감사로그](../chapter-07/s15-audit-logs.md)를 정기적으로 분석해 비정상 패턴(예: 동일 계정의 심야 대량 접근)을 탐지하는 방식으로 측정한다.

## 비교표 또는 흐름

| 측정 대상 | 확인 방법 |
|---|---|
| 비정상 변경 건수 | 감사로그 분석 |
| 로그 자체의 무결성 | 로그 조작 여부 별도 점검 |

## 실무 사례

한 병원의 정기 로그 분석에서 특정 계정이 심야 시간에 다수의 기록을 수정한 비정상 패턴이 발견되어 조사가 이루어진 사례가 있다.

## 국가시험 포인트

- 무결성 측정이 감사로그 분석을 통해 이루어진다는 점을 확인하는 문제

## 자주 하는 실수

- 무결성을 정확성처럼 표본 대조 방식으로 측정하려는 것

## 관련 법령·표준

이 Topic은 데이터 품질 관리 방법론으로 특정 법령에 근거하지 않는다.

## AI Note

AI 기반 이상 탐지 도구가 로그 분석을 보조할 수 있으나 최종 조사는 사람이 수행한다.

## 핵심 요약

- 무결성은 감사로그 분석을 통한 비정상 접근·수정 탐지로 측정한다.
- 로그 자체의 무결성도 별도로 확인해야 한다.

## 플래시카드

1. Q. 무결성을 측정하는 대표적 방법은? / A. 감사로그 분석을 통한 비정상 패턴 탐지

## 연습문제

- Q-HIM-000247 (OX)

## 참고문헌

- REF-TEXTBOOK-DATA-QUALITY-001 — 보건의료정보 품질 특성 개괄 (status: located)
