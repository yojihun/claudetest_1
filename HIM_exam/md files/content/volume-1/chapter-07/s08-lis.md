---
id: HIM-V1-C07-S08-T001
slug: lis
title: LIS
title_en: Laboratory Information System (LIS)
volume: 1
chapter: 7
section: 8
order: 1
status: drafting
difficulty: basic
importance: B
exam_frequency: unknown
estimated_minutes: 6
prerequisites:
  - HIM-V1-C07-S07-T001
related_topics:
  - HIM-V1-C04-S09-T001
tags:
  - 의료정보시스템
  - LIS
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-AHIMA-HIM-001
assets: []
questions:
  - Q-HIM-000198
---

# LIS

## 학습목표

1. LIS의 역할과 검사 결과 관리 흐름을 설명할 수 있다.

## 한 문장 정의

검사실정보시스템(Laboratory Information System, LIS)은 검사 의뢰 접수부터 검체 관리, 결과 입력·보고까지 임상병리 검사 업무 전반을 관리하는 시스템이다.

## 왜 중요한가

LIS는 [검사·영상기록](../chapter-02/s08-laboratory-and-imaging-records.md)에서 다룬 결과값(원자료)이 생성·관리되는 시스템이다.

## 선수 개념

- [RIS](s07-ris.md)

## 핵심 개념

- 검사 의뢰 접수: 처방(OCS)에서 전달된 검사 의뢰 확인
- 검체 관리: 검체 채취, 라벨링, 추적
- 결과 입력·보고: 검사 결과를 EMR로 전송해 의료진이 조회 가능하게 함
- 이상치 알림: 위험 수치 발생 시 자동 알림 기능

## 상세 설명

LIS는 OCS에서 전달된 검사 의뢰를 받아 검체를 추적하고, 결과가 나오면 EMR로 전송한다. 검체가 잘못 라벨링되면 엉뚱한 환자의 결과가 보고되는 심각한 오류로 이어질 수 있어, [환자식별](../chapter-06/s03-patient-identification.md) 원칙이 검체 라벨링 단계에서도 그대로 적용된다.

## 비교표 또는 흐름

| 단계 | 내용 |
|---|---|
| 의뢰 접수 | OCS에서 전달된 검사 의뢰 확인 |
| 검체 관리 | 채취, 라벨링, 추적 |
| 결과 입력·보고 | EMR로 결과 전송 |
| 이상치 알림 | 위험 수치 자동 알림 |

## 실무 사례

한 검사실에서 검체 라벨링 오류로 다른 환자의 검사 결과가 잘못 보고될 뻔했으나, 이중 확인 절차에서 발견되어 정정된 사례가 있다.

## 국가시험 포인트

- LIS가 관리하는 업무 범위(의뢰-검체-결과)를 확인하는 문제

## 자주 하는 실수

- LIS를 단순 결과 저장소로만 여기고 검체 관리·추적 기능을 놓치는 것

## 관련 법령·표준

이 Topic은 시스템 개념으로 특정 법령에 근거하지 않는다.

## AI Note

AI 기반 이상치 자동 탐지가 LIS에 결합되는 사례가 늘고 있으나, 임상적 해석은 검사 전문의의 몫이다.

## 핵심 요약

- LIS는 검사 의뢰 접수부터 검체 관리, 결과 보고까지 관리한다.
- 검체 라벨링 오류는 환자식별 오류와 유사한 심각한 위험을 가진다.

## 플래시카드

1. Q. LIS가 관리하는 업무의 시작 단계는? / A. 검사 의뢰 접수(OCS에서 전달)

## 연습문제

- Q-HIM-000198 (OX)

## 참고문헌

- REF-AHIMA-HIM-001 — AHIMA의 HIM 정의 (status: located)
