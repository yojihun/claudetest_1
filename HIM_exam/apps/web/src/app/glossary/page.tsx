import { GlossaryClient } from "@/components/glossary-client";
import { getLearningDataset } from "@/lib/content";

export default async function GlossaryPage() {
  const dataset = await getLearningDataset();

  return <GlossaryClient entries={dataset.glossaryEntries} />;
}
