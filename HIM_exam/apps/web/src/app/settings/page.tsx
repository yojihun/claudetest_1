import { SettingsClient } from "@/components/settings-client";
import { getLearningDataset } from "@/lib/content";

export default async function SettingsPage() {
  const dataset = await getLearningDataset();

  return <SettingsClient dataset={dataset} />;
}
