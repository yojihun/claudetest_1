import "server-only";

import { cache } from "react";
import type { LearningDataset } from "@/lib/types";

export const getLearningDataset = cache(async (): Promise<LearningDataset> => {
  const module = await import("../../scripts/content-loader.mjs");
  return module.buildLearningDataset() as Promise<LearningDataset>;
});
