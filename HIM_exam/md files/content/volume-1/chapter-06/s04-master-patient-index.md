---
id: HIM-V1-C06-S04-T001
slug: master-patient-index
title: Master Patient Index
title_en: Master Patient Index (MPI)
volume: 1
chapter: 6
section: 4
order: 1
status: drafting
difficulty: intermediate
importance: A
exam_frequency: unknown
estimated_minutes: 8
prerequisites:
  - HIM-V1-C06-S03-T001
related_topics:
  - HIM-V1-C06-S05-T001
tags:
  - 의무기록관리
  - MPI
content_type:
  - concept
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-AHIMA-HIM-001
assets: []
questions:
  - Q-HIM-000170
  - Q-HIM-000171
---

# Master Patient Index

## 학습목표

1. Master Patient Index(MPI)의 목적과 기본 구성 요소를 설명할 수 있다.
2. MPI 오류가 어떤 문제로 이어지는지 설명할 수 있다.

## 한 문장 정의

Master Patient Index(MPI)는 병원이 보유한 모든 환자의 식별 정보와 등록번호를 연결해 관리하는 중앙 색인 시스템이다.

## 왜 중요한가

MPI는 [번호부여 체계](s02-numbering-systems.md)와 [환자식별](s03-patient-identification.md)이 실제로 구현되는 시스템이다. MPI가 부정확하면 병원의 모든 환자 조회·통계·기록 통합이 함께 부정확해진다.

## 선수 개념

- [환자식별](s03-patient-identification.md)

## 핵심 개념

- MPI 구성 요소: 환자명, 생년월일, 성별, 등록번호, 주소 등 식별 정보
- MPI의 역할: 환자 조회의 "관문" 역할, 모든 진료 기록이 이 색인을 통해 연결됨
- MPI 품질 관리: 정기적인 오류 점검(중복, 오탈자 등)

## 상세 설명

MPI는 병원 시스템 전체에서 "이 환자가 누구인가"를 답하는 단일한 기준점 역할을 한다. 신규 환자 등록 시 MPI에 새 항목이 생성되고, 이후 모든 방문·검사·처방 기록이 이 항목과 연결된다. MPI에 오류(오탈자, 중복 항목 등)가 있으면 [중복환자와 기록 병합](s05-duplicate-patients-and-record-merging.md)에서 다룰 문제로 이어진다.

## 비교표 또는 흐름

| 구성 요소 | 역할 |
|---|---|
| 환자명·생년월일·성별 | 기본 식별 정보 |
| 등록번호 | 병원 시스템 내 고유 연결 키 |
| MPI 품질 관리 | 정기적 오류 점검으로 정확성 유지 |

## 실무 사례

한 병원에서 MPI에 같은 환자가 오탈자로 인해 서로 다른 두 항목으로 등록되어 있어, 이전 진료 이력이 새 방문 시 조회되지 않은 사례가 있다. 이는 [중복환자와 기록 병합](s05-duplicate-patients-and-record-merging.md) 절차로 해결해야 하는 문제다.

## 국가시험 포인트

- MPI의 역할(환자 조회의 관문)을 확인하는 문제
- MPI 오류가 이후 어떤 문제(중복환자)로 이어지는지 묻는 문제

## 자주 하는 실수

- MPI를 단순한 환자 명단으로만 여기고 시스템 전체의 연결 기준점이라는 역할을 놓치는 것

## 관련 법령·표준

이 Topic은 기록 관리 실무로 특정 법령에 근거하지 않는다.

## AI Note

AI 기반 레코드 링키지(record linkage) 기술이 MPI의 잠재적 중복 항목을 자동으로 탐지하는 데 활용될 수 있으나, 최종 병합 여부 판단은 담당자가 확인해야 한다.

## 핵심 요약

- MPI는 병원의 모든 환자 식별 정보를 연결하는 중앙 색인이다.
- MPI 오류는 중복환자, 기록 누락 등 후속 문제로 이어질 수 있다.

## 플래시카드

1. Q. MPI의 역할은? / A. 병원의 모든 환자 조회·기록 연결의 중앙 색인

## 연습문제

- Q-HIM-000170 (OX)
- Q-HIM-000171 (OX)

## 참고문헌

- REF-AHIMA-HIM-001 — AHIMA의 HIM 정의 (status: located)
