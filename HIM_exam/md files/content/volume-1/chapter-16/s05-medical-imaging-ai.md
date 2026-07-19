---
id: HIM-V1-C16-S05-T001
slug: medical-imaging-ai
title: 의료영상 AI
title_en: Medical Imaging AI
volume: 1
chapter: 16
section: 5
order: 1
status: drafting
difficulty: intermediate
importance: A
exam_frequency: unknown
estimated_minutes: 8
prerequisites:
  - HIM-V1-C16-S04-T001
related_topics:
  - HIM-V1-C16-S06-T001
tags:
  - 의료AI
  - 의료영상
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-TEXTBOOK-MEDICAL-AI-001
assets: []
questions:
  - Q-HIM-000371
  - Q-HIM-000372
---

# 의료영상 AI

## 학습목표

1. 의료영상 AI의 역할과 한계를 설명할 수 있다.
2. 의료영상 AI 결과에 대한 최종 판독 책임이 누구에게 있는지 설명할 수 있다.

## 한 문장 정의

의료영상 AI는 X-ray, CT, MRI 등 의료영상에서 병변이나 이상 소견을 검출·분류하도록 학습된 AI로, 영상의학과 전문의의 판독을 보조하는 도구이다.

## 왜 중요한가

의료영상 AI의 검출 결과를 최종 판독으로 오인하면, 놓친 병변이나 오탐(false positive)에 대한 책임 소재가 불명확해질 수 있다.

## 선수 개념

- [임상예측 모델](s04-clinical-prediction-models.md)

## 핵심 개념

- 의료영상 AI: 영상에서 병변·이상 소견을 검출하도록 학습된 AI
- 판독 보조(Assistive Reading): AI가 후보 소견을 제시하고, 전문의가 최종 판독
- 위양성(False Positive)·위음성(False Negative): 영상 AI의 오류 유형

## 상세 설명

의료영상 AI는 [임상예측 모델](s04-clinical-prediction-models.md)과 마찬가지로 지도학습 기반으로 개발되는 경우가 많으며, 대량의 판독 완료 영상(라벨이 붙은 영상)으로 학습한다. 그러나 학습에 사용된 영상 데이터의 촬영 장비, 환자 인구 구성이 실제 임상 환경과 다르면 성능이 저하될 수 있다. 최종 판독과 진단 책임은 항상 영상의학과 전문의 등 자격을 갖춘 의료진에게 있으며, AI는 보조 도구로 자리매김한다.

## 비교표 또는 흐름

| 오류 유형 | 의미 | 위험 |
|---|---|---|
| 위양성 | 병변이 없는데 있다고 판단 | 불필요한 추가 검사 |
| 위음성 | 병변이 있는데 없다고 판단 | 진단 지연 |

## 실무 사례

한 병원이 흉부 X-ray AI 판독 보조 도구를 도입하면서, AI가 제시한 소견을 영상의학과 전문의가 반드시 재확인하도록 판독 프로세스를 설계한 사례가 있다.

## 국가시험 포인트

- 의료영상 AI의 역할(보조)과 최종 판독 책임 소재를 확인하는 문제

## 자주 하는 실수

- 의료영상 AI의 검출 결과를 확정 진단으로 오인하는 것

## 관련 법령·표준

이 Topic은 개념 설명으로 특정 법령에 근거하지 않는다.

## AI Note

의료영상 AI는 판독 보조 도구이며, 최종 판독 책임은 자격을 갖춘 의료진에게 있다.

## 핵심 요약

- 의료영상 AI는 영상 판독을 보조하는 도구이며 최종 판독 책임은 전문의에게 있다.
- 위양성과 위음성 오류 유형을 이해해야 한다.

## 플래시카드

1. Q. 병변이 없는데 있다고 판단하는 오류는? / A. 위양성(False Positive)
2. Q. 의료영상 AI 검출 결과의 최종 판독 책임은 누구에게 있는가? / A. 영상의학과 전문의 등 자격을 갖춘 의료진

## 연습문제

- Q-HIM-000371 (객관식)
- Q-HIM-000372 (OX)

## 참고문헌

- REF-TEXTBOOK-MEDICAL-AI-001 — 의료 AI 개념 개괄 (status: located)
