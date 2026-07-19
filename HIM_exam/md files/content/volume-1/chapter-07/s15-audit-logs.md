---
id: HIM-V1-C07-S15-T001
slug: audit-logs
title: 감사로그
title_en: Audit Logs
volume: 1
chapter: 7
section: 15
order: 1
status: drafting
difficulty: intermediate
importance: A
exam_frequency: unknown
estimated_minutes: 7
prerequisites:
  - HIM-V1-C07-S14-T001
related_topics:
  - HIM-V1-C03-S07-T001
tags:
  - 의료정보시스템
  - 감사로그
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-LAW-PERSONAL-INFO-PROTECTION-ACT-001
assets: []
questions:
  - Q-HIM-000208
  - Q-HIM-000209
---

# 감사로그

## 학습목표

1. 감사로그가 기록하는 정보의 종류를 설명할 수 있다.
2. 감사로그가 [개인정보 보호](../chapter-03/s07-privacy-protection-duties.md)에서 하는 역할을 설명할 수 있다.

## 한 문장 정의

감사로그는 시스템에 누가, 언제, 어떤 정보에, 어떤 방식으로 접근했는지를 자동으로 기록하는 로그이다.

## 왜 중요한가

감사로그는 [개인정보 보호](../chapter-03/s07-privacy-protection-duties.md)에서 다룬 접근 기록 감사 활동의 기술적 기반이다. 감사로그 없이는 비정상 접근을 탐지할 방법이 없다.

## 선수 개념

- [사용자 인증](s14-user-authentication.md)

## 핵심 개념

- 기록 항목: 접근자, 접근 시각, 접근한 정보(환자, 문서 유형), 수행한 작업(조회, 수정 등)
- 로그의 무결성: 로그 자체가 조작되지 않도록 별도로 보호
- 정기 점검: 로그를 정기적으로 분석해 비정상 패턴 탐지

## 상세 설명

감사로그는 "사후 확인"의 도구다. 사고가 발생하지 않았을 때는 눈에 띄지 않지만, 문제가 발생했을 때(무단 열람, 정보 유출 의심 등) 누가 무엇을 했는지 확인할 수 있는 유일한 근거가 된다. 이 때문에 로그 자체를 삭제하거나 수정할 수 없도록 별도로 강력하게 보호해야 한다.

## 비교표 또는 흐름

| 기록 항목 | 예시 |
|---|---|
| 접근자 | 사용자 계정 |
| 접근 시각 | 2026-07-19 14:32 |
| 접근한 정보 | 환자 A의 진료기록 |
| 수행한 작업 | 조회, 수정, 출력 등 |

## 실무 사례

[개인정보 보호](../chapter-03/s07-privacy-protection-duties.md)에서 다룬 사례처럼, 업무와 무관한 직원의 반복 조회는 감사로그 분석을 통해 발견되었다. 감사로그가 없었다면 이런 문제를 확인할 방법이 없었을 것이다.

## 국가시험 포인트

- 감사로그가 기록하는 항목을 나열하는 문제
- 감사로그 무결성 보호의 필요성을 확인하는 문제

## 자주 하는 실수

- 감사로그를 문제 발생 후에만 필요한 것으로 여기고 정기 점검을 소홀히 하는 것

## 관련 법령·표준

> 기준: 개인정보 보호법상 접속기록 보관·점검 관련 규정(REF-LAW-PERSONAL-INFO-PROTECTION-ACT-001, 정확한 조번호는 검증 필요)

## AI Note

AI 기반 로그 분석 도구가 대량의 로그에서 비정상 패턴을 자동으로 탐지하는 데 활용될 수 있으나, 최종 판단은 담당자의 조사가 필요하다.

## 핵심 요약

- 감사로그는 접근자, 시각, 대상, 작업 내용을 기록한다.
- 로그 자체의 무결성을 보호하고 정기적으로 점검해야 한다.

## 플래시카드

1. Q. 감사로그가 기록하는 대표적 항목 네 가지는? / A. 접근자, 접근 시각, 접근한 정보, 수행한 작업

## 연습문제

- Q-HIM-000208 (OX)
- Q-HIM-000209 (OX)

## 참고문헌

- REF-LAW-PERSONAL-INFO-PROTECTION-ACT-001 — 개인정보 보호법 관련 규정 (status: located, 조번호 검증 필요)
