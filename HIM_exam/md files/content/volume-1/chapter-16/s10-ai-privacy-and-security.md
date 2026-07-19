---
id: HIM-V1-C16-S10-T001
slug: ai-privacy-and-security
title: 의료 AI와 개인정보·보안
title_en: Medical AI Privacy and Security
volume: 1
chapter: 16
section: 10
order: 1
status: drafting
difficulty: intermediate
importance: A
exam_frequency: unknown
estimated_minutes: 8
prerequisites:
  - HIM-V1-C16-S09-T001
  - HIM-V1-C14-S08-T001
related_topics:
  - HIM-V1-C16-S11-T001
tags:
  - 의료AI
  - 개인정보
  - 보안
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-TEXTBOOK-MEDICAL-AI-001
assets: []
questions:
  - Q-HIM-000381
  - Q-HIM-000382
---

# 의료 AI와 개인정보·보안

## 학습목표

1. 의료 AI 학습·운영 과정에서 발생하는 개인정보 위험을 설명할 수 있다.
2. [개인정보 보호법](../chapter-14/s08-personal-information-protection-law.md)에서 다룬 원칙이 AI 맥락에서 어떻게 적용되는지 설명할 수 있다.

## 한 문장 정의

의료 AI와 개인정보·보안은 AI 모델의 학습·운영 과정에서 환자 개인정보가 노출되거나 재식별될 위험을 관리하는 영역을 말한다.

## 왜 중요한가

AI 모델은 대량의 환자 데이터를 학습에 사용하므로, 비식별화가 불충분하면 모델 자체나 모델의 출력을 통해 개인정보가 재식별될 위험이 있다.

## 선수 개념

- [설명가능성](s09-explainability.md)
- [개인정보 보호법](../chapter-14/s08-personal-information-protection-law.md)

## 핵심 개념

- 재식별(Re-identification): 비식별화된 데이터에서 개인을 다시 특정할 수 있게 되는 위험
- 모델 역추론(Model Inversion): AI 모델의 출력을 분석해 학습에 사용된 원본 데이터를 추정하려는 시도
- 접근 통제: AI 시스템에 대한 접근 권한을 제한하는 보안 조치

## 상세 설명

[개인정보 보호법](../chapter-14/s08-personal-information-protection-law.md)에서 다룬 비식별화 원칙은 AI 학습데이터에도 그대로 적용되지만, AI 특유의 위험도 추가된다. 예를 들어 모델 역추론 공격은 모델의 출력 패턴을 분석해 학습에 사용된 특정 환자의 정보를 추정하려는 시도로, 전통적인 데이터베이스 유출과는 다른 새로운 위험 유형이다. 따라서 AI 시스템은 학습데이터 비식별화뿐 아니라, 모델 자체에 대한 접근 통제와 출력 모니터링도 함께 고려해야 한다.

## 비교표 또는 흐름

| 위험 유형 | 내용 |
|---|---|
| 재식별 | 비식별화된 데이터에서 개인 특정 |
| 모델 역추론 | 모델 출력으로 원본 학습데이터 추정 |
| 대응 | 비식별화 강화 + 접근 통제 + 출력 모니터링 |

## 실무 사례

한 의료기관이 AI 모델 개발 시 학습데이터 비식별화뿐 아니라 모델 접근 권한을 개발팀 내 소수로 제한하고 출력 로그를 정기 점검하는 보안 절차를 마련한 사례가 있다.

## 국가시험 포인트

- 전통적 개인정보 보호 원칙과 AI 특유의 위험(모델 역추론)을 구분하는 문제

## 자주 하는 실수

- 학습데이터만 비식별화하면 AI 모델 자체는 안전하다고 오해하는 것

## 관련 법령·표준

- [개인정보 보호법](../chapter-14/s08-personal-information-protection-law.md)에서 다룬 원칙이 이 영역에도 적용된다(이 세션에서 AI 특화 조항은 원문 대조하지 않았으므로 검증 필요).

## AI Note

AI 시스템의 개인정보 위험은 학습데이터 단계뿐 아니라 모델 운영 단계에서도 지속적으로 관리해야 한다.

## 핵심 요약

- 의료 AI는 재식별과 모델 역추론이라는 개인정보 위험을 함께 관리해야 한다.
- 비식별화, 접근 통제, 출력 모니터링이 핵심 대응 방법이다.

## 플래시카드

1. Q. 모델의 출력을 분석해 학습에 사용된 원본 데이터를 추정하는 위험은? / A. 모델 역추론(Model Inversion)
2. Q. 비식별화된 데이터에서 개인을 다시 특정할 수 있게 되는 위험은? / A. 재식별(Re-identification)

## 연습문제

- Q-HIM-000381 (객관식)
- Q-HIM-000382 (OX)

## 참고문헌

- REF-TEXTBOOK-MEDICAL-AI-001 — 의료 AI 개념 개괄 (status: located)
