---
id: CASE-MR-000014
slug: comprehensive-mock-practice
title: 종합 모의 실무 사례 — 대장암 진단부터 퇴원까지
title_en: Comprehensive Mock Practice Case — Colorectal Cancer from Diagnosis to Discharge
volume: 4
chapter: 15
case_number: 1
order: 1
status: drafting
difficulty: advanced
importance: A
exam_frequency: unknown
estimated_minutes: 20
deidentified: true
prerequisites:
  - CASE-MR-000007
  - CASE-MR-000009
  - CASE-MR-000010
  - CASE-MR-000012
  - CASE-MR-000013
related_topics:
  - HIM-V3-C02-S03-T001
  - HIM-V3-C03-S06-T001
  - HIM-V3-C01-S09-T001
tags:
  - 종합사례
  - 대장암
  - 실무사례
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-CLASSIFICATION-ICD-KCD-001
  - REF-TEXTBOOK-DATA-QUALITY-001
questions:
  - Q-HIM-000695
  - Q-HIM-000696
  - Q-HIM-000697
  - Q-HIM-000698
---

# 종합 모의 실무 사례 — 대장암 진단부터 퇴원까지

## 사례 개요

이 사례는 허구의 환자 "환자 M"(모든 식별정보는 합성됨)이 혈변을 주소로 내원해 대장암을 진단받고, 수술과 항암화학요법을 거쳐 퇴원하기까지의 전체 과정을 다룬다. 이 Volume IV에서 다룬 여러 실무 영역(기록 해석, 분류 코딩, 암등록, 통계, 개인정보, 보험청구)을 하나의 사례에서 종합적으로 적용하는 최종 연습이다.

## 원문 기록

> **응급실 내원 기록 (합성 사례, 실제 환자 아님)**
> 환자 ID: SYN-FINAL-0014 (가상)
> 내원일: 20XX-02-10
> C/C: 3주간 지속된 혈변, 체중 감소(1개월간 3kg)
>
> **입원 및 검사 기록 (02-11)**
> 대장내시경: 직장에서 궤양성 종괴 발견, 조직검사 시행
> 병리 결과(02-14): Adenocarcinoma, moderately differentiated, invasive
>
> **수술기록 (02-18)**
> 술식: Laparoscopic low anterior resection with lymph node dissection
> 수술 후 병기: T3N1M0
> 합병증: 없음
>
> **종양내과 기록 (03-10, 수술 3주 후)**
> Plan: Adjuvant chemotherapy (FOLFOX regimen) 시작
>
> **퇴원요약 (02-25)**
> 주진단: Rectal adenocarcinoma, stage III(추정)
> 시행 처치: Laparoscopic low anterior resection
> 퇴원 시 상태: 양호, 합병증 없이 회복, 항암화학요법은 외래에서 이어서 진행 예정
>
> **원무팀 청구 기록**
> 청구 진단명: "혈변"(단순 기재) — 수술 및 항암화학요법의 의학적 필요성 입증에 불충분하다는 이유로 1차 심사 보류

## 핵심 용어

- Low Anterior Resection: 저위전방절제술(직장암 수술의 대표적 술식)
- FOLFOX: 대장암에 흔히 사용되는 항암화학요법 병용요법의 명칭
- Adjuvant Chemotherapy: 수술 후 재발 방지를 위한 보조 항암화학요법

## 시간순 재구성

1. 02-10 — 혈변, 체중 감소로 응급실 내원
2. 02-11 — 입원, 대장내시경으로 직장 종괴 발견
3. 02-14 — 병리 결과: 선암종, 중분화도, 침습성 확인(진단 확정)
4. 02-18 — 복강경 저위전방절제술 및 림프절 곽청술 시행
5. 02-25 — 합병증 없이 회복해 퇴원, 항암화학요법은 외래에서 이어가기로 계획
6. 03-10 — 외래에서 보조 항암화학요법 시작
7. (청구 단계) — 청구서에 진단명이 "혈변"으로만 단순 기재되어 심사 보류

## 진단 및 처치 추출

