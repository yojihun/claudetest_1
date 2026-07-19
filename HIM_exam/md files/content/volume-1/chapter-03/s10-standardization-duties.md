---
id: HIM-V1-C03-S10-T001
slug: standardization-duties
title: 의료정보 표준화
title_en: Health Information Standardization Duties
volume: 1
chapter: 3
section: 10
order: 1
status: drafting
difficulty: intermediate
importance: B
exam_frequency: unknown
estimated_minutes: 7
prerequisites:
  - HIM-V1-C01-S12-T001
related_topics:
  - HIM-V1-C03-S03-T001
tags:
  - 직무
  - 표준화
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-ONC-EMR-EHR-PHR-001
assets: []
questions:
  - Q-HIM-000108
  - Q-HIM-000109
---

# 의료정보 표준화

## 학습목표

1. 의료정보 표준화 직무의 핵심 활동을 설명할 수 있다.
2. 표준화가 상호운용성과 어떻게 연결되는지 설명할 수 있다.

## 한 문장 정의

의료정보 표준화 직무는 용어·코드체계·데이터 형식을 표준(HL7, FHIR, SNOMED CT, LOINC 등)에 맞게 관리하여 시스템 간 정보 교환이 가능하도록 하는 업무이다.

## 왜 중요한가

[EMR·EHR·PHR 비교](../chapter-01/s12-emr-ehr-phr.md)에서 다룬 상호운용성은 표준화 없이는 실현될 수 없다. 이 직무는 그 표준을 실제로 관리하는 역할을 한다.

## 선수 개념

- [EMR·EHR·PHR 비교](../chapter-01/s12-emr-ehr-phr.md)

## 핵심 개념

- 용어 표준화: 같은 개념을 여러 이름으로 부르지 않도록 표준 용어체계 적용
- 코드체계 관리: 사용 중인 표준(HL7, FHIR, SNOMED CT, LOINC 등)의 버전 관리
- 매핑 관리: 병원 내부 코드와 표준 코드 간 매핑표 관리
- 신규 시스템 도입 시 표준 적용 검토

## 상세 설명

표준화 업무가 없으면 병원마다, 심지어 같은 병원의 부서마다 같은 검사를 다른 이름으로 부르는 문제가 생긴다. 예를 들어 특정 혈액검사 항목이 시스템 A에서는 코드 001로, 시스템 B에서는 코드 CBC-01로 저장되어 있다면, 두 시스템 간 자동 비교가 불가능하다. 표준화 담당자는 이런 코드들을 표준 코드체계(예: LOINC)로 매핑해 시스템 간 의미 있는 교환이 가능하도록 관리한다.

## 비교표 또는 흐름

| 활동 | 내용 |
|---|---|
| 용어 표준화 | 동일 개념에 하나의 표준 용어 사용 |
| 코드체계 관리 | HL7, FHIR, SNOMED CT, LOINC 등 버전 관리 |
| 매핑 관리 | 내부 코드-표준 코드 매핑표 유지 |
| 신규 도입 검토 | 새 시스템 도입 시 표준 준수 여부 검토 |

## 실무 사례

한 병원에서 검사 부서와 진료 부서가 서로 다른 코드로 같은 검사를 관리해 통계 집계 시 중복·누락이 발생했다가, 표준화 담당자가 두 코드 체계를 표준 코드로 매핑하면서 문제가 해결된 사례가 있다.

## 국가시험 포인트

- 표준화가 상호운용성 실현에 필요한 이유를 묻는 문제
- 여러 표준(HL7, FHIR, SNOMED CT, LOINC, DICOM)의 역할을 구분하는 문제(상세는 Volume I Chapter 8에서 다룸)

## 자주 하는 실수

- 표준화를 단순 명칭 통일로만 여기고 시스템 간 상호운용성 실현이라는 목적을 놓치는 것

## 관련 법령·표준

각 표준(HL7, FHIR, SNOMED CT, LOINC, DICOM)의 상세 내용은 Volume I Chapter 8에서 다룬다.

## AI Note

AI 기반 용어 매핑 도구가 코드 매핑 작업을 보조할 수 있으나, 매핑의 정확성 검증은 담당자의 몫이다.

## 핵심 요약

- 의료정보 표준화는 용어·코드체계·매핑을 관리해 시스템 간 상호운용성을 실현하는 직무다.
- 표준화 없이는 EHR 수준의 기관 간 정보 공유가 어렵다.

## 플래시카드

1. Q. 표준화 직무가 실현하고자 하는 핵심 목표는? / A. 시스템 간 상호운용성

## 연습문제

- Q-HIM-000108 (OX)
- Q-HIM-000109 (OX)

## 참고문헌

- REF-ONC-EMR-EHR-PHR-001 — EMR/EHR/PHR 구분 자료 (status: located)
