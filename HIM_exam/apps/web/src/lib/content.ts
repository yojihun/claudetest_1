import { cache } from "react";

import dataset from "@/generated/learning-dataset.json";
import type { LearningDataset } from "@/lib/types";

export const getLearningDataset = cache(async (): Promise<LearningDataset> => {
  return dataset as unknown as LearningDataset;
});
