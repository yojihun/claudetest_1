---
id: CASE-MR-000009
slug: multiple-primary-cancer-registration
title: 암등록 통합 사례 — 다중원발암 등록 판단
title_en: Cancer Registry Integrated Case — Multiple Primary Cancer Determination
volume: 4
chapter: 10
case_number: 1
order: 1
status: drafting
difficulty: advanced
importance: A
exam_frequency: unknown
estimated_minutes: 17
deidentified: true
prerequisites:
  - CASE-MR-000007
related_topics:
  - HIM-V3-C03-S08-T001
  - HIM-V3-C03-S03-T001
tags:
  - 암등록
  - 다중원발암
  - 실무사례
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-CLASSIFICATION-ICD-KCD-001
questions:
  - Q-HIM-000685
  - Q-HIM-000686
---

# 암등록 통합 사례 — 다중원발암 등록 판단

## 사례 개요

이 사례는 허구의 환자 "환자 I"(모든 식별정보는 합성됨)가 5년 전 유방암 치료를 받았고, 최근 폐에서 새로운 종양이 발견된 기록을 다룬다. [다중원발암](../../content/volume-3/chapter-03/s08-multiple-primary-cancers.md)에서 다룬 전이와 새로운 원발암을 감별하는 판단 과정을 실제 사례에 적용하는 연습을 한다.

## 원문 기록

> **과거 병력 요약 (합성 사례, 실제 환자 아님)**
> 환자 ID: SYN-CR-0009 (가상)
> 5년 전: 좌측 유방암(Invasive ductal carcinoma) 진단, 유방절제술 및 항암화학요법 시행, 이후 관해 상태 유지
>
> **최근 내원 기록 (5년 후)**
> 정기 검진 중 흉부 CT에서 우측 폐 결절 발견
> 조직검사 결과: Adenocarcinoma of the lung, primary lung origin(유방암과 무관한 별개의 조직형으로 확인)
> 면역조직화학염색 결과: 유방암 표지자(ER/PR) 음성, 폐 원발 표지자(TTF-1) 양성
> 진단: Primary lung adenocarcinoma(원발성 폐선암, 유방암과 무관)

## 핵심 용어

- Invasive Ductal Carcinoma: 침습성 관상피암, 유방암의 대표적 조직형
- Adenocarcinoma of the Lung: 폐선암
- ER/PR(Estrogen/Progesterone Receptor): 유방암 세포에서 흔히 발현되는 호르몬 수용체 표지자
- TTF-1(Thyroid Transcription Factor-1): 폐·갑상선 기원 종양에서 흔히 발현되는 표지자
- Immunohistochemistry: 면역조직화학염색, 조직의 특정 단백질 발현을 확인해 종양의 기원을 감별하는 검사

## 시간순 재구성

1. 5년 전: 좌측 유방암 진단 및 치료(유방절제술, 항암화학요법), 이후 관해 유지
2. 5년 후: 정기 검진에서 우측 폐 결절 우연 발견
3. 조직검사 및 면역조직화학염색 시행
4. 염색 결과: 유방암 표지자 음성, 폐 원발 표지자 양성 확인
5. 최종 판단: 유방암의 전이가 아닌 새로운 원발성 폐암으로 확정

## 진단 및 처치 추출

- 첫 번째 원발암: 좌측 유방암(침습성 관상피암), 5년 전 진단, 현재 관해 상태
- 두 번째 원발암: 우측 폐선암(원발성), 이번에 새로 진단
- 감별 근거: 조직형 차이와 면역조직화학염색 결과(ER/PR 음성, TTF-1 양성)가 전이가 아닌 별개의 원발암임을 뒷받침

## 기록 누락·모순 점검

- 이 사례는 [다중원발암](../../content/volume-3/chapter-03/s08-multiple-primary-cancers.md)에서 다룬 판단 기준(조직학적 형태 차이, 발생 시기 간격)이 명확히 적용된 사례로, 면역조직화학염색이라는 객관적 검사 근거까지 갖추고 있어 판단의 신뢰도가 높음
- 다만 폐 결절이 발견되기 전까지의 중간 추적 검사 기록(예: 매년 시행한 유방암 추적 CT 결과)이 이 사례에는 생략되어 있어, 실제로는 이런 중간 기록도 함께 확인하는 것이 완전한 병력 파악에 도움이 됨

## 분류 또는 통계 적용

이 사례는 [다중원발암](../../content/volume-3/chapter-03/s08-multiple-primary-cancers.md)의 원칙에 따라 유방암과 폐암을 각각 독립된 원발암으로 별도 등록해야 하는 대표 사례다. 두 암 모두 [원발부위 등록 원칙](../../content/volume-3/chapter-03/s03-primary-site-registration.md)에 따라 각각의 정확한 원발부위(유방, 폐)로 등록되어야 하며, 이를 하나의 암(유방암의 전이)으로 잘못 등록하면 폐암의 발생률 통계가 누락되는 오류가 발생한다.

## 법적·윤리적 고려

과거 암 병력이 있는 환자에게 새로운 종양이 발견되었을 때, 이를 성급하게 "재발" 또는 "전이"로 단정해 환자에게 고지하기보다는 충분한 검사(조직검사, 면역조직화학염색)를 거쳐 정확한 정보를 전달하는 것이 환자의 알 권리와 정확한 치료 계획 수립에 중요하다.

## 연습문제

- Q-HIM-000685 (객관식)
- Q-HIM-000686 (OX)

## 상세 해설

이 사례의 핵심은 단순히 "과거 암 병력이 있는 환자에게 새 종양이 발견되었다"는 사실만으로 전이를 단정하지 않고, 조직학적 형태와 면역조직화학염색 등 객관적 근거로 새로운 원발암 여부를 확인하는 과정이다. 만약 이 폐 종양이 유방암 세포와 동일한 조직형(침습성 관상피암)이었다면 전이로 판단했겠지만, 이 사례에서는 완전히 다른 조직형과 표지자 패턴이 확인되어 독립된 다중원발암으로 최종 판단되었다.

## 참고문헌

- REF-CLASSIFICATION-ICD-KCD-001 — ICD/KCD 분류체계 개괄
