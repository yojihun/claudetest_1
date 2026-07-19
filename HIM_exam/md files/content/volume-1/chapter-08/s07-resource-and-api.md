---
id: HIM-V1-C08-S07-T001
slug: resource-and-api
title: Resource와 API
title_en: FHIR Resources and APIs
volume: 1
chapter: 8
section: 7
order: 1
status: drafting
difficulty: intermediate
importance: B
exam_frequency: unknown
estimated_minutes: 7
prerequisites:
  - HIM-V1-C08-S06-T001
related_topics:
  - HIM-V1-C08-S08-T001
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
  - Q-HIM-000224
---

# Resource와 API

## 학습목표

1. FHIR Resource의 예시와 API를 통한 접근 방식을 설명할 수 있다.

## 한 문장 정의

이 Topic은 [FHIR](s06-fhir.md)에서 다룬 개념을 더 구체적으로, Resource가 실제로 어떤 정보 단위를 가리키고 API로 어떻게 접근하는지를 다룬다.

## 왜 중요한가

Resource와 API의 관계를 이해하면 FHIR이 왜 유연한 연동을 가능하게 하는지 더 구체적으로 이해할 수 있다.

## 선수 개념

- [FHIR](s06-fhir.md)

## 핵심 개념

- 대표적 Resource 예시: Patient(환자 정보), Observation(관찰·검사 결과), MedicationRequest(처방), Condition(진단)
- API 접근: 각 Resource를 조회(GET), 생성(POST), 수정(PUT) 등의 방식으로 접근
- 조합 가능성: 여러 Resource를 조합해 하나의 임상 화면을 구성 가능

## 상세 설명

예를 들어 모바일 앱이 환자의 최근 처방 내역을 보여주려면, 해당 환자의 Patient Resource와 MedicationRequest Resource를 API로 조회해 조합하면 된다. 이런 방식은 필요한 정보만 선택적으로 가져올 수 있어, [정보 제공](../chapter-03/s06-release-of-information.md)에서 다룬 최소 필요 범위 원칙을 기술적으로 구현하기에도 유리하다.

## 비교표 또는 흐름

| Resource | 담는 정보 |
|---|---|
| Patient | 환자 기본 정보 |
| Observation | 관찰·검사 결과 |
| MedicationRequest | 처방 정보 |
| Condition | 진단 정보 |

## 실무 사례

한 개발팀이 환자용 앱에서 "다음 예약"과 "최근 처방"만 보여주기 위해 관련 Resource만 선택적으로 API 조회한 사례가 있다. 이는 불필요한 정보 노출을 막는 데도 기여했다.

## 국가시험 포인트

- 대표적 FHIR Resource와 그것이 담는 정보 유형을 연결하는 문제

## 자주 하는 실수

- Resource를 데이터베이스의 테이블과 완전히 동일한 개념으로 오해하는 것(개념적으로 유사하나 API 중심 설계라는 차이가 있음)

## 관련 법령·표준

이 Topic은 국제 표준 개관으로 특정 법령에 근거하지 않는다.

## AI Note

AI 애플리케이션이 FHIR API를 통해 필요한 Resource만 조회하도록 설계하면 데이터 접근 범위를 최소화하는 데 도움이 된다.

## 핵심 요약

- FHIR Resource는 Patient, Observation, MedicationRequest 등 정보 단위로 구성된다.
- API를 통해 필요한 Resource만 선택적으로 조회할 수 있어 최소 필요 범위 원칙 구현에 유리하다.

## 플래시카드

1. Q. 처방 정보를 담는 FHIR Resource는? / A. MedicationRequest

## 연습문제

- Q-HIM-000224 (OX)

## 참고문헌

- REF-STANDARD-FHIR-001 — FHIR 표준 개괄 (status: located)
