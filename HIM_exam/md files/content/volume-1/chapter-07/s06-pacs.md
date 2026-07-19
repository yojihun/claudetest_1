---
id: HIM-V1-C07-S06-T001
slug: pacs
title: PACS
title_en: Picture Archiving and Communication System (PACS)
volume: 1
chapter: 7
section: 6
order: 1
status: drafting
difficulty: basic
importance: B
exam_frequency: unknown
estimated_minutes: 6
prerequisites:
  - HIM-V1-C07-S01-T001
related_topics:
  - HIM-V1-C07-S07-T001
tags:
  - 의료정보시스템
  - PACS
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-AHIMA-HIM-001
assets: []
questions:
  - Q-HIM-000196
---

# PACS

## 학습목표

1. PACS의 역할과 [DICOM](../chapter-08/s10-dicom.md) 표준과의 관계를 설명할 수 있다.

## 한 문장 정의

의료영상저장전송시스템(Picture Archiving and Communication System, PACS)은 X-ray, CT, MRI 등 의료영상을 디지털로 저장·조회·전송하는 시스템이다.

## 왜 중요한가

PACS 덕분에 필름을 물리적으로 옮기지 않고도 여러 부서에서 동시에 영상을 조회할 수 있게 되었다. 이는 [검사·영상기록](../chapter-02/s08-laboratory-and-imaging-records.md)의 결과값(이미지) 부분을 관리하는 핵심 시스템이다.

## 선수 개념

- [병원정보시스템](s01-hospital-information-system.md)

## 핵심 개념

- 영상 저장: 촬영된 영상을 디지털로 저장
- 영상 조회: 여러 부서에서 동시에 조회 가능
- 표준 형식: DICOM이라는 표준 형식으로 영상을 저장·전송(Volume I Chapter 8에서 상세히 다룸)

## 상세 설명

PACS 이전에는 필름을 물리적으로 인화해 옮겨야 했고, 한 번에 한 곳에서만 볼 수 있었다. PACS는 이를 디지털화해 동시 조회를 가능하게 했다. 이때 영상이 어느 시스템에서든 호환되어 열리려면 DICOM이라는 표준 형식을 따라야 한다.

## 비교표 또는 흐름

| 구분 | 필름 시대 | PACS |
|---|---|---|
| 조회 | 한 번에 한 곳 | 여러 부서 동시 조회 |
| 이동 | 물리적 운반 | 전자적 전송 |
| 형식 | 인화 필름 | DICOM 표준 파일 |

## 실무 사례

한 병원에서 응급실과 영상의학과가 PACS를 통해 동시에 같은 CT 영상을 확인하며 신속하게 협진한 사례가 있다. 필름 시대였다면 불가능했을 협업 방식이다.

## 국가시험 포인트

- PACS의 역할과 DICOM 표준의 연결을 확인하는 문제

## 자주 하는 실수

- PACS와 DICOM을 같은 개념으로 혼동하는 것(PACS는 시스템, DICOM은 그 시스템이 따르는 표준)

## 관련 법령·표준

DICOM 표준의 상세 내용은 Volume I Chapter 8에서 다룬다.

## AI Note

AI 기반 영상 판독 보조 도구가 PACS와 연동되어 활용되는 사례가 늘고 있으나, 최종 판독은 전문의의 몫이다.

## 핵심 요약

- PACS는 의료영상을 디지털로 저장·조회·전송하는 시스템이다.
- DICOM 표준을 따라야 여러 시스템 간 호환이 가능하다.

## 플래시카드

1. Q. PACS가 따르는 표준 형식은? / A. DICOM

## 연습문제

- Q-HIM-000196 (OX)

## 참고문헌

- REF-AHIMA-HIM-001 — AHIMA의 HIM 정의 (status: located)
