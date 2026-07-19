---
document: reference-guide
version: 1.0.0
updated: 2026-07-19
---

# 1. 목적

모든 핵심 사실, 법령, 공식, 분류기준, 시험정보 및 표준을 추적 가능한 출처와 연결한다.

# 2. 출처 우선순위

1. 한국보건의료인국가시험원
2. 국가법령정보센터
3. 보건복지부
4. 한국보건의료정보원
5. 건강보험심사평가원
6. 국민건강보험공단
7. 통계청 및 국가기관
8. WHO 및 ICD 공식 사이트
9. HL7 International
10. SNOMED International
11. Regenstrief Institute의 LOINC 공식 자료
12. DICOM Standards Committee
13. AHIMA
14. IFHIMA
15. 동료심사 논문
16. 대학 교재 및 전문서
17. 기타 2차 자료

# 3. 출처 유형

```yaml
type:
  - exam_notice
  - law
  - regulation
  - official_guideline
  - classification
  - standard
  - statistics
  - journal_article
  - textbook
  - professional_association
  - secondary
```

# 4. Reference 파일 예시

```yaml
id: REF-KHPLEI-EXAM-2026-001
type: exam_notice
title:
publisher: 한국보건의료인국가시험원
published_date:
effective_date:
accessed_date:
url:
document_number:
version:
language: ko
status: active
notes:
```

# 5. 법령 인용

법령 출처에는 다음을 포함한다.

- 법령명
- 조·항·호
- 시행일
- 조회일
- 개정 상태
- 관련 Topic ID

본문에는 필요한 의미를 요약한다. 조문 전체는 별도 참고 패널에서 제공할 수 있다.

# 6. 분류체계 인용

- ICD 또는 KCD의 정확한 버전
- 적용 연도
- 색인 또는 내용예시표 위치
- 사용한 지침
- 코드 검증일

동일 진단이 버전에 따라 달라질 수 있으므로 코드와 버전을 분리하지 않는다.

# 7. 웹 출처 검증

- 공식 도메인인지 확인한다.
- 게시일과 시행일을 구분한다.
- 페이지의 최신 수정일만 보고 최신 내용이라고 판단하지 않는다.
- PDF의 표와 그림은 실제 페이지를 확인한다.
- 링크가 사라질 가능성에 대비해 문서명과 식별자를 기록한다.
- 2차 자료가 공식 자료를 인용한다면 가능한 한 원출처로 이동한다.

# 8. 인용 방식

앱 본문에서는 학습 흐름을 방해하지 않도록 짧은 출처 표시를 사용하고, 상세 출처는 Topic 하단에 제공한다.

예:

```markdown
> 기준: 의료법 제○조, 시행 2026-00-00
```

Markdown 저장소에서는 출처 ID를 사용한다.

```yaml
references:
  - REF-LAW-MEDICAL-SERVICE-ACT-001
```

# 9. 검증 수준

| 수준 | 의미 |
|---|---|
| unverified | 출처 미확인 |
| located | 관련 출처를 찾았으나 내용 대조 전 |
| verified | 출처와 본문 대조 완료 |
| peer_reviewed | 분야 전문가 검토 완료 |
| deprecated | 더 이상 적용되지 않음 |

# 10. 최신성 관리

다음 콘텐츠는 정기적으로 재검증한다.

- 시험 시행계획: 매년
- 의료관계 법규: 최소 분기별 또는 개정 알림 시
- 건강보험 기준: 공식 변경 시
- KCD/ICD: 새 버전 적용 시
- HL7/FHIR 등 표준: 사용 버전 변경 시
- 기관 명칭 및 정책사업: 최소 연 1회

# 11. 참고문헌 품질 체크리스트

- [ ] 공식 또는 1차 출처가 있는가
- [ ] 기준일과 버전이 있는가
- [ ] 본문 주장을 실제로 뒷받침하는가
- [ ] 폐기되거나 과거 기준인 자료가 아닌가
- [ ] 번역 과정에서 의미가 변하지 않았는가
- [ ] 숫자와 표의 단위가 일치하는가
- [ ] 저작권 범위를 지켰는가
