---
id: HIM-V1-C07-S13-T001
slug: system-integration
title: 시스템 통합
title_en: System Integration
volume: 1
chapter: 7
section: 13
order: 1
status: drafting
difficulty: intermediate
importance: B
exam_frequency: unknown
estimated_minutes: 7
prerequisites:
  - HIM-V1-C07-S10-T001
related_topics:
  - HIM-V1-C03-S10-T001
tags:
  - 의료정보시스템
  - 시스템통합
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-ONC-EMR-EHR-PHR-001
assets: []
questions:
  - Q-HIM-000205
---

# 시스템 통합

## 학습목표

1. 병원 내 여러 시스템(EMR, OCS, LIS, PACS 등)이 통합되어야 하는 이유를 설명할 수 있다.
2. 시스템 통합과 [의료정보 표준화](../chapter-03/s10-standardization-duties.md)의 관계를 설명할 수 있다.

## 한 문장 정의

시스템 통합은 병원 내 여러 개별 시스템(EMR, OCS, LIS, PACS, ERP 등)이 데이터를 서로 주고받아 하나의 일관된 정보 환경을 이루도록 연결하는 작업이다.

## 왜 중요한가

이 Chapter에서 다룬 시스템들은 각자 따로 존재하면 [병원 내 정보 흐름](../chapter-04/s12-information-flow-in-hospitals.md)이 끊긴다. 통합이 있어야 정보가 부서 간에 원활히 흐른다.

## 선수 개념

- [CDW](s10-cdw.md)

## 핵심 개념

- 인터페이스: 시스템 간 데이터를 주고받는 연결 통로
- 표준 기반 통합: [의료정보 표준화](../chapter-03/s10-standardization-duties.md)에서 다룬 표준(HL7 등)을 활용한 통합
- 통합 실패의 결과: 시스템 간 정보 불일치, 중복 입력 필요

## 상세 설명

시스템 통합이 잘 되어 있으면, 예를 들어 OCS에서 입력한 검사 처방이 자동으로 LIS에 전달되고, LIS의 결과가 자동으로 EMR에 표시된다. 통합이 부실하면 담당자가 같은 정보를 여러 시스템에 수작업으로 반복 입력해야 하고, 이 과정에서 오타나 누락이 발생할 위험이 커진다.

## 비교표 또는 흐름

| 상태 | 결과 |
|---|---|
| 통합 잘 됨 | 처방→검사→결과가 자동으로 연결 |
| 통합 부실 | 수작업 재입력 필요, 오류 위험 증가 |

## 실무 사례

한 병원에서 신규 도입된 영상 시스템이 기존 EMR과 완전히 통합되지 않아, 방사선사가 결과를 EMR에 수작업으로 다시 입력해야 했던 사례가 있다. 이는 통합 부실로 인한 비효율과 오류 위험을 보여준다.

## 국가시험 포인트

- 시스템 통합 부실이 초래하는 문제(수작업 재입력, 정보 불일치)를 확인하는 문제

## 자주 하는 실수

- 여러 시스템을 도입하기만 하면 자동으로 통합된다고 오해하는 것

## 관련 법령·표준

시스템 통합에 활용되는 표준(HL7, FHIR 등)의 상세 내용은 Volume I Chapter 8에서 다룬다.

## AI Note

해당 없음.

## 핵심 요약

- 시스템 통합은 여러 시스템이 데이터를 자동으로 주고받도록 연결하는 작업이다.
- 통합이 부실하면 수작업 재입력과 오류 위험이 커진다.

## 플래시카드

1. Q. 시스템 통합이 부실할 때 나타나는 대표적 문제는? / A. 수작업 재입력 필요와 정보 불일치

## 연습문제

- Q-HIM-000205 (OX)

## 참고문헌

- REF-ONC-EMR-EHR-PHR-001 — EMR/EHR/PHR 구분 자료 (status: located)
