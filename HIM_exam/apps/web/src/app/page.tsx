import { DailyStudyClient } from "@/components/daily-study-client";
import { getLearningDataset } from "@/lib/content";

export default async function Home() {
  const dataset = await getLearningDataset();

  return <DailyStudyClient dataset={dataset} />;
}
