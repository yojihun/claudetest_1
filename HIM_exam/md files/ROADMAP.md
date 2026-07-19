---
document: roadmap
version: 1.0.0
updated: 2026-07-19
---

# 1. 목표

콘텐츠 구조와 앱 기반을 먼저 만들고, 검증된 Topic을 지속적으로 추가한다. 1,000페이지 이상의 책을 먼저 완성한 뒤 앱으로 옮기는 방식은 사용하지 않는다.

# 2. Phase 0 — 기준 문서 확정

- [x] PROJECT.md
- [x] EXAM_GUIDE.md 초안
- [x] CURRICULUM.md 초안
- [x] CONTENT_MODEL.md
- [x] WRITING_GUIDE.md
- [x] QUESTION_GUIDE.md
- [x] IMAGE_GUIDE.md
- [x] REFERENCE_GUIDE.md
- [x] GLOSSARY.md 초안
- [x] 최신 국가시험 시행계획 검증 — 국시원 공고 제2025-54호(제42회, 2025.12.6. 시행) 기준으로 검증 완료, 상세는 `EXAM_GUIDE.md` 2.1절 참고. 제43회 공고 시 일정 재확인 필요.
- [ ] 관련 법령 목록 확정
- [x] 적용 분류체계 버전 확정 — 실기 기준 KCD-8, ICD-9-CM Vol.3, ICD-O-3 (`EXAM_GUIDE.md` 2.1절)

완료 기준: 공식 시험 구조와 콘텐츠 범위가 매핑되어 있다.

# 3. Phase 1 — 콘텐츠 저장소 구축

- [x] 디렉터리 생성 — `content/volume-1~4/`, `questions/`, `references/`, `assets/{diagrams,illustrations,tables}/`, `schemas/`, `scripts/`
- [x] Topic 템플릿 생성 — 기존 `content/_TOPIC_TEMPLATE.md` 유지
- [x] Question 템플릿 생성 — 기존 `questions/_QUESTION_TEMPLATE.yaml` 유지
- [x] Reference 데이터베이스 생성 — `references/`에 6건(국시원 공고, AHIMA, DIKW, ONC, POMR 논문, 의료기사법) 등록
- [x] Asset 메타데이터 생성 — `assets/AST-*.yaml` 2건 + 실제 SVG 2건(`assets/diagrams/`)
- [x] YAML schema 검증 — `schemas/{topic,question,reference,asset}.schema.json` 정의 + `scripts/validate-content.mjs`(무의존성 Node 스크립트)로 강제
- [x] 링크 무결성 검사 — frontmatter의 references/assets/questions/prerequisites/related_topics ID가 실제 존재하는지 검증(스크립트에 포함, 없으면 warning)
- [ ] Markdown lint 설정 — 별도 markdownlint 도구 미도입. 현재는 검증 스크립트가 본문 `##` 섹션 제목을 허용 목록과 대조하는 수준까지만 수행
- [ ] 본문 내 상대링크(마크다운 `[..](..)`) 무결성 검사 — 현재 스크립트는 frontmatter ID 배열만 검사하고 본문 링크는 검사하지 않음

완료 기준: 샘플 Topic 10개가 자동 검증을 통과한다. → **현재 5개(Topic HIM-V1-C01-S01/S03/S09/S12/S17-T001) 통과.** `node scripts/validate-content.mjs`로 실행, 오류 0건.

# 4. Phase 2 — MVP 교육과정

초기 앱은 Volume I Chapter 1~2에 집중한다.

## 포함 범위

- 보건의료정보관리의 정의
- 의료기록의 역사
- POMR와 SOAP
- 데이터·정보·지식
- 의료정보 품질
- 정보 생명주기
- 보건의료정보관리사의 역할
- EMR·EHR·PHR
- 의료정보 윤리
- 의료기록의 구성과 완결성

## 최소 수량

- Topic 40개
- 플래시카드 200개
- OX 120문항
- 객관식 160문항
- 사례형 20문항
- 도식 20개

완료 기준: 사용자가 Chapter 단위 학습, 퀴즈, 오답 복습을 할 수 있다.

