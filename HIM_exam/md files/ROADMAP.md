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

**진행 현황 (2026-07-19):** Volume I 16개 챕터 전체(100%) 완성 및 검증 통과. 총 225개 Topic, 문제 390개, 도식 2개, Reference 26건. Chapter 15(건강보험)의 급여 기준·심사 세부 절차, Chapter 16(의료데이터와 AI)의 국내 AI 의료기기 인허가 절차는 원문 미확인으로 "검증 필요" 표시 유지.

Volume II(의학용어) 16개 챕터 전체(100%) 완성 및 검증 통과. 총 97개 Topic, 문제 194개. 계통별 Chapter(3~14)는 CURRICULUM.md의 10개 하위 항목을 Topic-First 원칙에 따라 6개 Topic(해부생리 / 증상 / 질환명 / 검사와 수술 / 약어와 문장해석 / 분류연결)으로 통합하는 패턴을 확립해 반복 적용했으며, 생식기계(Ch9, 여성·임신출산·남성 통합)와 피부계·정신건강(Ch13~14, 커리큘럼 세부 항목이 상대적으로 적어 5개 Topic으로 축약)은 예외적으로 조정했다. Chapter 15(종양학)는 Volume III 암등록 Part와의 연결을, Chapter 16(검사·수술·약물)은 Volume II 총정리와 Volume III로의 전환을 각각 마지막 Topic에서 명시적으로 다뤘다. `node scripts/validate-content.mjs` 기준 오류 0건, 경고 0건. GLOSSARY.md에 정리된 계통별 용어표를 1차 근거로 사용하며, 특정 교재의 정확한 서지사항은 원문 대조하지 않아 REF-TEXTBOOK-MEDICAL-TERMINOLOGY-001은 status: located로 유지한다. Volume III Part 1(병원통계) 저작 시작: 13개 Topic(통계 기초·척도·비율/비/율·대표값·산포도·환자센서스·환자일수·병상이용률·평균재원일수·병상회전율/간격·외래응급수술통계·산과사망감염통계·공식선택전략) 완성 및 검증 통과, 문제 26개. 병상이용률·평균재원일수 등 국제적으로 통용되는 표준 공식을 다루되, 국내 국시원 공식의 정확한 표기·반올림 규칙·특수 사례 처리는 원문 대조하지 않아 각 Topic에 "검증 필요"로 명시했다. `node scripts/validate-content.mjs` 기준 오류 0건, 경고 0건. Part 2(질병 및 의료행위 분류) 완성: 14개 Topic, 문제 28개. Part 3(암등록) 완성: 10개 Topic(암등록목적/국가암등록사업, 등록대상/자료원, 원발부위, 조직학적형태/행동양식, 분화도, 병기TNM체계, 진단일결정, 다중원발암, 치료정보/추적조사, 데이터품질/사례종합), 문제 20개. 특정 KCD 코드 번호와 국내 국가암등록사업의 구체적 관리 주체·법적 근거는 일절 명시하지 않고 분류·등록 원리 개념 위주로 서술했으며, 구체적 코드·기준은 공식 분류집·지침 확인이 필요함을 각 Topic에 명시했다. `node scripts/validate-content.mjs` 기준 오류 0건, 경고 0건.

**Volume III 전체 완료(2026-07-19):** Part 1~3 총 37개 Topic, 문제 74개.

**Volume IV(의무기록 실무) 저작 — 신규 Case 콘텐츠 모델 도입:** CONTENT_MODEL.md에 정의되어 있던 별도의 Case 모델(CASE-MR-*)을 실제로 구축했다. `schemas/case.schema.json` 신규 생성, `scripts/validate-content.mjs`에 `cases/` 디렉터리 스캔·검증 로직(ID 패턴 `CASE-MR-[0-9]{6}`, `deidentified: true` 필수 검증, 10단계 본문 섹션 제목 검증, questions/references/topic 교차 참조 검증)을 추가했다. `cases/_CASE_TEMPLATE.md` 템플릿도 함께 만들었다.

