---
id: CASE-MR-000010
slug: ward-monthly-statistics-calculation
title: 의료통계 통합 사례 — 병동 월간 통계 산출
title_en: Medical Statistics Integrated Case — Ward Monthly Statistics Calculation
volume: 4
chapter: 11
case_number: 1
order: 1
status: drafting
difficulty: advanced
importance: A
exam_frequency: unknown
estimated_minutes: 18
deidentified: true
prerequisites:
  - CASE-MR-000002
related_topics:
  - HIM-V3-C01-S08-T001
  - HIM-V3-C01-S09-T001
  - HIM-V3-C01-S13-T001
tags:
  - 병원통계
  - 통계실무
  - 실무사례
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-TEXTBOOK-DATA-QUALITY-001
questions:
  - Q-HIM-000687
  - Q-HIM-000688
---

# 의료통계 통합 사례 — 병동 월간 통계 산출

## 사례 개요

이 사례는 허구의 내과 병동(가상, 실제 병동 아님)의 한 달간 운영 자료를 바탕으로, [공식 선택 전략과 계산 오류 분석](../../content/volume-3/chapter-01/s13-formula-selection-strategy-common-errors.md)에서 다룬 여러 공식을 실제 원자료에 적용해 병상이용률과 평균재원일수를 산출하는 연습을 한다.

## 원문 기록

> **병동 월간 운영 자료 (합성 사례, 실제 병동 아님)**
> 병동: 내과 병동(가상)
> 집계 기간: 20XX년 6월(30일)
> 가동병상수: 40개
> 이 기간 환자일수(누적 재원환자 수의 합): 960
> 이 기간 퇴원환자 수: 96명
> 이 기간 퇴원환자의 총 재원일수 합: 576일

## 핵심 용어

- 가동병상수: 실제로 환자를 받을 수 있도록 운영되는 병상 수([병상이용률](../../content/volume-3/chapter-01/s08-bed-occupancy-rate.md) 참고)
- 환자일수: 재원 중 관점의 누적 자료([재원환자·퇴원환자와 환자일수](../../content/volume-3/chapter-01/s07-inpatient-outpatient-census-service-days.md) 참고)
- 퇴원환자의 총 재원일수: 퇴원 완료 관점의 누적 자료([평균재원일수](../../content/volume-3/chapter-01/s09-average-length-of-stay.md) 참고)

## 시간순 재구성

이 사례는 개별 환자의 시간순 경과가 아니라, 한 달간 병동 전체의 누적 운영 자료를 다룬다. 자료 집계 기준일은 매일 자정이며, 6월 한 달(30일) 동안의 누적치가 제시되어 있다.

## 진단 및 처치 추출

이 사례는 개별 환자의 진단·처치가 아니라 병동 전체의 통계 자료를 다루므로, 이 항목은 해당하지 않는다.

## 기록 누락·모순 점검

- 이 자료에는 퇴원환자의 재원일수 합(576)을 퇴원환자 수(96)로 나눈 평균재원일수(6일)와, 환자일수(960)를 이용한 병상이용률 계산에 필요한 정보가 모두 포함되어 있어 계산에는 문제가 없음
- 다만 이 자료만으로는 병동 내 개별 환자의 특성(중증도 분포 등)은 알 수 없어, 통계 수치의 임상적 해석에는 추가 정보가 필요함

## 분류 또는 통계 적용

이 사례의 자료로 [병상이용률](../../content/volume-3/chapter-01/s08-bed-occupancy-rate.md)과 [평균재원일수](../../content/volume-3/chapter-01/s09-average-length-of-stay.md)를 각각 계산한다.

병상이용률 = 환자일수 ÷ (가동병상수 × 기간 일수) × 100 = 960 ÷ (40 × 30) × 100 = 80%

평균재원일수 = 퇴원환자의 총 재원일수 ÷ 퇴원환자 수 = 576 ÷ 96 = 6일

이 두 지표는 [공식 선택 전략과 계산 오류 분석](../../content/volume-3/chapter-01/s13-formula-selection-strategy-common-errors.md)에서 다룬 대로 서로 다른 관점(재원 중 vs 퇴원 완료)의 자료를 사용하므로, 이 사례처럼 두 지표를 함께 산출할 때는 각 공식에 맞는 정확한 자료(환자일수 vs 퇴원환자 재원일수)를 구분해 대입해야 한다.

## 법적·윤리적 고려

병원 통계는 병원 운영 의사결정과 정책 수립의 근거 자료로 사용되므로, 정확한 집계와 투명한 산출 근거 공개가 병원 운영의 신뢰성 확보에 중요하다.

## 연습문제

- Q-HIM-000687 (계산형)
- Q-HIM-000688 (OX)

## 상세 해설

이 사례는 하나의 원자료 세트에서 병상이용률과 평균재원일수라는 두 가지 서로 다른 지표를 산출하는 연습이다. 학습자가 흔히 하는 실수는 환자일수(960)를 평균재원일수 계산에 잘못 사용하거나, 퇴원환자 재원일수(576)를 병상이용률 계산에 잘못 사용하는 것이다. 이 사례는 각 지표가 요구하는 정확한 분자·분모 자료를 구분해 대입하는 능력을 확인한다.

## 참고문헌

- REF-TEXTBOOK-DATA-QUALITY-001 — 데이터 품질·통계 기초 개괄
