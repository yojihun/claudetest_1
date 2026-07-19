---
id: HIM-V1-C08-S05-T001
slug: cda
title: CDA
title_en: Clinical Document Architecture (CDA)
volume: 1
chapter: 8
section: 5
order: 1
status: drafting
difficulty: intermediate
importance: B
exam_frequency: unknown
estimated_minutes: 7
prerequisites:
  - HIM-V1-C08-S04-T001
related_topics:
  - HIM-V1-C08-S06-T001
tags:
  - 의료정보표준
  - CDA
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-STANDARD-HL7-001
assets: []
questions:
  - Q-HIM-000221
---

# CDA

## 학습목표

1. CDA가 HL7 v2와 다른 점(문서 단위 구조화)을 설명할 수 있다.

## 한 문장 정의

CDA(Clinical Document Architecture)는 퇴원요약, 진단서 등 임상 문서 전체를 사람이 읽을 수 있는 형태와 기계가 처리할 수 있는 형태를 함께 담아 구조화하는 HL7 표준이다.

## 왜 중요한가

[HL7 v2](s04-hl7-v2.md)가 개별 이벤트 메시지에 초점을 둔다면, CDA는 "문서 전체"를 표준화된 구조로 다룬다는 점에서 접근 방식이 다르다.

## 선수 개념

- [HL7 v2](s04-hl7-v2.md)

## 핵심 개념

- 문서 단위 구조화: 퇴원요약 등 하나의 완결된 문서를 표준 구조로 표현
- 사람과 기계 모두를 위한 형식: 사람이 읽을 수 있는 부분과 시스템이 자동 처리할 수 있는 부분을 함께 포함
- 활용 예: 진료 의뢰서, 퇴원요약 등 기관 간 전달되는 문서

## 상세 설명

CDA는 [전원과 기록 제공](../chapter-06/s09-transfer-and-record-provision.md)에서 다룬 것처럼, 환자가 다른 기관으로 이동할 때 전달되는 문서(퇴원요약 등)를 표준화된 형식으로 만들어, 받는 쪽 시스템이 사람이 읽을 수 있으면서도 필요한 정보(진단명 등)를 자동으로 추출할 수 있게 한다.

## 비교표 또는 흐름

| 구분 | HL7 v2 | CDA |
|---|---|---|
| 초점 | 개별 이벤트 메시지 | 완결된 문서 전체 |
| 예시 | 검사 결과 통보 메시지 | 퇴원요약 문서 |

## 실무 사례

한 병원이 CDA 형식으로 퇴원요약을 작성해 전원 병원에 전달한 결과, 수신 병원의 시스템이 진단명과 처치 내역을 자동으로 인식해 EMR에 반영할 수 있었던 사례가 있다.

## 국가시험 포인트

- CDA와 HL7 v2의 초점 차이(문서 vs. 메시지)를 구분하는 문제

## 자주 하는 실수

- CDA와 HL7 v2를 같은 목적의 표준으로 혼동하는 것

## 관련 법령·표준

이 Topic은 국제 표준 개관으로 특정 법령에 근거하지 않는다.

## AI Note

해당 없음.

## 핵심 요약

- CDA는 퇴원요약 등 완결된 임상 문서를 표준화된 구조로 표현하는 HL7 표준이다.
- 사람이 읽을 수 있는 형식과 기계가 처리할 수 있는 형식을 함께 담는다.

## 플래시카드

1. Q. CDA가 초점을 두는 단위는? / A. 완결된 임상 문서(예: 퇴원요약)

## 연습문제

- Q-HIM-000221 (OX)

## 참고문헌

- REF-STANDARD-HL7-001 — HL7 표준군 개괄 (status: located)
