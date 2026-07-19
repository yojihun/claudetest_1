import type { DailyPack, FocusSettings, Question, Topic } from "@/lib/types";

function pickRandom<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle<T>(items: T[]) {
  const clone = [...items];
  for (let index = clone.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [clone[index], clone[randomIndex]] = [clone[randomIndex], clone[index]];
  }
  return clone;
}

export function matchesFocus(topic: Topic, settings: FocusSettings) {
  if (settings.mode === "none") {
    return false;
  }

  if (settings.mode === "volume") {
    return topic.volume === settings.volume;
  }

  return topic.chapterKey === settings.chapterKey;
}

function weightedTopics(topics: Topic[], settings: FocusSettings) {
  const pool: Topic[] = [];

  for (const topic of topics) {
    const weight = matchesFocus(topic, settings) ? 4 : 1;
    for (let count = 0; count < weight; count += 1) {
      pool.push(topic);
    }
  }

  return pool;
}

function buildQuestionPoolForTopic(
  topic: Topic,
  topics: Topic[],
  questions: Question[],
  settings: FocusSettings,
) {
  const directIds = new Set(topic.questions);
  const directQuestions = questions.filter(
    (question) =>
      directIds.has(question.id) || question.topic_ids.includes(topic.id),
  );

  if (directQuestions.length >= 2) {
    return directQuestions;
  }

  const siblingTopicIds = topics
    .filter((candidate) => candidate.chapterKey === topic.chapterKey)
    .map((candidate) => candidate.id);
  const siblingQuestionPool = questions.filter((question) =>
    question.topic_ids.some((topicId) => siblingTopicIds.includes(topicId)),
  );

  const focusedPool =
    settings.mode === "none"
      ? siblingQuestionPool
      : siblingQuestionPool.filter((question) =>
          question.topic_ids.some((topicId) =>
            topics.some(
              (candidate) =>
                candidate.id === topicId && matchesFocus(candidate, settings),
            ),
          ),
        );

  return [...new Map([...directQuestions, ...focusedPool].map((item) => [item.id, item])).values()];
}

export function buildDailyPack(
  topics: Topic[],
  questions: Question[],
  settings: FocusSettings,
): DailyPack | null {
  if (topics.length === 0 || questions.length === 0) {
    return null;
  }

  const selectedTopic = pickRandom(weightedTopics(topics, settings));
  const questionPool = buildQuestionPoolForTopic(
    selectedTopic,
    topics,
    questions,
    settings,
  );
  const count = Math.min(questionPool.length, 2 + Math.floor(Math.random() * 2));

  if (count === 0) {
    return null;
  }

  return {
    topic: selectedTopic,
    questions: shuffle(questionPool).slice(0, count),
  };
}

export function buildTopicQuestionSet(topic: Topic, questions: Question[]) {
  const directIds = new Set(topic.questions);
  const pool = questions.filter(
    (question) =>
      directIds.has(question.id) || question.topic_ids.includes(topic.id),
  );

  return shuffle(pool);
}
