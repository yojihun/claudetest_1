---
id: HIM-V1-C07-S01-T001
slug: hospital-information-system
title: 병원정보시스템
title_en: Hospital Information System (HIS)
volume: 1
chapter: 7
section: 1
order: 1
status: drafting
difficulty: basic
importance: A
exam_frequency: unknown
estimated_minutes: 8
prerequisites:
  - HIM-V1-C01-S12-T001
related_topics:
  - HIM-V1-C07-S05-T001
tags:
  - 의료정보시스템
  - HIS
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-AHIMA-HIM-001
assets: []
questions:
  - Q-HIM-000190
  - Q-HIM-000191
---

# 병원정보시스템

## 학습목표

1. 병원정보시스템(HIS)의 정의와 하위 시스템 구성을 설명할 수 있다.
2. HIS와 EMR의 관계를 설명할 수 있다.

## 한 문장 정의

병원정보시스템(Hospital Information System, HIS)은 접수, 처방, 검사, 영상, 약제, 회계 등 병원 업무 전반을 지원하는 통합 정보시스템으로, EMR을 포함한 여러 하위 시스템으로 구성된다.

## 왜 중요한가

HIS는 이 Chapter에서 다룰 OCS, PACS, RIS, LIS, ERP, CDW 등 개별 시스템을 담는 상위 개념이다. 전체 구조를 먼저 이해해야 각 하위 시스템의 위치를 파악할 수 있다.

## 선수 개념

- [EMR·EHR·PHR 비교](../chapter-01/s12-emr-ehr-phr.md)

## 핵심 개념

- HIS: 병원 업무 전반을 지원하는 통합 시스템(상위 개념)
- EMR: HIS 내에서 진료기록 작성·조회를 담당하는 핵심 모듈
- OCS, PACS, RIS, LIS, ERP: HIS를 구성하는 하위 시스템들(다음 Topic들에서 각각 다룸)

## 상세 설명

HIS를 하나의 건물에 비유하면, EMR은 그 건물에서 가장 중요한 방(진료기록실)이고, OCS·PACS·RIS·LIS·ERP는 각각 다른 방(처방전달, 영상저장, 방사선업무, 검사업무, 자원관리)이다. 이 방들은 서로 연결되어 정보를 주고받아야 하며, 이 연결이 원활하지 않으면 [병원 내 정보 흐름](../chapter-04/s12-information-flow-in-hospitals.md)에서 다룬 문제가 발생한다.

## 비교표 또는 흐름

| 시스템 | 역할 |
|---|---|
| EMR | 진료기록 작성·조회 |
| OCS | 처방 전달 |
| PACS | 영상 저장·전송 |
| RIS | 방사선 업무 관리 |
| LIS | 검사 업무·결과 관리 |
| ERP | 인사·회계 등 자원관리 |

## 실무 사례

한 병원에서 신규 HIS를 도입할 때, EMR만 교체하고 다른 하위 시스템과의 연동을 충분히 검토하지 않아 초기에 정보 불일치 문제가 발생한 사례가 있다. 이는 HIS를 하나의 통합 시스템으로 보지 않고 EMR만 별개로 취급했기 때문이다.

## 국가시험 포인트

- HIS와 EMR의 관계(상위 개념 vs. 핵심 모듈)를 구분하는 문제
- HIS의 하위 시스템 목록을 확인하는 문제

## 자주 하는 실수

- HIS와 EMR을 같은 의미로 혼용하는 것

## 관련 법령·표준

이 Topic은 시스템 구조 개념으로 특정 법령에 근거하지 않는다.

## AI Note

해당 없음.

## 핵심 요약

- HIS는 병원 업무 전반을 지원하는 통합 시스템이며, EMR은 그 핵심 모듈 중 하나다.
- HIS는 OCS, PACS, RIS, LIS, ERP 등 여러 하위 시스템으로 구성된다.

## 플래시카드

1. Q. HIS와 EMR의 관계는? / A. HIS가 상위 개념이고 EMR은 HIS의 핵심 모듈 중 하나

## 연습문제

- Q-HIM-000190 (객관식)
- Q-HIM-000191 (OX)

## 참고문헌

- REF-AHIMA-HIM-001 — AHIMA의 HIM 정의 (status: located)
