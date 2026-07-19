---
id: HIM-V1-C08-S15-T001
slug: standards-application-cases
title: 표준 적용 사례
title_en: Standards Application Case Studies
volume: 1
chapter: 8
section: 15
order: 1
status: drafting
difficulty: advanced
importance: A
exam_frequency: unknown
estimated_minutes: 9
prerequisites:
  - HIM-V1-C08-S14-T001
related_topics: []
tags:
  - 의료정보표준
  - 사례
  - 복습
content_type:
  - case
as_of_date: 2026-07-19
verified: false
reviewers: []
references: []
assets: []
questions:
  - Q-HIM-000236
---

# 표준 적용 사례

## 학습목표

1. Chapter 8에서 다룬 여러 표준(HL7, FHIR, SNOMED CT, LOINC, DICOM, ICD/KCD)을 하나의 시나리오에 통합 적용할 수 있다.

## 한 문장 정의

이 Topic은 Chapter 8(의료정보 표준)에서 다룬 여러 표준이 실제 병원 시나리오에서 각각 어떤 역할을 하는지 통합적으로 정리하는 사례 기반 복습 Topic이다.

## 왜 중요한가

개별 표준의 정의를 아는 것과, 하나의 실제 상황에서 어떤 표준이 어디에 쓰이는지 판단하는 것은 다른 능력이다.

## 선수 개념

- [코드 체계 관리](s14-code-system-management.md)

## 핵심 개념

Chapter 8에서 다룬 표준 정리:

1. HL7(v2, CDA, FHIR) — 시스템 간 정보 교환 형식
2. SNOMED CT — 임상 개념의 세밀한 코드화
3. LOINC — 검사·관찰 항목 코드화
4. DICOM — 의료영상 저장·전송
5. ICD/KCD — 통계·청구 목적 질병분류

## 상세 설명

아래 시나리오를 통해 각 표준의 역할을 정리해본다.

> **시나리오:** 환자가 A병원에서 CT 촬영(DICOM) 후 혈액검사(LOINC 코드로 결과 기록)를 받았다. 담당의는 EMR에 임상 소견을 SNOMED CT로 상세히 기록했고, 퇴원 후 이 정보는 청구를 위해 KCD 코드로 매핑되었다. A병원은 B병원과 FHIR API를 통해 이 모든 정보를 공유했다.

## 비교표 또는 흐름

| 상황 요소 | 관련 표준 |
|---|---|
| CT 영상 저장·전송 | DICOM |
| 혈액검사 결과 코드화 | LOINC |
| 임상 소견의 세밀한 기록 | SNOMED CT |
| 청구용 질병분류 | KCD(ICD 기반) |
| 병원 간 정보 공유 | FHIR |

## 실무 사례

(본 Topic 자체가 통합 시나리오이므로 별도 사례를 추가하지 않는다.)

## 국가시험 포인트

- 하나의 시나리오에서 각 표준이 담당하는 역할을 정확히 연결하는 문제
- 표준 간 목적 차이(교환 형식 vs. 임상 코드화 vs. 통계 분류)를 통합적으로 이해했는지 확인하는 문제

## 자주 하는 실수

- 여러 표준을 서로 경쟁하거나 대체하는 관계로 오해하고, 실제로는 각자 다른 역할로 함께 쓰인다는 점을 놓치는 것

## 관련 법령·표준

Chapter 8 각 Topic의 관련 법령·표준 항목을 참고한다.

## AI Note

AI 시스템이 이 여러 표준을 넘나들며 데이터를 통합 분석하는 경우가 늘고 있으나, 각 표준이 원래 의도한 목적과 범위를 벗어나 데이터를 오용하지 않도록 주의해야 한다.

## 핵심 요약

- 하나의 진료 과정에서도 여러 표준(DICOM, LOINC, SNOMED CT, KCD, FHIR)이 각자 다른 역할로 함께 사용된다.
- 표준들은 서로 대체 관계가 아니라 상호 보완적으로 작동한다.

## 플래시카드

1. Q. 이 시나리오에서 병원 간 정보 공유에 사용된 표준은? / A. FHIR

## 연습문제

- Q-HIM-000236 (사례형, Chapter 8 통합)

## 참고문헌

Chapter 8 각 Topic의 참고문헌을 참고한다.
