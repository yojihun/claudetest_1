---
id: HIM-V1-C09-S02-T001
slug: accuracy-measurement
title: 정확성(측정 지표 관점)
title_en: Accuracy — Measurement Perspective
volume: 1
chapter: 9
section: 2
order: 1
status: drafting
difficulty: intermediate
importance: B
exam_frequency: unknown
estimated_minutes: 6
prerequisites:
  - HIM-V1-C01-S14-T001
related_topics:
  - HIM-V1-C09-S13-T001
tags:
  - 데이터품질
  - 정확성
content_type:
  - concept
  - formula
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-TEXTBOOK-DATA-QUALITY-001
assets: []
questions:
  - Q-HIM-000239
---

# 정확성(측정 지표 관점)

## 학습목표

1. 정확성의 개념 정의는 [정확성·완전성·적시성](../chapter-01/s14-accuracy-completeness-timeliness.md)을 참고하고, 이 Topic에서는 정확성을 실제로 어떻게 측정·수치화하는지를 다룬다.

## 한 문장 정의

정확성 측정은 전체 확인 대상 중 실제 사실과 일치하는 항목의 비율(정확도율)로 수치화할 수 있다.

## 왜 중요한가

"정확성이 중요하다"는 선언만으로는 관리할 수 없다. 수치로 측정해야 개선 여부를 추적할 수 있다.

## 선수 개념

- [정확성·완전성·적시성](../chapter-01/s14-accuracy-completeness-timeliness.md)

## 핵심 개념

- 정확도율 = (표본 중 사실과 일치하는 항목 수 ÷ 전체 표본 수) × 100
- 측정 방법: 표본 추출 후 원본 자료(검사 결과지, 처방전 등)와 대조
- 정기 측정: 한 번의 측정이 아니라 주기적으로 측정해 추세를 파악

## 상세 설명

예를 들어 특정 진단 코드 100건을 표본으로 뽑아 원본 기록과 대조했을 때 95건이 일치했다면 정확도율은 95%다. 이 수치를 매달 추적하면 정확성이 개선되고 있는지 악화되고 있는지 판단할 수 있다.

## 비교표 또는 흐름

| 요소 | 내용 |
|---|---|
| 분자 | 사실과 일치하는 표본 수 |
| 분모 | 전체 표본 수 |
| 활용 | 주기적 추세 관리 |

## 실무 사례

한 병원이 매월 100건의 코딩 표본을 원본과 대조해 정확도율을 추적한 결과, 신규 코더 배치 이후 정확도율이 일시적으로 낮아졌다가 교육 후 회복된 추이를 확인할 수 있었다.

## 국가시험 포인트

- 정확도율의 분자·분모 구성을 확인하는 문제

## 자주 하는 실수

- 한 번의 측정만으로 정확성이 충분하다고 판단하는 것(추세 관리 필요)

## 관련 법령·표준

이 Topic은 데이터 품질 관리 방법론으로 특정 법령에 근거하지 않는다.

## AI Note

해당 없음.

## 핵심 요약

- 정확성은 정확도율(일치 표본 수÷전체 표본 수)로 수치화해 관리한다.
- 정기적으로 측정해 추세를 파악해야 한다.

## 플래시카드

1. Q. 정확도율의 분모는? / A. 전체 표본 수

## 연습문제

- Q-HIM-000239 (OX)

## 참고문헌

- REF-TEXTBOOK-DATA-QUALITY-001 — 보건의료정보 품질 특성 개괄 (status: located)
