---
id: HIM-V1-C10-S09-T001
slug: clinical-data-warehouse-use
title: 임상데이터웨어하우스(활용 관점)
title_en: Clinical Data Warehouse — Use Perspective
volume: 1
chapter: 10
section: 9
order: 1
status: drafting
difficulty: intermediate
importance: B
exam_frequency: unknown
estimated_minutes: 6
prerequisites:
  - HIM-V1-C07-S10-T001
related_topics:
  - HIM-V1-C10-S10-T001
tags:
  - 의료정보활용
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
  - Q-HIM-000270
---

# 임상데이터웨어하우스(활용 관점)

## 학습목표

1. [CDW](../chapter-07/s10-cdw.md)의 시스템 구조는 앞서 다루었으므로, 이 Topic은 CDW가 이 Chapter의 여러 활용(연구, 질 관리, 공공보건 등)을 어떻게 뒷받침하는지 정리한다.

## 한 문장 정의

임상데이터웨어하우스는 여러 시스템의 데이터를 통합해 [연구 활용](s06-research-use.md), [질 관리 활용](s04-quality-management-use.md), [공공보건 활용](s08-public-health-use.md) 등 대량 분석이 필요한 활용을 뒷받침하는 인프라이다.

## 왜 중요한가

이 Chapter에서 다룬 여러 활용은 대부분 여러 환자의 데이터를 한 번에 분석해야 하며, CDW 없이는 이런 대량 분석이 비효율적이다.

## 선수 개념

- [CDW](../chapter-07/s10-cdw.md)

## 핵심 개념

- 통합 저장: EMR, LIS, PACS 등 여러 시스템의 데이터를 CDW로 통합
- 대량 분석 지원: 연구, 질 지표 산출, 공공보건 통계 등에 활용
- 접근 통제: CDW 접근도 최소 필요 범위 원칙에 따라 통제

## 상세 설명

예를 들어 특정 질환의 재입원율(질 관리 활용)을 계산하려면 여러 환자의 입원·퇴원 기록을 한 번에 조회해야 하는데, 이런 대량 조회는 실시간 진료 지원에 최적화된 EMR보다 CDW에서 수행하는 것이 효율적이다.

## 비교표 또는 흐름

| 활용 | CDW의 역할 |
|---|---|
| 연구 활용 | 대상 환자군 데이터 추출 |
| 질 관리 활용 | 재입원율 등 지표 계산 |
| 공공보건 활용 | 국가 통계 집계를 위한 데이터 추출 |

## 실무 사례

한 병원의 질 관리 부서가 CDW에서 특정 수술의 합병증률을 계산해 질 개선 활동의 근거로 삼은 사례가 있다.

## 국가시험 포인트

- CDW가 이 Chapter의 여러 활용을 뒷받침하는 공통 인프라라는 점을 확인하는 문제

## 자주 하는 실수

- CDW를 연구 활용에만 쓰이는 것으로 좁게 이해하는 것

## 관련 법령·표준

이 Topic은 시스템 활용 개념으로 특정 법령에 근거하지 않는다.

## AI Note

해당 없음.

## 핵심 요약

- CDW는 연구, 질 관리, 공공보건 등 이 Chapter의 여러 대량 분석 활용을 뒷받침하는 공통 인프라다.

## 플래시카드

1. Q. 재입원율 같은 지표를 계산하기에 EMR보다 효율적인 시스템은? / A. CDW

## 연습문제

- Q-HIM-000270 (OX)

## 참고문헌

- REF-AHIMA-HIM-001 — AHIMA의 HIM 정의 (status: located)