**진행 현황 (2026-07-19):** Volume I Chapter 1~3(보건의료정보관리 개론 19개, 의료기록의 이해 17개, 보건의료정보관리사의 직무 14개) 총 50개 Topic 완성 및 검증 통과. 문제 117개, 도식 2개, Reference 14건. `node scripts/validate-content.mjs` 기준 오류 0건, 경고 0건. Chapter 1의 10번 항목(SOAP 기록 방식)은 9번 항목(Larry Weed와 POMR)에 통합. 다음은 Chapter 4(의료기관과 조직, 15개 Topic)로 진행 예정.

# 5. Phase 3 — 앱 MVP

## 화면

1. 온보딩
2. 대시보드
3. 전체 교육과정
4. Chapter 목록
5. Topic 학습
6. 플래시카드
7. 퀴즈
8. 문제 해설
9. 오답노트
10. 북마크
11. 학습 통계
12. 설정

## 핵심 기능

- Topic 읽음 처리
- 진도율
- 문제 풀이
- 정답·오답 저장
- 취약 Topic 분석
- 검색
- 북마크
- 다크모드
- 모바일 반응형

완료 기준: 로그인한 사용자가 진도와 오답 이력을 유지할 수 있다.

# 6. Phase 4 — Volume I 완성

- [ ] Chapter 1~16 Topic 제작
- [ ] 문제은행 구축
- [ ] 법규 기준일 관리
- [ ] 표준·시스템 도식
- [ ] 종합 모의고사
- [ ] 내용 전문가 검토

완료 기준: Volume I 전체가 앱에서 학습 가능하고 PDF/DOCX로 출력된다.

# 7. Phase 5 — Volume II 의학용어

- 계통별 Topic
- 어근·접두사·접미사
- 발음 및 철자
- 기록 문장 해석
- 플래시카드 집중 모드
- 계통별 미니 테스트

완료 기준: 의학용어 학습과 실무 문장 해석이 연결된다.

# 8. Phase 6 — Volume III

## 병원통계

- 공식 라이브러리
- 단계별 계산
- 단위 검증
- 랜덤 계산 문제

## 분류

- 버전 관리
- 코드 탐색 훈련
- 사례형 코딩
- 코드 근거 표시

## 암등록

- 원발부위·형태·병기
- 등록 판단 흐름
- 다중원발 사례

완료 기준: 계산형·코딩형 문제를 자동 또는 반자동 생성할 수 있다.

# 9. Phase 7 — Volume IV 실무

- 비식별 합성 의무기록
- 시간순 기록 분석
- 진단·처치 추출
- 완결성 점검
- 분류·통계·법규 통합 사례
- 실무 모의시험

# 10. Phase 8 — 적응형 학습

- spaced repetition
- mastery score
- difficulty adaptation
- 추천 복습
- 취약개념 그래프
- 개인별 모의고사
- 시험일까지 학습계획

# 11. Phase 9 — AI Tutor

AI 튜터는 다음만 수행한다.

- 현재 Topic을 쉽게 설명
- 오답 이유 설명
- 관련 선수 개념 안내
- 추가 연습문제 제공
- 기록 사례의 단계별 분석 지원

AI 튜터는 다음을 하지 않는다.

- 공식 근거 없는 법률 자문
- 최신 분류 코드 추측
- 출처 없는 시험정보 확정
- 실제 환자정보 처리
- 검증되지 않은 정답 생성

# 12. 출판 파이프라인

Markdown에서 다음을 자동 생성한다.

- 웹 콘텐츠
- 앱 콘텐츠 JSON
- DOCX
- PDF
- 강사용 문제지
- 학생용 문제지
- 정답 및 해설서
- 플래시카드 CSV

# 13. 검토 역할

- Content Writer
- Medical Terminology Reviewer
- HIM Domain Reviewer
- Classification Reviewer
- Statistics Reviewer
- Legal/Policy Reviewer
- Question Editor
- Copy Editor
- Accessibility Reviewer
- Technical Editor

한 사람이 여러 역할을 수행할 수 있으나 검토 단계는 구분한다.

# 14. 초기 다음 작업

1. 최신 공식 시험 정보를 EXAM_GUIDE에 반영
2. `content/volume-1/chapter-01/` 생성
3. Chapter 1을 20개 이상의 Topic으로 분할
4. 기존 DOCX 초안의 내용을 Topic으로 재작성
5. 각 Topic에 출처 ID 연결
6. 샘플 앱에서 Topic 5개 렌더링
7. 문제·해설 표시 방식 검증
