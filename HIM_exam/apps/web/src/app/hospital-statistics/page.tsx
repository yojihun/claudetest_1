import { getLearningDataset } from "@/lib/content";
import { HospitalStatisticsClient } from "@/components/hospital-statistics-client";

export default async function HospitalStatisticsPage() {
  const dataset = await getLearningDataset();

  return <HospitalStatisticsClient dataset={dataset} />;
}
