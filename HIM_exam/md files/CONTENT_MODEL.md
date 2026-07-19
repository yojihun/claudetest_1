---
document: content-model
version: 1.0.0
updated: 2026-07-19
---

# 1. 기본 원칙

앱의 최소 콘텐츠 단위는 `Topic`이다. Chapter와 Section은 Topic을 묶는 탐색 구조이며, 문제·플래시카드·이미지·출처는 Topic에 연결된다.

# 2. Topic 파일 예시

```yaml
---
id: HIM-V1-C01-S01-T001
slug: definition-of-him
title: 보건의료정보관리의 정의
title_en: Definition of Health Information Management
volume: 1
chapter: 1
section: 1
order: 1
status: drafting
difficulty: basic
importance: A
exam_frequency: unknown
estimated_minutes: 8
prerequisites: []
related_topics:
  - HIM-V1-C01-S02-T001
tags:
  - HIM
  - 보건의료정보
  - 정의
content_type:
  - concept
  - comparison
as_of_date: 2026-07-19
verified: false
reviewers: []
references:
  - REF-AHIMA-HIM-001
assets:
  - AST-HIM-LIFECYCLE-001
questions:
  - Q-HIM-000001
---
```

본문은 front matter 아래에 작성한다.

# 3. Topic 본문 구조

```markdown
# 보건의료정보관리의 정의

## 학습목표

## 한 문장 정의

## 왜 중요한가

## 선수 개념

## 핵심 개념

## 상세 설명

## 비교표

## 업무 흐름

## 실무 사례

## 국가시험 포인트

## 자주 하는 실수

## 관련 법령·표준

## AI Note

## 핵심 요약

## 플래시카드

## 연습문제

## 참고문헌
```

# 4. Topic 필드 정의

| 필드 | 설명 |
|---|---|
| id | 변경되지 않는 고유 식별자 |
| slug | URL용 영문 식별자 |
| title | 한국어 제목 |
| title_en | 영어 제목 |
| volume/chapter/section/order | 출판 및 탐색 순서 |
| status | 제작 상태 |
| difficulty | basic, intermediate, advanced |
| importance | A, B, C, D |
| exam_frequency | high, medium, low, unknown |
| estimated_minutes | 예상 학습시간 |
| prerequisites | 선수 Topic ID |
| related_topics | 관련 Topic ID |
| tags | 검색·추천용 태그 |
| content_type | concept, process, formula, law, case 등 |
| as_of_date | 법령·표준·제도 기준일 |
| verified | 검증 여부 |
| references | 출처 ID |
| assets | 이미지·표·도식 ID |
| questions | 문제 ID |

# 5. 문제 모델

```yaml
id: Q-HIM-000001
status: reviewing
type: multiple_choice
topic_ids:
  - HIM-V1-C01-S01-T001
subject_area: health_information_management
difficulty: basic
cognitive_level: understand
importance: A
stem: 보건의료정보관리에 대한 설명으로 가장 적절한 것은?
options:
  - id: A
    text: 의료인의 진료행위만을 관리한다.
  - id: B
    text: 보건의료정보를 수집·관리·분석·보호·활용한다.
  - id: C
    text: 의료기관의 회계업무만을 수행한다.
  - id: D
    text: 종이 의무기록의 보관만을 의미한다.
answer:
  - B
explanation: 보건의료정보관리는 기록 보관을 넘어 정보의 전 생명주기를 관리한다.
distractor_explanations:
  A: 진료행위 자체가 아니라 진료과정에서 생성된 정보를 관리한다.
  C: 회계는 일부 연계될 수 있으나 핵심 정의가 아니다.
  D: 현대 HIM은 종이 기록 관리보다 넓은 개념이다.
references:
  - REF-AHIMA-HIM-001
verified: false
```

# 6. 지원 문제 유형

- `true_false`
- `multiple_choice`
- `multiple_select`
- `short_answer`
- `calculation`
- `matching`
- `ordering`
- `case_based`
- `record_interpretation`
- `coding`
- `flashcard`

# 7. 플래시카드 모델

```yaml
id: FC-HIM-000001
topic_id: HIM-V1-C01-S01-T001
front: HIM은 무엇의 약자인가?
back: Health Information Management
hint: 보건의료정보관리
tags: [약어, 기초]
```

# 8. 계산 문제 모델

```yaml
id: Q-STAT-000001
type: calculation
topic_ids: [HIM-V3-P1-T010]
given:
  available_bed_days: 3000
  inpatient_service_days: 2400
formula_id: F-BED-OCCUPANCY
answer:
  value: 80
  unit: percent
solution_steps:
  - 분자를 재원환자 연인원으로 확인한다.
  - 분모를 가동병상일수로 확인한다.
  - 2400 ÷ 3000 × 100을 계산한다.
common_errors:
  - 퇴원환자 수를 분자로 사용
```

# 9. 사례 모델

```yaml
id: CASE-MR-000001
title: 퇴원요약 미완결 사례
deidentified: true
context:
patient_summary:
timeline: []
documents: []
tasks:
  - 누락된 기록을 찾는다.
  - 주진단 후보를 판단한다.
  - 정보 제공 가능 여부를 검토한다.
linked_topics: []
```

실제 환자 식별정보를 사용하지 않는다. 사례는 합성하거나 충분히 비식별화한다.

# 10. 출처 모델

```yaml
id: REF-LAW-MEDICAL-SERVICE-ACT-001
type: law
title:
publisher:
version:
effective_date:
accessed_date:
url:
article:
status: active
notes:
```

# 11. Asset 모델

```yaml
id: AST-HIM-LIFECYCLE-001
type: flowchart
title: 의료정보 생명주기
topic_ids:
  - HIM-V1-C01-S16-T001
file: assets/diagrams/him-lifecycle.svg
alt: 의료정보가 생성, 수집, 검증, 저장, 활용, 공유, 보존, 폐기로 이어지는 흐름도
source: original
license: project-owned
```

# 12. 학습 진도 모델

```yaml
user_id:
topic_id:
status: not_started | learning | completed | mastered
first_opened_at:
last_opened_at:
completion_rate:
confidence:
review_due_at:
```

# 13. 정답 이력 모델

```yaml
user_id:
question_id:
attempt_no:
selected_answer:
is_correct:
response_time_ms:
answered_at:
confidence:
```

# 14. ID 규칙

- Topic: `HIM-V{volume}-C{chapter}-S{section}-T{topic}`
- Question: `Q-{AREA}-{6자리번호}`
- Flashcard: `FC-{AREA}-{6자리번호}`
- Case: `CASE-{AREA}-{6자리번호}`
- Reference: `REF-{TYPE}-{NAME}-{3자리번호}`
- Asset: `AST-{AREA}-{NAME}-{3자리번호}`

ID는 제목이 바뀌어도 유지한다.
