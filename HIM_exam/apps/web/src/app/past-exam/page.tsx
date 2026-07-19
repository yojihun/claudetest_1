import session1Questions from "@/generated/past-exam-2025-session1.json";
import session2Questions from "@/generated/past-exam-2025-session2.json";
import { PastExamClient } from "@/components/past-exam-client";

export default function PastExamPage() {
  return (
    <PastExamClient
      sessions={[
        {
          id: "session1",
          label: "1교시",
          sourceLabel: "2025년도 제42회 보건의료정보관리사 국가시험 1교시",
          description:
            "OCR 텍스트를 반영한 1교시 문항입니다. 한 문제씩 풀고 바로 아래에서 정답을 확인할 수 있습니다.",
          questions: session1Questions,
        },
        {
          id: "session2",
          label: "2교시",
          sourceLabel: "2025년도 제42회 보건의료정보관리사 국가시험 2교시",
          description:
            "한 문제씩 풀고, 바로 아래에서 정답과 선택지 기준 해설을 확인할 수 있습니다.",
          questions: session2Questions,
        },
      ]}
    />
  );
}
