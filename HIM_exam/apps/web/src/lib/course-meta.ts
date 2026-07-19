import type { Topic } from "@/lib/types";

const volumeTitles: Record<number, string> = {
  1: "보건의료정보관리 개론",
  2: "의학용어",
  3: "병원통계·분류·암등록",
  4: "의무기록 실무",
};

const chapterTitles: Record<string, string> = {
  "V1-C1": "보건의료정보관리 개론",
  "V1-C2": "의료기록의 이해",
  "V1-C3": "보건의료정보관리사의 직무",
  "V1-C4": "의료기관과 조직",
  "V1-C5": "의무기록 작성",
  "V1-C6": "의무기록 관리",
  "V1-C7": "EMR·EHR와 의료정보시스템",
  "V1-C8": "의료정보 표준",
  "V1-C9": "의료데이터 품질관리",
  "V1-C10": "의료정보 활용",
  "V1-C11": "의료의 질 관리",
  "V1-C12": "환자안전",
  "V1-C13": "의료기관 인증",
  "V1-C14": "의료관계 법규",
  "V1-C15": "건강보험",
  "V1-C16": "의료데이터와 AI",
  "V2-C1": "의학용어의 구조",
  "V2-C2": "인체 구조와 기본 개념",
  "V2-C3": "근골격계",
  "V2-C4": "심혈관계",
  "V2-C5": "혈액·림프·면역계",
  "V2-C6": "호흡기계",
  "V2-C7": "소화기계",
  "V2-C8": "비뇨기계",
  "V2-C9": "생식기계",
  "V2-C10": "내분비계",
  "V2-C11": "신경계",
  "V2-C12": "감각계",
  "V2-C13": "피부계",
  "V2-C14": "정신건강",
  "V2-C15": "종양학 용어",
  "V2-C16": "검사·수술·약물 관련 용어",
  "V3-C1": "병원통계",
  "V3-C2": "질병·의료행위 분류",
  "V3-C3": "암등록",
  "V4-C1": "기록 해석의 기초",
  "V4-C2": "외래기록 실무",
  "V4-C3": "입원기록 실무",
  "V4-C4": "응급기록 실무",
  "V4-C5": "수술기록 실무",
  "V4-C6": "산과·신생아 기록 실무",
  "V4-C7": "종양 기록 실무",
  "V4-C8": "질병분류 통합 사례",
  "V4-C9": "의료행위 분류 통합 사례",
  "V4-C10": "암등록 통합 사례",
  "V4-C11": "의료통계 통합 사례",
  "V4-C12": "기록 완결성 분석",
  "V4-C13": "개인정보·법규 사례",
  "V4-C14": "보험청구 연계 사례",
  "V4-C15": "종합 모의 실무",
};

function toRoman(value: number) {
  const numerals = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  return numerals[value] ?? String(value);
}

export function getRomanVolumeLabel(volume: number) {
  return toRoman(volume);
}

export function getVolumeTitle(volume: number) {
  return volumeTitles[volume] ?? `Volume ${volume}`;
}

export function getChapterTitle(chapterKey: string, chapter: number) {
  return chapterTitles[chapterKey] ?? `Chapter ${chapter}`;
}

export function getTopicOutlineLabel(topic: Topic) {
  const volumeTitle = getVolumeTitle(topic.volume);
  const chapterTitle = getChapterTitle(topic.chapterKey, topic.chapter);

  return `${toRoman(topic.volume)}. ${volumeTitle}  ${topic.chapter}) ${chapterTitle}`;
}
