---
id: HIM-V1-C07-S10-T001
slug: cdw
title: CDW
title_en: Clinical Data Warehouse (CDW)
volume: 1
chapter: 7
section: 10
order: 1
status: drafting
difficulty: intermediate
importance: B
exam_frequency: unknown
estimated_minutes: 7
prerequisites:
  - HIM-V1-C07-S09-T001
related_topics:
  - HIM-V1-C03-S09-T001
tags:
  - 의료정보시스템
  - CDW
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-AHIMA-HIM-001
assets: []
questions:
  - Q-HIM-000200
---

# CDW

## 학습목표

1. CDW의 목적과 EMR과의 차이를 설명할 수 있다.

## 한 문장 정의

임상데이터웨어하우스(Clinical Data Warehouse, CDW)는 여러 시스템(EMR, LIS, PACS 등)의 임상데이터를 통합해 분석·연구 목적으로 저장하는 별도의 데이터 저장소이다.

## 왜 중요한가

CDW는 [연구 지원](../chapter-03/s09-research-support-duties.md)과 대규모 통계 분석의 기초 인프라다. EMR은 진료 지원에 최적화되어 있어 대량 분석에는 CDW가 별도로 필요하다.

## 선수 개념

- [ERP](s09-erp.md)

## 핵심 개념

- 데이터 통합: 여러 시스템의 데이터를 하나의 분석용 저장소로 모음
- 분석 최적화: 진료 실시간 처리보다 대량 데이터 조회·분석에 최적화된 구조
- 비식별·가명처리: 연구 목적 활용 시 개인정보 보호 조치 적용

## 상세 설명

EMR은 개별 환자의 진료를 실시간으로 지원하는 데 최적화되어 있어, "지난 5년간 특정 질환 환자 만 명의 검사 수치 분포"처럼 대량 데이터를 분석하는 작업에는 적합하지 않다. CDW는 이런 대량 분석을 위해 여러 시스템의 데이터를 미리 통합·정리해 놓은 별도 저장소다.

## 비교표 또는 흐름

| 구분 | EMR | CDW |
|---|---|---|
| 최적화 목적 | 개별 환자 진료 지원(실시간) | 대량 데이터 분석(연구·통계) |
| 데이터 범위 | 개별 환자 | 여러 시스템 통합, 다수 환자 |

## 실무 사례

한 병원의 연구자가 특정 질환의 치료 경향을 분석하기 위해 CDW에서 비식별 처리된 데이터를 추출해 활용한 사례가 있다. 이는 [연구 지원](../chapter-03/s09-research-support-duties.md) 업무와 CDW가 어떻게 연결되는지 보여준다.

## 국가시험 포인트

- CDW와 EMR의 목적 차이를 구분하는 문제

## 자주 하는 실수

- CDW를 EMR의 단순 백업본으로 오해하는 것

## 관련 법령·표준

CDW를 통한 연구 활용 시 개인정보 보호 관련 법령은 이 세션에서 원문 대조하지 않았다.

## AI Note

CDW에 저장된 대량 데이터는 AI 모델 학습에도 활용될 수 있으나, 이 경우에도 비식별·가명처리 원칙이 동일하게 적용되어야 한다.

## 핵심 요약

- CDW는 여러 시스템의 데이터를 통합해 분석·연구 목적으로 활용하는 저장소다.
- EMR은 실시간 진료 지원에, CDW는 대량 분석에 최적화되어 있다.

## 플래시카드

1. Q. CDW의 주요 목적은? / A. 여러 시스템의 데이터를 통합해 대량 분석·연구에 활용

## 연습문제

- Q-HIM-000200 (OX)

## 참고문헌

- REF-AHIMA-HIM-001 — AHIMA의 HIM 정의 (status: located)
