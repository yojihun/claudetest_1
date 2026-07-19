import examQuestions from "@/generated/past-exam-2025-session2.json";
import { PastExamClient } from "@/components/past-exam-client";

export default function PastExamPage() {
  return <PastExamClient questions={examQuestions} />;
}
