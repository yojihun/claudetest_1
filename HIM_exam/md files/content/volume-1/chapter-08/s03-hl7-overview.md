---
id: HIM-V1-C08-S03-T001
slug: hl7-overview
title: HL7 개요
title_en: HL7 Overview
volume: 1
chapter: 8
section: 3
order: 1
status: drafting
difficulty: basic
importance: A
exam_frequency: unknown
estimated_minutes: 7
prerequisites:
  - HIM-V1-C08-S02-T001
related_topics:
  - HIM-V1-C08-S04-T001
tags:
  - 의료정보표준
  - HL7
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-STANDARD-HL7-001
assets: []
questions:
  - Q-HIM-000218
  - Q-HIM-000219
---

# HL7 개요

## 학습목표

1. HL7의 정의와 대표적인 하위 표준(v2, CDA, FHIR)을 나열할 수 있다.

## 한 문장 정의

HL7(Health Level Seven)은 의료정보 교환을 위한 국제 표준화 기구이자 그 기구가 만든 표준군의 이름으로, v2, CDA, FHIR 등 여러 형태로 발전해왔다.

## 왜 중요한가

이후 다룰 HL7 v2, CDA, FHIR은 모두 HL7이라는 큰 우산 아래 있는 서로 다른 시기·목적의 표준이다. 이 관계를 먼저 이해해야 각각을 혼동하지 않는다.

## 선수 개념

- [구문·의미·조직적 상호운용성](s02-syntactic-semantic-organizational-interoperability.md)

## 핵심 개념

- HL7 v2: 초기부터 널리 쓰인 메시지 기반 표준(다음 Topic에서 다룸)
- CDA(Clinical Document Architecture): 임상 문서를 구조화하는 표준(다음다음 Topic에서 다룸)
- FHIR: 웹 기술과 Resource 개념을 활용한 최신 표준(이후 Topic에서 다룸)

## 상세 설명

HL7은 시간이 지나며 여러 세대의 표준을 만들어왔다. v2는 오래되었지만 여전히 널리 쓰이는 메시지 형식이고, CDA는 문서 단위의 구조화에 초점을 두며, FHIR은 현대 웹 기술을 활용해 더 유연한 연동을 지향한다. 세 표준은 경쟁 관계라기보다, 병원마다 필요에 따라 여러 세대의 표준이 공존하는 경우가 많다.

## 비교표 또는 흐름

| 표준 | 특징 | 상대적 시기 |
|---|---|---|
| HL7 v2 | 메시지 기반, 널리 보급 | 초기부터 현재까지 사용 |
| CDA | 문서 구조화 | 중간 세대 |
| FHIR | 웹 기술·Resource 기반 | 최신 세대 |

## 실무 사례

한 병원이 기존 시스템은 HL7 v2로, 신규 모바일 서비스는 FHIR로 연동하는 방식을 함께 사용하는 사례가 있다. 이는 여러 세대의 표준이 한 병원 내에서도 공존할 수 있음을 보여준다.

## 국가시험 포인트

- HL7과 그 하위 표준(v2, CDA, FHIR)의 관계를 확인하는 문제

## 자주 하는 실수

- HL7, v2, CDA, FHIR을 서로 완전히 다른 별개의 기구로 오해하는 것(모두 HL7이라는 하나의 기구에서 나온 표준)

## 관련 법령·표준

이 Topic은 국제 표준 개관으로 특정 법령에 근거하지 않는다.

## AI Note

해당 없음.

## 핵심 요약

- HL7은 의료정보 교환 표준을 만드는 기구이며, v2·CDA·FHIR 등 여러 세대의 표준을 포함한다.
- 세 표준은 병원 내에서 공존할 수 있다.

## 플래시카드

1. Q. HL7의 세 대표적 하위 표준은? / A. v2, CDA, FHIR

## 연습문제

- Q-HIM-000218 (OX)
- Q-HIM-000219 (OX)

## 참고문헌

- REF-STANDARD-HL7-001 — HL7 표준군 개괄 (status: located)
