export type Topic = {
  id: string;
  slug: string;
  title: string;
  title_en?: string;
  volume: number;
  chapter: number;
  section: number;
  order: number;
  status: string;
  difficulty: string;
  importance: string;
  exam_frequency: string;
  estimated_minutes: number;
  prerequisites: string[];
  related_topics: string[];
  tags: string[];
  content_type: string[];
  as_of_date?: string;
  verified: boolean;
  reviewers: string[];
  references: string[];
  assets: string[];
  questions: string[];
  body: string;
  summary: string;
  keyPoints: string[];
  chapterKey: string;
  chapterLabel: string;
};

export type QuestionOption = {
  id: string;
  text: string;
};

export type Question = {
  id: string;
  status: string;
  type: string;
  topic_ids: string[];
  subject_area?: string;
  difficulty?: string;
  cognitive_level?: string;
  importance?: string;
  stem: string;
  options: QuestionOption[];
  answer: string[];
  explanation: string;
  distractor_explanations: Record<string, string>;
  references: string[];
  verified: boolean;
};

export type GlossaryEntry = {
  term: string;
  english: string;
  abbreviation: string;
  description: string;
};

export type CatalogChapter = {
  key: string;
  volume: number;
  chapter: number;
  label: string;
  topicCount: number;
};

export type LearningDataset = {
  topics: Topic[];
  questions: Question[];
  glossaryEntries: GlossaryEntry[];
  glossaryMarkdown: string;
  volumes: number[];
  chapters: CatalogChapter[];
};

export type FocusSettings =
  | { mode: "none" }
  | { mode: "volume"; volume: number }
  | { mode: "chapter"; chapterKey: string };

export type DailyPack = {
  topic: Topic;
  questions: Question[];
};
