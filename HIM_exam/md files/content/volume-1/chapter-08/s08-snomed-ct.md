---
id: HIM-V1-C08-S08-T001
slug: snomed-ct
title: SNOMED CT
title_en: SNOMED CT
volume: 1
chapter: 8
section: 8
order: 1
status: drafting
difficulty: intermediate
importance: A
exam_frequency: unknown
estimated_minutes: 7
prerequisites:
  - HIM-V1-C08-S07-T001
related_topics:
  - HIM-V1-C08-S09-T001
tags:
  - 의료정보표준
  - SNOMEDCT
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-STANDARD-SNOMEDCT-001
assets: []
questions:
  - Q-HIM-000225
  - Q-HIM-000226
---

# SNOMED CT

## 학습목표

1. SNOMED CT의 목적과 ICD/KCD와의 차이를 설명할 수 있다.

## 한 문장 정의

SNOMED CT(Systematized Nomenclature of Medicine Clinical Terms)는 진단, 소견, 처치 등 임상 개념을 매우 세밀하게 코드화한 국제 임상용어 표준이다.

## 왜 중요한가

SNOMED CT는 [ICD](s11-icd.md)·[KCD](s12-kcd.md)와 혼동되기 쉽지만 목적이 다르다. 이 차이를 명확히 알아야 각 표준이 언제 쓰이는지 이해할 수 있다.

## 선수 개념

- [Resource와 API](s07-resource-and-api.md)

## 핵심 개념

- 세밀한 임상 개념 표현: 진단뿐 아니라 신체 구조, 소견, 절차 등 다양한 임상 개념을 코드화
- ICD/KCD와의 차이: ICD/KCD는 주로 통계·청구 목적의 분류인 반면, SNOMED CT는 임상 기록 자체를 정교하게 코드화하는 데 초점
- 상호 매핑: 필요 시 SNOMED CT와 ICD/KCD 코드 간 매핑이 이루어지기도 함

## 상세 설명

ICD/KCD가 "이 환자의 주된 문제를 통계·청구를 위해 하나의 코드로 요약한다"는 목적에 가깝다면, SNOMED CT는 "이 환자의 임상 상태를 최대한 세밀하고 정확하게 코드화한다"는 목적에 가깝다. 예를 들어 "당뇨병"이라는 큰 진단 안에서도 합병증 유무, 세부 유형 등을 SNOMED CT는 더 세밀하게 구분해 표현할 수 있다.

## 비교표 또는 흐름

| 구분 | ICD/KCD | SNOMED CT |
|---|---|---|
| 주요 목적 | 통계·청구 분류 | 임상 개념의 정교한 표현 |
| 세밀함 | 상대적으로 큰 범주 | 매우 세밀한 임상 개념 |

## 실무 사례

한 병원의 EMR에서 임상 기록은 SNOMED CT로 세밀하게 코드화되고, 이 정보가 청구·통계 목적으로는 ICD/KCD 코드로 매핑되어 활용되는 방식이 사용될 수 있다.

## 국가시험 포인트

- SNOMED CT와 ICD/KCD의 목적 차이를 구분하는 문제

## 자주 하는 실수

- SNOMED CT를 ICD/KCD의 대체물로 오해하는 것(용도가 다름)

## 관련 법령·표준

이 Topic은 국제 표준 개관으로 특정 법령에 근거하지 않는다.

## AI Note

해당 없음.

## 핵심 요약

- SNOMED CT는 임상 개념을 세밀하게 코드화하는 국제 임상용어 표준이다.
- ICD/KCD는 통계·청구 목적, SNOMED CT는 임상 기록의 정교한 표현이라는 목적 차이가 있다.

## 플래시카드

1. Q. 임상 개념을 세밀하게 코드화하는 국제 표준은? / A. SNOMED CT

## 연습문제

- Q-HIM-000225 (객관식)
- Q-HIM-000226 (OX)

## 참고문헌

- REF-STANDARD-SNOMEDCT-001 — SNOMED CT 개괄 (status: located)
