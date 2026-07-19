# 보건의료정보관리사 학습 플랫폼

보건의료정보관리사 국가시험 대비 학습 콘텐츠를 웹 앱, 모바일 앱, 전자책, PDF 및 DOCX로 확장하기 위한 단일 소스 프로젝트이다.

## 시작 순서

1. `PROJECT.md` — 프로젝트 목표와 절대 원칙
2. `EXAM_GUIDE.md` — 시험 정보와 출제 분석
3. `CURRICULUM.md` — 전체 학습 범위와 지식 트리
4. `CONTENT_MODEL.md` — 앱에서 사용할 콘텐츠 데이터 구조
5. `WRITING_GUIDE.md` — 본문 집필 규칙
6. `QUESTION_GUIDE.md` — 문제 제작 규칙
7. `IMAGE_GUIDE.md` — 도식·그림 제작 규칙
8. `REFERENCE_GUIDE.md` — 출처 검증과 인용 규칙
9. `GLOSSARY.md` — 용어 및 표기 기준
10. `ROADMAP.md` — 콘텐츠·앱 개발 단계

## 핵심 원칙

- Markdown을 단일 원본으로 사용한다.
- 책의 장·절보다 작은 `Topic`을 기본 콘텐츠 단위로 삼는다.
- 모든 법령, 시험제도, 코드 및 표준은 공식 출처와 기준일을 기록한다.
- 본문, 문제, 해설, 이미지 설명, 참고문헌을 서로 연결한다.
- 확인되지 않은 내용은 `verified: false`로 표시한다.
- 앱과 교재는 같은 콘텐츠에서 생성한다.

## 권장 디렉터리

```text
health-information-manager/
├── README.md
├── PROJECT.md
├── EXAM_GUIDE.md
├── CURRICULUM.md
├── CONTENT_MODEL.md
├── WRITING_GUIDE.md
├── QUESTION_GUIDE.md
├── IMAGE_GUIDE.md
├── REFERENCE_GUIDE.md
├── GLOSSARY.md
├── ROADMAP.md
├── content/
│   ├── volume-1/
│   ├── volume-2/
│   ├── volume-3/
│   └── volume-4/
├── questions/
├── assets/
│   ├── diagrams/
│   ├── illustrations/
│   └── tables/
├── references/
├── schemas/
└── scripts/
```

## 현재 상태

이 문서 세트는 지금까지 합의된 프로젝트 방향과 초안 목차를 구조화한 초기 기준본이다. 시험 시행계획, 과목별 문항 수, 시험시간, 합격기준 및 최신 법령은 콘텐츠 제작 전에 국시원과 국가법령정보센터의 최신 공고로 검증해야 한다.
