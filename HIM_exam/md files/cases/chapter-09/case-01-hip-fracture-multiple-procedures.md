---
id: CASE-MR-000008
slug: hip-fracture-multiple-procedures
title: 의료행위 분류 통합 사례 — 고관절 골절 복합 처치
title_en: Procedure Classification Integrated Case — Hip Fracture with Multiple Procedures
volume: 4
chapter: 9
case_number: 1
order: 1
status: drafting
difficulty: advanced
importance: A
exam_frequency: unknown
estimated_minutes: 16
deidentified: true
prerequisites:
  - CASE-MR-000005
related_topics:
  - HIM-V3-C02-S10-T001
  - HIM-V3-C02-S11-T001
  - HIM-V2-C03-S04-T001
tags:
  - 의료행위분류
  - 고관절골절
  - 실무사례
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-CLASSIFICATION-ICD-KCD-001
questions:
  - Q-HIM-000683
  - Q-HIM-000684
---

# 의료행위 분류 통합 사례 — 고관절 골절 복합 처치

## 사례 개요

이 사례는 허구의 환자 "환자 H"(모든 식별정보는 합성됨)가 낙상으로 고관절 골절을 입어 수술과 여러 부수적 처치를 받은 기록을 다룬다. [의료행위 분류 개요](../../content/volume-3/chapter-02/s10-procedure-classification-overview.md)와 [수술·처치 기록 해석](../../content/volume-3/chapter-02/s11-operative-report-interpretation.md)에서 다룬 주수술·부수술 구분을 실제 사례에 적용하는 연습을 한다.

## 원문 기록

> **입원 및 수술기록 (합성 사례, 실제 환자 아님)**
> 환자 ID: SYN-PR-0008 (가상)
> 응급실 내원 경위: 자택 계단에서 낙상, 우측 고관절 통증 및 보행 불능
> 영상검사: X-ray에서 우측 대퇴골 경부 골절 확인
> 수술: Open reduction internal fixation(ORIF), right femoral neck
> 수술 중 추가 처치: 수술 전 예방적 항생제 투여, 수술 후 통증 조절을 위한 신경블록 시행
> 수술 후 경과: 물리치료 시작, 낙상 원인 평가를 위해 골밀도 검사(DEXA) 시행

## 핵심 용어

- ORIF(Open Reduction Internal Fixation): 관혈적정복내고정술([근골격계 검사와 수술](../../content/volume-2/chapter-03/s04-musculoskeletal-procedures.md) 참고)
- Femoral Neck Fracture: 대퇴골 경부 골절
- Prophylactic Antibiotics: 예방적 항생제(감염 예방 목적)
- Nerve Block: 신경블록(통증 조절을 위한 처치)
- DEXA(Dual-Energy X-ray Absorptiometry): 골밀도 측정 검사

## 시간순 재구성

1. 낙상 발생, 응급실 내원
2. X-ray로 대퇴골 경부 골절 확인
3. 수술 시행: ORIF(주수술), 수술 전 예방적 항생제 투여(부수적 처치)
4. 수술 중/후: 신경블록으로 통증 조절(부수적 처치)
5. 수술 후: 물리치료 시작, 골다공증 등 낙상 원인 평가를 위한 DEXA 시행

## 진단 및 처치 추출

- 진단: 우측 대퇴골 경부 골절(외상성), 낙상이 외인으로 함께 기록됨
- 주수술: ORIF(관혈적정복내고정술) — 이 입원의 핵심 치료 목적
- 부수적 처치: 예방적 항생제 투여, 신경블록, DEXA 검사 — [의료행위 분류 개요](../../content/volume-3/chapter-02/s10-procedure-classification-overview.md)에서 다룬 대로 주수술과 구분해 각각 별도로 코딩되어야 함

## 기록 누락·모순 점검

- DEXA 검사 결과(골밀도 수치)가 이 기록에 포함되어 있지 않아, 골다공증 등 근본적인 낙상 위험 요인이 확인되었는지는 추가 자료로 확인해야 함
- 낙상의 구체적 원인(어지러움, 시력 저하 등 내재적 요인 여부)이 기록에 명시되지 않아, [외인분류와 손상분류](../../content/volume-3/chapter-02/s06-external-cause-injury-classification.md)에서 다룬 외인분류를 더 정확히 하려면 추가 확인이 필요함

## 분류 또는 통계 적용

이 사례는 하나의 입원에서 주수술(ORIF)과 여러 부수적 처치(항생제 투여, 신경블록, DEXA)가 함께 시행된 경우로, [수술·처치 기록 해석](../../content/volume-3/chapter-02/s11-operative-report-interpretation.md)에서 다룬 대로 이들을 구분해 코딩해야 한다. 또한 골절의 원인(낙상)은 [외인분류와 손상분류](../../content/volume-3/chapter-02/s06-external-cause-injury-classification.md)에서 다룬 대로 손상분류(골절)와 별도로 외인분류(낙상)를 함께 기록해야 완전한 통계가 산출된다.

## 법적·윤리적 고려

고령 환자의 낙상 사고는 재발 방지를 위한 안전 관리 계획(예: 낙상 위험 평가, 환경 개선)이 함께 논의되어야 하는 경우가 많으며, 이는 단순 치료를 넘어선 예방적 돌봄의 윤리적 고려사항이다.

## 연습문제

- Q-HIM-000683 (객관식)
- Q-HIM-000684 (OX)

## 상세 해설

이 사례의 핵심은 하나의 입원 안에 시행된 여러 처치(ORIF, 항생제 투여, 신경블록, DEXA) 중 어느 것이 "주수술"이고 어느 것이 "부수적 처치"인지 구분하는 것이다. ORIF는 골절 치료라는 이 입원의 핵심 목적에 해당하는 주수술이며, 나머지는 이를 보조하거나 별도 목적(원인 평가)을 위한 부수적 처치로 각각 구분해 코딩해야 한다. 또한 손상(골절)과 그 원인(낙상)을 별도의 분류 축으로 함께 기록해야 한다는 원칙도 이 사례에서 확인할 수 있다.

## 참고문헌

- REF-CLASSIFICATION-ICD-KCD-001 — ICD/KCD 분류체계 개괄