Chapter 1(기록 해석의 기초)은 5개 항목이 개념 학습에 가까워 기존 Topic 모델로 작성(5개 Topic: 의학용어해석·약어해석·검사결과읽기·진단처치연결·시간순재구성). Chapter 2~15는 CURRICULUM.md가 정의한 10단계 사례 구조(사례개요·원문기록·핵심용어·시간순재구성·진단및처치추출·기록누락모순점검·분류또는통계적용·법적윤리적고려·연습문제·상세해설)를 따르는 Case로 각 1건씩 작성했다(외래/입원/응급/수술/산과신생아/종양/질병분류통합/의료행위분류통합/암등록통합/의료통계통합/기록완결성/개인정보법규/보험청구연계/종합모의실무, 총 14개 Case). 모든 환자 정보는 합성 ID(SYN-*)를 사용해 완전히 비식별화했다.

`node scripts/validate-content.mjs` 기준 오류 0건, 경고 0건.

---

## 전체 프로젝트 완료 현황 (2026-07-19)

Volume I~IV 전체 완성: Topic 364개, Case 14개, 문제 698개, Reference 27건, Asset 2개(도식). 검증 파일 총 1,105개, 오류 0건·경고 0건.

- Volume I(보건의료정보관리 개론) 16개 챕터, 225개 Topic
- Volume II(의학용어) 16개 챕터, 97개 Topic
- Volume III(병원통계·분류·암등록) 3개 Part, 37개 Topic
- Volume IV(의무기록 실무) 15개 챕터, 5개 Topic + 14개 Case

다음 단계 제안(Phase 3 이후, 앱 개발 착수 전 검토 필요):
1. 법령·통계 공식·분류 코드 중 "검증 필요"로 표시된 항목의 원문 대조(국시원 공고, 관련 법령, KCD 공식 분류집, 국가암등록사업 지침 등)
2. 내용 전문가(HIM Domain Reviewer, Legal/Policy Reviewer 등) 검토
3. Phase 3(앱 MVP) 착수 — 콘텐츠 JSON 변환, 학습 진도 모델 구현
4. Volume II~IV의 추가 도식(Asset) 보강 검토(현재 Asset은 Volume I에만 2건 존재)

## GLOSSARY.md 품질 감사 및 정리 (2026-07-20)

사용자 요청으로 GLOSSARY.md의 의학용어가 국가시험에 적절히 구성되었는지 검증했다.

- **계통별 용어표(1~15절, 어근/접두사/접미사 + 14개 계통)**: 중복 키 점검 결과 Pancreat/o(소화/내분비 이중 기능), Thromb/o(혈전/혈소판 동음이의 어근) 두 건만 발견되었고 둘 다 의도된 정상적 중복이라 유지. Circumcision의 한글 번역에서 오탈자("환상군절제술" → "환상절제술") 1건 수정.
- **"16. 의학용어 주요 약어" 절 전체 삭제**: 이 절(약 400개 항목)은 문서 자체가 선언한 "1:1 (용어:의미) 관계" 설계 원칙을 위반하는 중복 키가 9건(AC, ARF, BBB, CT, CVA, DI, LOC, MR, Tx) 존재했고, 이 중 LOC·DI는 서로 모순되는 두 가지 의미가 병기되어 있었다. 앞선 1~15절과 20개 약어가 중복되었으며 그중 CHF는 "congestive heart failure"를 "만성심부전"으로 오역(정확히는 울혈심부전)해 기존 절의 정확한 정의와 충돌했다. 또한 번역이 누락되거나 깨진 항목(BSV, C-P, G/S, CPB, CML, ROS, H, "B all C" 등), 행이 어긋나 값이 뒤바뀐 항목(CR 항목에 엉뚱하게 "페니실린 G칼륨"이 기재됨), 특정 병원 내부 은어·상품명 수준의 항목(Bivon, Beta SOL, Bus-com, CB oint, E-pump, Amino-TPN)이 다수 포함되어 있어, 출처 검증 없이 대량 붙여넣기된 것으로 판단했다. 국가시험 대비 자료로서의 신뢰성과 "Evidence First" 원칙에 부합하지 않아 절 전체를 삭제했다. GLOSSARY.md version 1.5.0 → 1.6.0.

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

- [x] Chapter 1~16 Topic 제작 — 225개 Topic 완성 및 검증 통과(2026-07-19)
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
