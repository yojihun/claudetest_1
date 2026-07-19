---
id: HIM-V1-C07-S17-T001
slug: data-backup-methods
title: 데이터 백업
title_en: Data Backup Methods
volume: 1
chapter: 7
section: 17
order: 1
status: drafting
difficulty: intermediate
importance: B
exam_frequency: unknown
estimated_minutes: 7
prerequisites:
  - HIM-V1-C06-S12-T001
related_topics:
  - HIM-V1-C07-S18-T001
tags:
  - 의료정보시스템
  - 백업
content_type:
  - concept
  - comparison
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-AHIMA-HIM-001
assets: []
questions:
  - Q-HIM-000212
---

# 데이터 백업

## 학습목표

1. 전체 백업, 증분 백업, 차등 백업의 차이를 설명할 수 있다.

## 한 문장 정의

이 Topic은 [백업과 재해복구](../chapter-06/s12-backup-and-disaster-recovery.md)에서 다룬 운영 관리 개념을 넘어, 실제 백업이 기술적으로 어떤 방식(전체·증분·차등)으로 이루어지는지를 다룬다.

## 왜 중요한가

백업 방식에 따라 저장 공간, 복구 속도, 복구 절차의 복잡성이 달라진다. 병원의 상황에 맞는 방식을 선택하는 것이 중요하다.

## 선수 개념

- [백업과 재해복구](../chapter-06/s12-backup-and-disaster-recovery.md)

## 핵심 개념

- 전체 백업(Full Backup): 매번 전체 데이터를 복사, 저장 공간 많이 필요하지만 복구가 단순
- 증분 백업(Incremental Backup): 직전 백업 이후 변경분만 복사, 저장 공간 절약되지만 복구 시 여러 백업을 순서대로 적용해야 함
- 차등 백업(Differential Backup): 마지막 전체 백업 이후 변경된 모든 데이터를 복사, 증분보다 복구가 단순하지만 저장 공간은 더 필요

## 상세 설명

전체 백업은 매번 모든 데이터를 복사하므로 안전하지만 시간과 저장공간이 많이 든다. 증분 백업은 효율적이지만 복구 시 여러 단계의 백업 파일을 순서대로 적용해야 해 복구 과정이 복잡해진다. 병원은 보통 두 방식을 조합해(예: 주간 전체 백업 + 일간 증분 백업) 효율성과 복구 용이성을 절충한다.

## 비교표 또는 흐름

| 방식 | 저장 공간 | 복구 복잡성 |
|---|---|---|
| 전체 백업 | 많이 필요 | 단순 |
| 증분 백업 | 적게 필요 | 복잡(여러 단계 적용) |
| 차등 백업 | 중간 | 중간(전체 백업 + 최신 차등본만 필요) |

## 실무 사례

한 병원이 매일 증분 백업만 수행하다가, 실제 장애 복구 시 여러 날치의 증분 백업을 순서대로 적용해야 해 복구 시간이 예상보다 오래 걸린 사례가 있다. 이후 주간 전체 백업을 추가해 복구 절차를 단순화했다.

## 국가시험 포인트

- 전체·증분·차등 백업의 정의와 장단점을 구분하는 문제

## 자주 하는 실수

- 증분 백업과 차등 백업을 같은 방식으로 혼동하는 것

## 관련 법령·표준

이 Topic은 기술적 개념으로 특정 법령에 근거하지 않는다.

## AI Note

해당 없음.

## 핵심 요약

- 전체 백업은 단순하지만 자원이 많이 들고, 증분·차등 백업은 효율적이지만 복구 절차가 다르다.
- 병원은 보통 여러 방식을 조합해 사용한다.

## 플래시카드

1. Q. 직전 백업 이후 변경분만 복사하는 방식은? / A. 증분 백업(Incremental Backup)

## 연습문제

- Q-HIM-000212 (OX)

## 참고문헌

- REF-AHIMA-HIM-001 — AHIMA의 HIM 정의 (status: located)
