import type { Topic } from "@/lib/types";

const volumeTitles: Record<number, string> = {
  1: "보건의료정보관리",
  2: "의학용어",
  3: "병원통계·질병분류·암등록",
  4: "실무",
};

const chapterTitles: Record<string, string> = {
  "V1-C1": "보건의료정보관리 개론",
  "V1-C2": "의료기록의 이해",
  "V1-C3": "보건의료정보관리사의 직무",
  "V1-C4": "의료기관과 조직",
};

function toRoman(value: number) {
  const numerals = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  return numerals[value] ?? String(value);
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
