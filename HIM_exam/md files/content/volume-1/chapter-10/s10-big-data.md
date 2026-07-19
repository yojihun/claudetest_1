---
id: HIM-V1-C10-S10-T001
slug: big-data
title: 빅데이터
title_en: Big Data in Healthcare
volume: 1
chapter: 10
section: 10
order: 1
status: drafting
difficulty: intermediate
importance: B
exam_frequency: unknown
estimated_minutes: 7
prerequisites:
  - HIM-V1-C10-S09-T001
related_topics:
  - HIM-V1-C10-S12-T001
tags:
  - 의료정보활용
  - 빅데이터
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-SECONDARY-DIGITAL-HEALTH-001
assets: []
questions:
  - Q-HIM-000271
---

# 빅데이터

## 학습목표

1. 의료 빅데이터가 [CDW](s09-clinical-data-warehouse-use.md)의 전통적 활용과 어떻게 다른지 설명할 수 있다.

## 한 문장 정의

의료 빅데이터는 EMR뿐 아니라 웨어러블 기기, 유전체 데이터, 생활습관 데이터 등 대량·다양한 형태의 건강 관련 데이터를 통합해 분석하는 접근을 말한다.

## 왜 중요한가

전통적 CDW가 병원 내부 시스템 데이터에 집중한다면, 빅데이터는 병원 밖에서 생성되는 데이터까지 포괄한다는 점에서 범위가 더 넓다.

## 선수 개념

- [임상데이터웨어하우스(활용 관점)](s09-clinical-data-warehouse-use.md)

## 핵심 개념

- 다양성(Variety): 정형(검사 수치)뿐 아니라 비정형(진료 노트, 영상) 데이터까지 포함
- 규모(Volume): 웨어러블 기기 등에서 실시간으로 생성되는 대량 데이터
- 새로운 품질 과제: [Chapter 9](../chapter-09/s01-definition-of-data-quality.md)에서 다룬 품질 차원이 비정형·대량 데이터에서는 더 까다롭게 적용됨

## 상세 설명

빅데이터는 전통적 CDW보다 다루는 데이터의 종류와 양이 훨씬 많아, [데이터 품질](../chapter-09/s01-definition-of-data-quality.md)을 관리하기가 더 어렵다. 예를 들어 웨어러블 기기의 심박수 데이터는 병원 검사만큼 정확하지 않을 수 있어, 이런 데이터를 CDW의 임상 데이터와 같은 신뢰도로 취급해서는 안 된다.

## 비교표 또는 흐름

| 구분 | 전통적 CDW | 의료 빅데이터 |
|---|---|---|
| 데이터 출처 | 병원 내부 시스템 | 병원 내외부(웨어러블, 유전체 등) |
| 형태 | 주로 정형 데이터 | 정형+비정형 데이터 |
| 품질 신뢰도 | 상대적으로 높음 | 출처에 따라 편차가 큼 |

## 실무 사례

한 연구팀이 웨어러블 기기의 심박수 데이터를 병원 EMR 데이터와 결합해 분석했으나, 웨어러블 데이터의 정확도가 병원 검사만큼 높지 않다는 것을 고려해 결과를 신중하게 해석한 사례가 있다.

## 국가시험 포인트

- 의료 빅데이터와 전통적 CDW의 범위 차이를 확인하는 문제

## 자주 하는 실수

- 웨어러블 기기 등 병원 외부 데이터를 병원 임상 데이터와 동일한 신뢰도로 취급하는 것

## 관련 법령·표준

이 Topic은 활용 목적 개념으로 특정 법령에 근거하지 않는다.

## AI Note

빅데이터는 AI 모델 학습의 주요 원천이 되는 경우가 많으며, 이때 [AI 학습데이터 품질](../chapter-09/s16-ai-training-data-quality.md)에서 다룬 대표성·라벨링 품질 문제가 그대로 적용된다.

## 핵심 요약

- 의료 빅데이터는 병원 내외부의 다양하고 대량인 데이터를 포괄한다.
- 출처에 따라 데이터 신뢰도가 다를 수 있어 결합 분석 시 주의가 필요하다.

## 플래시카드

1. Q. 빅데이터가 전통적 CDW보다 넓게 포괄하는 데이터는? / A. 웨어러블, 유전체 등 병원 외부에서 생성되는 데이터

## 연습문제

- Q-HIM-000271 (OX)

## 참고문헌

- REF-SECONDARY-DIGITAL-HEALTH-001 — 디지털 헬스·AI 직무 변화 일반 동향 (status: located)
