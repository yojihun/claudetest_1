---
id: HIM-V1-C08-S06-T001
slug: fhir
title: FHIR
title_en: Fast Healthcare Interoperability Resources (FHIR)
volume: 1
chapter: 8
section: 6
order: 1
status: drafting
difficulty: intermediate
importance: A
exam_frequency: unknown
estimated_minutes: 8
prerequisites:
  - HIM-V1-C08-S05-T001
related_topics:
  - HIM-V1-C08-S07-T001
tags:
  - 의료정보표준
  - FHIR
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-STANDARD-FHIR-001
assets: []
questions:
  - Q-HIM-000222
  - Q-HIM-000223
---

# FHIR

## 학습목표

1. FHIR이 이전 HL7 표준(v2, CDA)과 다른 접근 방식을 설명할 수 있다.
2. FHIR이 웹 기술을 활용하는 방식을 개략적으로 설명할 수 있다.

## 한 문장 정의

FHIR(Fast Healthcare Interoperability Resources)은 웹에서 흔히 쓰이는 기술(REST API 등)과 "Resource"라는 작은 데이터 단위를 활용해 유연하고 빠르게 의료정보를 교환하는 최신 HL7 표준이다.

## 왜 중요한가

FHIR은 모바일 앱, PHR 등 현대적인 서비스와 병원 시스템을 연동하는 데 특히 적합해, [PHR](../chapter-07/s04-phr-patient-engagement-features.md)이나 최신 디지털 헬스 서비스에서 널리 채택되고 있다.

## 선수 개념

- [CDA](s05-cda.md)

## 핵심 개념

- Resource: 환자, 진단, 처방 등 정보를 작은 단위(Resource)로 나누어 표현
- REST API: 웹에서 널리 쓰이는 방식으로 Resource를 조회·생성·수정
- 확장성: 필요에 따라 특정 국가·기관이 Resource를 확장해 사용 가능

## 상세 설명

FHIR은 HL7 v2나 CDA보다 훨씬 작은 단위(Resource)로 정보를 나누고, 이를 웹 개발자들에게 익숙한 방식(REST API)으로 주고받는다. 이 때문에 병원 전산 담당자뿐 아니라 일반 소프트웨어 개발자도 비교적 쉽게 연동할 수 있다는 장점이 있다. [Resource와 API](s07-resource-and-api.md)에서 이 구조를 더 자세히 다룬다.

## 비교표 또는 흐름

| 세대 | 접근 방식 |
|---|---|
| HL7 v2 | 이벤트 메시지 |
| CDA | 완결된 문서 |
| FHIR | 작은 단위(Resource) + 웹 API |

## 실무 사례

한 병원이 환자용 모바일 앱을 개발할 때 FHIR API를 활용해 EMR의 특정 정보(예약, 처방 내역)만 선택적으로 앱에 노출한 사례가 있다. 이는 FHIR의 유연성이 실제로 활용된 사례다.

## 국가시험 포인트

- FHIR이 이전 세대 표준과 다른 접근 방식(Resource, API)을 이해했는지 확인하는 문제

## 자주 하는 실수

- FHIR을 단순히 HL7 v2의 개선판 정도로만 이해하고 접근 방식 자체가 다르다는 점을 놓치는 것

## 관련 법령·표준

이 Topic은 국제 표준 개관으로 특정 법령에 근거하지 않는다.

## AI Note

AI 기반 서비스가 FHIR API를 통해 EMR 데이터에 접근하는 사례가 늘고 있다. 이 경우에도 접근 범위는 최소 필요 원칙에 따라 제한되어야 한다.

## 핵심 요약

- FHIR은 Resource 단위와 웹 API를 활용하는 최신 HL7 표준이다.
- 모바일 앱, PHR 등 현대적 서비스 연동에 특히 적합하다.

## 플래시카드

1. Q. FHIR이 정보를 나누는 작은 단위는? / A. Resource

## 연습문제

- Q-HIM-000222 (객관식)
- Q-HIM-000223 (OX)

## 참고문헌

- REF-STANDARD-FHIR-001 — FHIR 표준 개괄 (status: located)
