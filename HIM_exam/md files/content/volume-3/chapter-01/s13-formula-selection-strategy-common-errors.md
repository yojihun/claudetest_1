---
id: HIM-V3-C01-S13-T001
slug: formula-selection-strategy-common-errors
title: 공식 선택 전략과 계산 오류 분석
title_en: Formula Selection Strategy and Common Calculation Errors
volume: 3
chapter: 1
section: 13
order: 1
status: drafting
difficulty: advanced
importance: A
exam_frequency: unknown
estimated_minutes: 10
prerequisites:
  - HIM-V3-C01-S12-T001
related_topics: []
tags:
  - 병원통계
  - 계산문제
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-TEXTBOOK-DATA-QUALITY-001
assets: []
questions:
  - Q-HIM-000609
  - Q-HIM-000610
---

# 공식 선택 전략과 계산 오류 분석

## 학습목표

1. 사례형 문제에서 어떤 공식([병상이용률](s08-bed-occupancy-rate.md), [평균재원일수](s09-average-length-of-stay.md), [병상회전율](s10-bed-turnover-rate-interval.md) 등)을 적용해야 할지 판단하는 전략을 설명할 수 있다.
2. 이 Part에서 다룬 공식들의 대표적인 계산 오류 유형을 정리할 수 있다.

## 한 문장 정의

이 Topic은 이 Part에서 배운 여러 병원통계 공식을 사례형 문제에서 어떻게 구분해 적용할지 판단하는 전략과, 자주 발생하는 계산 오류 유형을 종합한다.

## 왜 중요한가

여러 공식이 비슷한 용어(환자일수, 재원일수, 퇴원환자 수 등)를 공유하기 때문에, 문제에서 요구하는 지표가 무엇인지 정확히 파악하지 못하면 엉뚱한 공식을 적용하는 오류가 발생하기 쉽다.

## 선수 개념

- [산과·사망·감염통계](s12-obstetric-mortality-infection-statistics.md)

## 핵심 개념

- 공식 선택의 첫 단계: 문제가 "재원 중 관점"(병상이용률)을 묻는지 "퇴원 완료 관점"(평균재원일수)을 묻는지 구분
- 공식 선택의 두 번째 단계: 분자·분모에 들어갈 값이 문제에서 제시된 어떤 숫자와 대응하는지 확인
- 대표적 계산 오류: 분자·분모를 뒤바꾸는 오류, 퇴원환자 수와 환자일수를 혼동하는 오류, 기간(일수) 반영을 누락하는 오류

## 상세 설명

병원통계 사례형 문제를 풀 때는 먼저 문제가 묻는 지표가 이 Part에서 배운 어떤 개념에 해당하는지 식별해야 한다. "병상이 얼마나 채워져 있었는가"를 물으면 [병상이용률](s08-bed-occupancy-rate.md), "환자가 평균 며칠 입원했는가"를 물으면 [평균재원일수](s09-average-length-of-stay.md), "병상 하나가 몇 명에게 사용되었는가"를 물으면 [병상회전율](s10-bed-turnover-rate-interval.md)이다. 이렇게 지표를 식별한 후에는 문제에 제시된 숫자들(환자일수, 퇴원환자 수, 가동병상수, 기간 일수)을 정확한 공식 위치(분자/분모)에 대입해야 하며, 특히 병상이용률 계산 시 분모에 "가동병상수 × 기간 일수"를 곱하는 것을 빠뜨리는 오류가 자주 발생한다.

## 비교표 또는 흐름

| 문제가 묻는 것 | 적용할 공식 |
|---|---|
| 병상이 얼마나 채워져 있었는가 | 병상이용률 |
| 환자가 평균 며칠 입원했는가 | 평균재원일수 |
| 병상 하나가 몇 명에게 사용되었는가 | 병상회전율 |

## 실무 사례

병원 통계 담당자가 신입 직원에게 계산 문제를 검토시킬 때, 가장 먼저 "이 문제가 재원 중 관점인지 퇴원 완료 관점인지" 구분하는 습관을 들이도록 지도하는 것이 오류를 줄이는 데 효과적이다.

## 국가시험 포인트

- 사례형 문제에서 적절한 공식을 선택하는 판단 전략과 대표적 계산 오류 유형을 확인하는 문제

## 자주 하는 실수

- 문제에 제시된 숫자를 지표 구분 없이 아무 공식에나 대입하는 것

## 관련 법령·표준

이 Topic은 문제 풀이 전략으로 특정 법령에 근거하지 않는다.

## AI Note

이 Topic은 문제 풀이 전략 설명으로 AI 관련 내용이 없다.

## 핵심 요약

- 사례형 문제를 풀 때는 먼저 어떤 지표를 묻는지(재원 중 vs 퇴원 완료 등) 식별해야 한다.
- 분자·분모 혼동과 기간 반영 누락이 가장 흔한 계산 오류다.

## 플래시카드

1. Q. 병상이용률 계산에서 가장 흔히 빠뜨리는 실수는? / A. 분모에서 "가동병상수 × 기간 일수"를 곱하는 것을 빠뜨리는 것

## 연습문제

- Q-HIM-000609 (사례형)
- Q-HIM-000610 (OX)

## 참고문헌

- REF-TEXTBOOK-DATA-QUALITY-001 — 데이터 품질·통계 기초 개괄
