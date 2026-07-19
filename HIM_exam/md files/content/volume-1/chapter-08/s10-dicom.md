---
id: HIM-V1-C08-S10-T001
slug: dicom
title: DICOM
title_en: DICOM
volume: 1
chapter: 8
section: 10
order: 1
status: drafting
difficulty: intermediate
importance: B
exam_frequency: unknown
estimated_minutes: 6
prerequisites:
  - HIM-V1-C08-S09-T001
related_topics:
  - HIM-V1-C07-S06-T001
tags:
  - 의료정보표준
  - DICOM
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-STANDARD-DICOM-001
assets: []
questions:
  - Q-HIM-000228
---

# DICOM

## 학습목표

1. DICOM이 표준화하는 대상과 PACS와의 관계를 설명할 수 있다.

## 한 문장 정의

DICOM(Digital Imaging and Communications in Medicine)은 의료영상과 관련 정보(촬영 조건, 환자 정보 등)를 저장·전송하는 형식을 정의하는 국제 표준이다.

## 왜 중요한가

DICOM은 [PACS](../chapter-07/s06-pacs.md)에서 다룬 영상 저장·전송 시스템이 실제로 따르는 파일 형식·통신 표준이다.

## 선수 개념

- [LOINC](s09-loinc.md)

## 핵심 개념

- 영상 파일 형식: 이미지 데이터와 함께 촬영 조건, 환자 정보 등 메타데이터를 포함
- 통신 프로토콜: 서로 다른 영상 장비·시스템 간 영상을 주고받는 방식 정의
- 장비 호환성: 여러 제조사의 영상 장비가 DICOM을 따르면 상호 호환 가능

## 상세 설명

DICOM 덕분에 서로 다른 제조사의 CT, MRI 장비에서 촬영된 영상이라도 PACS에서 동일한 방식으로 저장·조회될 수 있다. DICOM 파일에는 이미지 자체뿐 아니라 촬영 날짜, 장비 정보, 환자 식별 정보 등의 메타데이터가 함께 포함되어 있어, [환자식별](../chapter-06/s03-patient-identification.md) 원칙이 영상 데이터에도 적용된다.

## 비교표 또는 흐름

| 구성 요소 | 내용 |
|---|---|
| 이미지 데이터 | 실제 영상 |
| 메타데이터 | 촬영 조건, 장비 정보, 환자 식별 정보 |

## 실무 사례

서로 다른 제조사의 CT 장비와 MRI 장비를 사용하는 병원에서, 두 장비 모두 DICOM 표준을 따르고 있어 하나의 PACS로 통합 관리할 수 있었던 사례가 있다.

## 국가시험 포인트

- DICOM과 PACS의 관계(표준 vs. 시스템)를 확인하는 문제

## 자주 하는 실수

- DICOM과 PACS를 같은 개념으로 혼동하는 것

## 관련 법령·표준

이 Topic은 국제 표준 개관으로 특정 법령에 근거하지 않는다.

## AI Note

AI 영상 판독 도구는 DICOM 형식의 메타데이터를 활용해 환자·검사 정보를 함께 처리하는 경우가 많다.

## 핵심 요약

- DICOM은 의료영상의 저장·전송 형식을 정의하는 표준이다.
- 여러 제조사의 장비가 DICOM을 따르면 PACS로 통합 관리할 수 있다.

## 플래시카드

1. Q. DICOM 파일에 이미지와 함께 포함되는 것은? / A. 촬영 조건, 장비 정보, 환자 식별 정보 등의 메타데이터

## 연습문제

- Q-HIM-000228 (OX)

## 참고문헌

- REF-STANDARD-DICOM-001 — DICOM 표준 개괄 (status: located)
