---
id: HIM-V1-C09-S15-T001
slug: data-governance-roles
title: 데이터 거버넌스(역할과 책임 관점)
title_en: Data Governance — Roles and Responsibilities
volume: 1
chapter: 9
section: 15
order: 1
status: drafting
difficulty: advanced
importance: B
exam_frequency: unknown
estimated_minutes: 7
prerequisites:
  - HIM-V1-C03-S11-T001
related_topics:
  - HIM-V1-C09-S16-T001
tags:
  - 데이터품질
  - 데이터거버넌스
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-TEXTBOOK-DATA-QUALITY-001
assets: []
questions:
  - Q-HIM-000259
---

# 데이터 거버넌스(역할과 책임 관점)

## 학습목표

1. [데이터 거버넌스](../chapter-03/s11-data-governance-duties.md)의 개념을 넘어, 데이터 오너(owner)와 데이터 스튜어드(steward)의 역할 차이를 설명할 수 있다.

## 한 문장 정의

데이터 거버넌스의 역할 체계는 데이터 정책을 최종 승인하는 데이터 오너와, 실무에서 품질을 관리하는 데이터 스튜어드로 나뉘는 경우가 많다.

## 왜 중요한가

역할이 명확하지 않으면 [데이터 거버넌스](../chapter-03/s11-data-governance-duties.md)에서 다룬 "규칙 수립"이 누구의 책임인지 불분명해진다.

## 선수 개념

- [데이터 거버넌스](../chapter-03/s11-data-governance-duties.md)

## 핵심 개념

- 데이터 오너(Data Owner): 특정 데이터 영역(예: 진단 정보)에 대한 정책 결정 권한을 가진 책임자(보통 해당 임상 부서장 등)
- 데이터 스튜어드(Data Steward): 오너가 정한 정책을 실무에서 관리·감시하는 실행자(보건의료정보관리사가 주로 담당)
- 역할 분리의 이유: 정책 결정과 실행을 분리해 책임 소재를 명확히 함

## 상세 설명

데이터 오너는 "환자 체중은 kg 단위로 기록한다"와 같은 규칙을 정할 권한을 가지지만, 실제로 그 규칙이 지켜지는지 매일 확인하는 것은 데이터 스튜어드의 역할이다. 보건의료정보관리사는 대개 데이터 스튜어드로서 이 Chapter에서 다룬 프로파일링, 오류 탐지 등의 실무를 수행한다.

## 비교표 또는 흐름

| 역할 | 책임 |
|---|---|
| 데이터 오너 | 정책 결정, 최종 승인 |
| 데이터 스튜어드 | 실무 관리, 규칙 준수 감시 |

## 실무 사례

한 병원에서 특정 데이터 항목의 정의를 두고 두 부서가 다르게 이해해 갈등이 생겼을 때, 명확히 지정된 데이터 오너가 최종 정의를 결정해 갈등을 해소한 사례가 있다.

## 국가시험 포인트

- 데이터 오너와 데이터 스튜어드의 역할 차이를 확인하는 문제

## 자주 하는 실수

- 보건의료정보관리사를 데이터 오너로 오해하는 것(대개 스튜어드 역할을 수행)

## 관련 법령·표준

이 Topic은 조직 관리 개념으로 특정 법령에 근거하지 않는다.

## AI Note

해당 없음.

## 핵심 요약

- 데이터 오너는 정책 결정 권한을, 데이터 스튜어드는 실무 관리 역할을 가진다.
- 보건의료정보관리사는 대개 데이터 스튜어드 역할을 수행한다.

## 플래시카드

1. Q. 정책을 최종 결정하는 역할과 실무를 관리하는 역할은 각각 무엇인가? / A. 데이터 오너(정책 결정), 데이터 스튜어드(실무 관리)

## 연습문제

- Q-HIM-000259 (OX)

## 참고문헌

- REF-TEXTBOOK-DATA-QUALITY-001 — 보건의료정보 품질 특성 개괄 (status: located)