- 원발부위: 직장
- 조직학적 형태: 선암종(Adenocarcinoma), 중분화도
- 병기: T3N1M0(병기 III 추정)
- 주진단(입원 기준): 직장 선암종 — [주진단 선택 원칙](../../content/volume-3/chapter-02/s03-principal-diagnosis-selection.md)에 따라 입원 당시 증상("혈변")이 아닌 확정 진단을 기준으로 선택
- 처치: 복강경 저위전방절제술 및 림프절 곽청술(입원 중), 보조 항암화학요법(외래에서 계속)

## 기록 누락·모순 점검

- 청구서에 "혈변"이라는 증상만 기재되고 확정 진단명(직장 선암종)이 반영되지 않아 심사 보류로 이어짐 — 이는 [진단명과 처치 연결](../../content/volume-4/chapter-01/s04-linking-diagnosis-and-procedure.md)에서 다룬 원칙이 지켜지지 않은 사례
- 퇴원요약의 병기는 "stage III(추정)"으로만 기록되어 있어, 암등록에 필요한 최종 확정 병기 정보는 추가 확인이 필요함
- 항암화학요법이 입원이 아닌 외래에서 이어진다는 점이 명시되어 있어, 이 부분의 치료정보는 외래 기록에서 별도로 추적해야 함

## 분류 또는 통계 적용

- **질병분류**: 주진단(직장 선암종)과 병기 정보를 반영해 코딩하며, [사례형 통합 코딩](../../content/volume-3/chapter-02/s14-integrated-case-based-coding.md)에서 다룬 절차(의심 진단→확정 진단→기타진단→처치 순)를 그대로 적용
- **암등록**: 원발부위(직장), 조직학적 형태(선암종), 병기(T3N1M0), 치료정보(수술+항암화학요법)를 모두 등록해야 하며, [치료정보와 추적조사](../../content/volume-3/chapter-03/s09-treatment-information-follow-up.md)에 따라 이후 5년간 추적조사가 이어져야 함
- **병원통계**: 이 입원의 재원일수(02-11~02-25, 14일)는 [평균재원일수](../../content/volume-3/chapter-01/s09-average-length-of-stay.md) 산출에 반영됨

## 법적·윤리적 고려

암 진단 고지와 치료 동의 과정에서 환자의 알 권리가 존중되어야 하며, 청구 과정에서는 실제 진료기록에 근거한 정확한 정보만 사용해야 한다([코딩 감사](../../content/volume-3/chapter-02/s13-coding-audit.md)에서 다룬 과다·과소코딩 금지 원칙). 또한 이 환자의 암등록·통계 자료는 [개인정보 보호법](../../content/volume-1/chapter-14/s08-personal-information-protection-law.md)에 따라 비식별화된 형태로만 국가암등록사업 등에 제공되어야 한다.

## 연습문제

- Q-HIM-000695 (객관식)
- Q-HIM-000696 (OX)
- Q-HIM-000697 (계산형)
- Q-HIM-000698 (사례형)

## 상세 해설

이 종합 사례는 Volume IV에서 다룬 거의 모든 실무 영역을 하나로 통합한다. 첫째, 입원 당시 증상("혈변")과 퇴원 시 확정 진단(직장 선암종)을 구분해 주진단을 선택해야 한다. 둘째, 이 확정 진단이 암등록의 여러 핵심 항목(원발부위, 조직형, 병기)으로 이어져야 한다. 셋째, 재원일수 같은 병원통계 지표가 이 입원 기록에서 산출될 수 있어야 한다. 넷째, 청구서에 증상만 기재되고 확정 진단이 반영되지 않아 심사가 보류된 사례를 통해, 진단-처치 연결과 정확한 청구 정보 반영의 중요성을 다시 확인한다. 이 모든 영역이 결국 하나의 완전하고 정확한 의무기록에서 출발한다는 것이 이 사례, 그리고 Volume IV 전체가 전달하는 핵심 메시지다.

## 참고문헌

- REF-CLASSIFICATION-ICD-KCD-001 — ICD/KCD 분류체계 개괄
- REF-TEXTBOOK-DATA-QUALITY-001 — 데이터 품질·통계 기초 개괄
