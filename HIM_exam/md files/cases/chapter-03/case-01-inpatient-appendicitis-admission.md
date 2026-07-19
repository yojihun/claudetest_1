---
id: CASE-MR-000002
slug: inpatient-appendicitis-admission
title: 입원기록 실무 사례 — 급성 충수염 입원
title_en: Inpatient Practice Case — Acute Appendicitis Admission
volume: 4
chapter: 3
case_number: 1
order: 1
status: drafting
difficulty: advanced
importance: A
exam_frequency: unknown
estimated_minutes: 16
deidentified: true
prerequisites:
  - CASE-MR-000001
related_topics:
  - HIM-V3-C02-S03-T001
  - HIM-V2-C07-S04-T001
tags:
  - 입원기록
  - 충수염
  - 실무사례
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-CLASSIFICATION-ICD-KCD-001
questions:
  - Q-HIM-000671
  - Q-HIM-000672
---

# 입원기록 실무 사례 — 급성 충수염 입원

## 사례 개요

이 사례는 허구의 환자 "환자 B"(모든 식별정보는 합성됨)가 복통을 주소로 응급실을 거쳐 입원, 수술을 받고 퇴원하기까지의 입원 전체 과정을 다룬다. 이 사례를 통해 입원기록 특유의 여러 문서(입원기록, 경과기록, 수술기록, 퇴원요약)를 종합해 [주진단 선택 원칙](../../content/volume-3/chapter-02/s03-principal-diagnosis-selection.md)을 적용하는 연습을 한다.

## 원문 기록

> **입원기록 (합성 사례, 실제 환자 아님)**
> 환자 ID: SYN-IP-0002 (가상)
> 입원일: 20XX-05-02 08:40
> 주소(C/C): 우하복부 통증, 12시간 지속
> 현병력: 어제 저녁부터 배꼽 주위 통증 시작, 오늘 아침 우하복부로 이동, 발열(37.8℃) 동반
> 초진 소견: 복통 원인 감별 위해 입원, r/o acute appendicitis
>
> **경과기록 (05-02 14:00)**
> WBC 14,200/μL(상승), CT: 충수 비대 및 주변 염증 소견, acute appendicitis with localized peritonitis 확인
> Plan: 응급 복강경 충수절제술 시행 예정
>
> **수술기록 (05-02 16:30~17:20)**
> 술식: Laparoscopic appendectomy
> 소견: 충수 천공 없이 화농성 염증, 국소 복막염 동반
> 합병증: 없음
>
> **퇴원요약 (05-05)**
> 주진단: Acute appendicitis with localized peritonitis
> 시행 처치: Laparoscopic appendectomy
> 퇴원 시 상태: 양호, 합병증 없이 회복

## 핵심 용어

- C/C(Chief Complaint): 주소, 환자가 호소하는 주된 증상
- r/o(Rule Out): ~여부를 감별하다
- WBC(White Blood Cell): 백혈구 수치([혈액·림프계 약어와 의무기록 문장 해석](../../content/volume-2/chapter-05/s05-blood-lymphatic-abbreviations-chart-reading.md) 참고)
- Localized Peritonitis: 국소 복막염
- Laparoscopic Appendectomy: 복강경 충수절제술([소화기계 검사와 수술](../../content/volume-2/chapter-07/s04-digestive-procedures.md) 참고)

## 시간순 재구성

1. 05-02 08:40 — 우하복부 통증으로 입원, 초진 시 "복통 원인 감별"(의심 진단)
2. 05-02 14:00 — WBC 상승 및 CT 소견으로 급성 충수염과 국소 복막염 확인(확정 진단)
3. 05-02 16:30~17:20 — 복강경 충수절제술 시행(처치)
4. 05-05 — 합병증 없이 회복해 퇴원(주진단 및 처치 최종 확정)

## 진단 및 처치 추출

- 주진단: 급성 충수염(국소 복막염 동반) — [주진단 선택 원칙](../../content/volume-3/chapter-02/s03-principal-diagnosis-selection.md)에 따라 입원 당시 의심 진단("복통 원인 감별")이 아닌 퇴원 시 확정된 진단을 기준으로 선택
- 기타진단: 국소 복막염 — 주진단에 동반된 합병증으로 함께 코딩
- 처치: 복강경 충수절제술(접근 방식이 개복이 아닌 복강경이라는 점이 [수술·처치 기록 해석](../../content/volume-3/chapter-02/s11-operative-report-interpretation.md)에서 다룬 대로 코드 선택에 영향)

## 기록 누락·모순 점검

- 초진 기록의 "r/o acute appendicitis"(의심)와 경과기록의 확정 소견 사이에 논리적 모순은 없으며, 이는 정상적인 진단 확정 과정임
- 수술기록에 "합병증: 없음"이라고 명시되어 있어, 국소 복막염은 수술의 합병증이 아니라 입원 당시 이미 존재했던 기타진단임을 구분해야 함(수술 후 합병증과 혼동하지 않도록 주의)

## 분류 또는 통계 적용

이 사례는 [DRG와 분류](../../content/volume-3/chapter-02/s12-drg-and-classification.md)에서 다룬 것처럼, 국소 복막염이라는 합병증 동반 여부가 DRG 그룹 분류에 영향을 줄 수 있다. 또한 이 입원의 [평균재원일수](../../content/volume-3/chapter-01/s09-average-length-of-stay.md) 계산 시, 입원일(05-02)부터 퇴원일(05-05)까지 3일의 재원일수가 반영된다.

## 법적·윤리적 고려

응급 수술 동의 절차가 이 기록에 명시적으로 나타나 있지 않으나, 실제 임상에서는 응급 수술 전 환자(또는 보호자)의 동의를 받는 절차가 함께 기록되어야 한다. 이 사례는 합성 자료이므로 실제 동의서 양식은 다루지 않는다.

## 연습문제

- Q-HIM-000671 (객관식)
- Q-HIM-000672 (OX)

## 상세 해설

이 사례의 핵심은 "복통 원인 감별"이라는 입원 당시 의심 진단과 "급성 충수염(국소 복막염 동반)"이라는 퇴원 시 확정 진단을 구분하는 것이다. 많은 학습자가 입원기록의 첫 문장(의심 진단)을 그대로 주진단으로 착각하는 실수를 하는데, 이 사례는 반드시 경과기록·수술기록·퇴원요약까지 모두 확인한 후 최종 확정된 진단을 주진단으로 선택해야 함을 보여준다. 또한 접근 방식(복강경)과 합병증(국소 복막염) 정보가 각각 의료행위 코드와 기타진단 코드에 반영되어야 완전한 코딩이 된다.

## 참고문헌

- REF-CLASSIFICATION-ICD-KCD-001 — ICD/KCD 분류체계 개괄
