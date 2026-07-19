---
id: HIM-V1-C16-S06-T001
slug: clinical-nlp
title: 임상 자연어처리
title_en: Clinical Natural Language Processing
volume: 1
chapter: 16
section: 6
order: 1
status: drafting
difficulty: intermediate
importance: A
exam_frequency: unknown
estimated_minutes: 8
prerequisites:
  - HIM-V1-C16-S05-T001
related_topics:
  - HIM-V1-C16-S07-T001
tags:
  - 의료AI
  - 자연어처리
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-TEXTBOOK-MEDICAL-AI-001
assets: []
questions:
  - Q-HIM-000373
  - Q-HIM-000374
---

# 임상 자연어처리

## 학습목표

1. 임상 자연어처리(NLP)의 정의와 대표적 활용 사례를 설명할 수 있다.
2. 비정형 텍스트(자유 서술 기록)에서 구조화된 정보를 추출하는 과정의 의의를 설명할 수 있다.

## 한 문장 정의

임상 자연어처리는 의무기록의 자유 서술문 등 비정형 텍스트에서 진단명, 증상, 약물 등 구조화된 정보를 추출·분석하는 AI 기술이다.

## 왜 중요한가

의무기록의 상당 부분이 자유 서술 형태로 작성되므로, 이를 구조화된 데이터로 자동 변환할 수 있으면 통계·연구·질 관리에 활용할 수 있는 데이터의 범위가 크게 넓어진다.

## 선수 개념

- [의료영상 AI](s05-medical-imaging-ai.md)

## 핵심 개념

- 임상 NLP: 자유 서술 의무기록에서 정보를 추출하는 기술
- 개체명 인식(Named Entity Recognition): 텍스트에서 진단명·약물명·증상 등을 식별
- 비정형 데이터(Unstructured Data)의 구조화

## 상세 설명

의사의 경과기록, 간호기록 등은 대부분 자유 서술문(비정형 데이터)으로 작성된다. 임상 NLP는 이런 텍스트에서 개체명 인식 기술을 이용해 진단명, 증상, 약물, 검사 결과 등을 자동으로 식별하고 구조화된 필드로 변환한다. 이렇게 구조화된 데이터는 [의료영상 AI](s05-medical-imaging-ai.md)나 임상예측 모델의 입력 데이터로도 활용될 수 있어, 여러 AI 영역이 서로 연결되어 작동하는 경우가 많다.

## 비교표 또는 흐름

| 단계 | 내용 |
|---|---|
| 원문 텍스트 | 자유 서술 의무기록 |
| 개체명 인식 | 진단명·약물명·증상 등 식별 |
| 구조화 | 필드 단위 데이터로 변환 |

## 실무 사례

한 병원이 퇴원요약지의 자유 서술문에서 NLP로 진단명을 자동 추출해 통계 코딩 작업을 보조하는 시스템을 도입한 사례가 있다.

## 국가시험 포인트

- 임상 NLP의 정의와 비정형 데이터 구조화 개념을 확인하는 문제

## 자주 하는 실수

- NLP가 추출한 정보를 검수 없이 그대로 확정 데이터로 사용하는 것

## 관련 법령·표준

이 Topic은 개념 설명으로 특정 법령에 근거하지 않는다.

## AI Note

NLP가 자동 추출한 정보는 검수 과정을 거쳐야 하며, 오추출 가능성을 항상 고려해야 한다.

## 핵심 요약

- 임상 NLP는 비정형 의무기록에서 구조화된 정보를 추출하는 기술이다.
- 개체명 인식이 핵심 기법이며, 추출 결과는 검수가 필요하다.

## 플래시카드

1. Q. 텍스트에서 진단명·약물명 등을 식별하는 기술은? / A. 개체명 인식(Named Entity Recognition)
2. Q. 자유 서술문처럼 정형화되지 않은 데이터를 무엇이라 하는가? / A. 비정형 데이터

## 연습문제

- Q-HIM-000373 (객관식)
- Q-HIM-000374 (OX)

## 참고문헌

- REF-TEXTBOOK-MEDICAL-AI-001 — 의료 AI 개념 개괄 (status: located)
