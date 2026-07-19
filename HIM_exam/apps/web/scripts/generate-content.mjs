import path from "node:path";

import { writeLearningDatasetSnapshot } from "./content-loader.mjs";

writeLearningDatasetSnapshot()
  .then((outputPath) => {
    console.log(`Generated ${path.relative(process.cwd(), outputPath)}`);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
