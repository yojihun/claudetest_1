---
id: HIM-V1-C07-S02-T001
slug: emr-system-components
title: EMR
title_en: EMR System Components
volume: 1
chapter: 7
section: 2
order: 1
status: drafting
difficulty: intermediate
importance: B
exam_frequency: unknown
estimated_minutes: 7
prerequisites:
  - HIM-V1-C07-S01-T001
related_topics:
  - HIM-V1-C01-S12-T001
tags:
  - 의료정보시스템
  - EMR
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-ONC-EMR-EHR-PHR-001
assets: []
questions:
  - Q-HIM-000192
---

# EMR

## 학습목표

1. EMR을 구성하는 주요 기능 모듈을 나열할 수 있다.

## 한 문장 정의

이 Topic은 [EMR·EHR·PHR 비교](../chapter-01/s12-emr-ehr-phr.md)에서 다룬 개념 정의를 넘어, EMR이 실제로 어떤 기능 모듈들로 구성되는 시스템인지를 다룬다.

## 왜 중요한가

EMR을 하나의 화면으로만 생각하면 실제 시스템 구조를 이해하기 어렵다. EMR은 여러 모듈이 연결된 시스템이다.

## 선수 개념

- [병원정보시스템](s01-hospital-information-system.md)

## 핵심 개념

- 처방 입력 모듈(CPOE와 연동)
- 결과 조회 모듈(LIS·PACS 결과 표시)
- 임상 문서화 모듈(경과기록, 간호기록 등 작성)
- 문제 목록·알레르기 관리 모듈

## 상세 설명

EMR은 [진료기록의 구성](../chapter-02/s02-composition-of-clinical-records.md)에서 다룬 여러 문서 유형(경과기록, 간호기록 등)을 각각 별도 모듈로 구현하고, 이를 하나의 환자 화면에서 통합해 보여준다. 각 모듈은 [CPOE](s11-cpoe.md), [LIS](s08-lis.md), [PACS](s06-pacs.md) 등 다른 시스템과 연동되어 데이터를 주고받는다.

## 비교표 또는 흐름

| 모듈 | 연동 시스템 |
|---|---|
| 처방 입력 | CPOE |
| 검사 결과 조회 | LIS |
| 영상 결과 조회 | PACS |
| 임상 문서화 | (EMR 자체 기능) |

## 실무 사례

한 병원의 EMR에서 문제 목록 모듈과 알레르기 관리 모듈이 서로 연동되지 않아, 알레르기가 있는 약물이 문제 목록에서는 경고 없이 처방 가능했던 사례가 있다. 이는 모듈 간 연동 설계의 중요성을 보여준다.

## 국가시험 포인트

- EMR을 구성하는 모듈과 각 모듈의 역할을 연결하는 문제

## 자주 하는 실수

- EMR을 단일 화면으로만 이해하고 여러 모듈의 연동 구조를 놓치는 것

## 관련 법령·표준

이 Topic은 시스템 구조 개념으로 특정 법령에 근거하지 않는다.

## AI Note

해당 없음.

## 핵심 요약

- EMR은 처방 입력, 결과 조회, 임상 문서화, 문제 목록 관리 등 여러 모듈로 구성된다.
- 각 모듈은 CPOE, LIS, PACS 등 다른 시스템과 연동된다.

## 플래시카드

1. Q. EMR의 처방 입력 모듈이 연동되는 시스템은? / A. CPOE

## 연습문제

- Q-HIM-000192 (OX)

## 참고문헌

- REF-ONC-EMR-EHR-PHR-001 — EMR/EHR/PHR 구분 자료 (status: located)
