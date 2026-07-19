---
id: HIM-V1-C07-S14-T001
slug: user-authentication
title: 사용자 인증
title_en: User Authentication
volume: 1
chapter: 7
section: 14
order: 1
status: drafting
difficulty: intermediate
importance: A
exam_frequency: unknown
estimated_minutes: 7
prerequisites:
  - HIM-V1-C03-S07-T001
related_topics:
  - HIM-V1-C07-S15-T001
tags:
  - 의료정보시스템
  - 사용자인증
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-LAW-PERSONAL-INFO-PROTECTION-ACT-001
assets: []
questions:
  - Q-HIM-000206
  - Q-HIM-000207
---

# 사용자 인증

## 학습목표

1. 사용자 인증의 방식과 최소권한 원칙과의 연결을 설명할 수 있다.
2. 계정 공유가 왜 금지되는지 설명할 수 있다.

## 한 문장 정의

사용자 인증은 시스템에 접근하려는 사람이 실제로 본인인지 확인하고, 그 사람의 직무에 맞는 접근 권한만 부여하는 절차이다.

## 왜 중요한가

[개인정보 보호](../chapter-03/s07-privacy-protection-duties.md)에서 다룬 최소권한 원칙은 사용자 인증 체계를 통해 실제로 구현된다.

## 선수 개념

- [개인정보 보호](../chapter-03/s07-privacy-protection-duties.md)

## 핵심 개념

- 인증 방식: 비밀번호, 생체인식, 다단계 인증 등
- 권한 부여(authorization): 직무에 따라 접근 가능한 정보 범위를 다르게 설정
- 계정 공유 금지: 여러 사람이 하나의 계정을 공유하면 [인증과 서명](../chapter-05/s05-authentication-and-signatures.md)에서 다룬 책임 추적이 불가능해짐

## 상세 설명

인증(누구인지 확인)과 권한 부여(무엇을 할 수 있는지 결정)는 서로 다른 단계지만 함께 작동해야 최소권한 원칙이 실현된다. 계정을 공유하면 시스템 로그에 남는 사용자와 실제 행위자가 달라져, 문제가 발생했을 때 누구의 책임인지 추적할 수 없게 된다. 이는 [정보 제공](../chapter-03/s06-release-of-information.md)이나 [인증과 서명](../chapter-05/s05-authentication-and-signatures.md)에서 다룬 대리 서명 문제와 근본적으로 같은 위험이다.

## 비교표 또는 흐름

| 단계 | 역할 |
|---|---|
| 인증(Authentication) | 사용자가 실제로 본인인지 확인 |
| 권한 부여(Authorization) | 확인된 사용자에게 직무에 맞는 접근 범위 설정 |

## 실무 사례

한 병원에서 바쁜 업무 중 동료의 계정을 빌려 시스템에 접근한 사례가 발견되어, 이후 접근 기록의 실제 행위자를 확인할 수 없는 문제가 생겼다. 이는 계정 공유가 책임 추적을 근본적으로 무너뜨린다는 것을 보여준다.

## 국가시험 포인트

- 인증과 권한 부여의 차이를 구분하는 문제
- 계정 공유의 위험성을 판단하는 사례형 문제

## 자주 하는 실수

- 인증(본인 확인)과 권한 부여(접근 범위 설정)를 같은 것으로 혼동하는 것
- 계정 공유를 업무 효율을 위한 사소한 편의로 여기는 것

## 관련 법령·표준

> 기준: 개인정보 보호법상 접근통제·안전조치 관련 규정(REF-LAW-PERSONAL-INFO-PROTECTION-ACT-001, 정확한 조번호는 검증 필요)

## AI Note

생체인식(지문, 얼굴 등) 기반 인증이 확산되고 있으나, 생체정보 자체도 민감정보이므로 별도의 보호조치가 필요하다.

## 핵심 요약

- 인증은 본인 확인, 권한 부여는 접근 범위 설정으로 서로 다른 단계다.
- 계정 공유는 책임 추적을 불가능하게 하므로 금지된다.

## 플래시카드

1. Q. 인증과 권한 부여의 차이는? / A. 인증은 본인 확인, 권한 부여는 접근 범위 설정
2. Q. 계정 공유가 위험한 이유는? / A. 실제 행위자를 추적할 수 없게 되기 때문

## 연습문제

- Q-HIM-000206 (객관식)
- Q-HIM-000207 (OX)

## 참고문헌

- REF-LAW-PERSONAL-INFO-PROTECTION-ACT-001 — 개인정보 보호법 관련 규정 (status: located, 조번호 검증 필요)
