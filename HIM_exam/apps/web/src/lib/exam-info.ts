export const HIM_EXAM_DATE = {
  year: 2026,
  month: 12,
  day: 5,
  weekday: "토요일",
};

function getLocalStartOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function getExamDateLabel() {
  return `${HIM_EXAM_DATE.year}년 ${HIM_EXAM_DATE.month}월 ${HIM_EXAM_DATE.day}일 ${HIM_EXAM_DATE.weekday}`;
}

export function getExamDdayLabel(now = new Date()) {
  const today = getLocalStartOfDay(now);
  const examDate = new Date(
    HIM_EXAM_DATE.year,
    HIM_EXAM_DATE.month - 1,
    HIM_EXAM_DATE.day,
  );

  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round(
    (getLocalStartOfDay(examDate).getTime() - today.getTime()) / millisecondsPerDay,
  );

  if (diffDays > 0) {
    return `D-${String(diffDays).padStart(2, "0")}`;
  }

  if (diffDays === 0) {
    return "D-Day";
  }

  return `D+${String(Math.abs(diffDays)).padStart(2, "0")}`;
}
