---
id: HIM-V1-C07-S03-T001
slug: ehr-health-information-exchange
title: EHR
title_en: EHR and Health Information Exchange
volume: 1
chapter: 7
section: 3
order: 1
status: drafting
difficulty: intermediate
importance: B
exam_frequency: unknown
estimated_minutes: 7
prerequisites:
  - HIM-V1-C07-S02-T001
related_topics:
  - HIM-V1-C01-S12-T001
tags:
  - 의료정보시스템
  - EHR
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-ONC-EMR-EHR-PHR-001
assets: []
questions:
  - Q-HIM-000193
---

# EHR

## 학습목표

1. EHR이 여러 EMR 간 정보를 교환하기 위해 필요한 기반 요소를 설명할 수 있다.

## 한 문장 정의

이 Topic은 [EMR·EHR·PHR 비교](../chapter-01/s12-emr-ehr-phr.md)의 개념 정의를 넘어, EHR이 실제로 작동하기 위해 필요한 정보 교환 인프라(Health Information Exchange, HIE)를 다룬다.

## 왜 중요한가

EHR은 단일 시스템이 아니라 여러 기관의 EMR을 연결하는 "네트워크"에 가깝다. 이 네트워크가 작동하려면 [의료정보 표준화](../chapter-03/s10-standardization-duties.md)에서 다룬 표준(HL7, FHIR 등)이 필수적이다.

## 선수 개념

- [EMR](s02-emr-system-components.md)

## 핵심 개념

- 정보 교환 허브(HIE): 여러 기관의 EMR 데이터를 중계·통합하는 기반 시설
- 표준 기반 연동: 표준화된 형식(HL7, FHIR 등)이 없으면 기관 간 데이터가 의미 있게 교환되지 않음
- 참여 기관의 정책: 어떤 정보를 어떤 조건으로 공유할지에 대한 기관 간 합의 필요

## 상세 설명

EHR이 실제로 구현되려면 기술적 표준(HL7, FHIR)뿐 아니라, 참여 기관들이 "어떤 정보를 어떤 조건으로 공유할 것인가"에 합의하는 정책적 기반도 필요하다. 기술이 있어도 기관 간 합의가 없으면 정보는 여전히 각 기관의 EMR 안에 갇혀 있게 된다.

## 비교표 또는 흐름

| 요소 | 역할 |
|---|---|
| 정보 교환 허브(HIE) | 여러 기관 데이터의 중계·통합 |
| 표준(HL7, FHIR 등) | 데이터가 의미 있게 해석되도록 하는 공통 형식 |
| 기관 간 정책 합의 | 공유 범위와 조건 결정 |

## 실무 사례

두 병원이 같은 표준(FHIR)을 사용하고 있었지만, 어떤 항목을 공유할지에 대한 기관 간 합의가 없어 실제로는 정보 교환이 제한적으로만 이루어진 사례가 있다. 이는 기술적 표준만으로는 EHR이 완성되지 않음을 보여준다.

## 국가시험 포인트

- EHR 구현에 기술적 표준과 기관 간 정책 합의가 모두 필요하다는 점을 확인하는 문제

## 자주 하는 실수

- EHR을 기술적 표준만 갖추면 자동으로 완성되는 것으로 오해하는 것

## 관련 법령·표준

관련 표준(HL7, FHIR)의 상세 내용은 Volume I Chapter 8에서 다룬다.

## AI Note

해당 없음.

## 핵심 요약

- EHR은 정보 교환 허브, 표준, 기관 간 정책 합의가 함께 작동해야 실현된다.
- 기술적 표준만으로는 충분하지 않다.

## 플래시카드

1. Q. EHR 구현에 필요한 세 가지 요소는? / A. 정보 교환 허브, 표준(HL7·FHIR 등), 기관 간 정책 합의

## 연습문제

- Q-HIM-000193 (OX)

## 참고문헌

- REF-ONC-EMR-EHR-PHR-001 — EMR/EHR/PHR 구분 자료 (status: located)
