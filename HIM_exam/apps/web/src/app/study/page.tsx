import { ChapterStudyClient } from "@/components/chapter-study-client";
import { getLearningDataset } from "@/lib/content";

export default async function StudyPage() {
  const dataset = await getLearningDataset();

  return <ChapterStudyClient dataset={dataset} />;
}
