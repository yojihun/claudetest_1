"use client";

import type { FocusSettings } from "@/lib/types";

const FOCUS_SETTINGS_KEY = "him-focus-settings";
const REVIEW_NOTE_KEY = "him-review-question-ids";
const GLOSSARY_SAVED_TERMS_KEY = "him-glossary-saved-terms";

export function loadFocusSettings(): FocusSettings {
  if (typeof window === "undefined") {
    return { mode: "none" };
  }

  const raw = window.localStorage.getItem(FOCUS_SETTINGS_KEY);
  if (!raw) {
    return { mode: "none" };
  }

  try {
    const parsed = JSON.parse(raw) as FocusSettings;
    if (!parsed || typeof parsed !== "object" || !("mode" in parsed)) {
      return { mode: "none" };
    }
    return parsed;
  } catch {
    return { mode: "none" };
  }
}

export function saveFocusSettings(settings: FocusSettings) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(FOCUS_SETTINGS_KEY, JSON.stringify(settings));
}

export function loadReviewQuestionIds() {
  if (typeof window === "undefined") {
    return [] as string[];
  }

  const raw = window.localStorage.getItem(REVIEW_NOTE_KEY);
  if (!raw) {
    return [] as string[];
  }

  try {
    const parsed = JSON.parse(raw) as string[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveReviewQuestionIds(questionIds: string[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(REVIEW_NOTE_KEY, JSON.stringify(questionIds));
}

export function loadSavedGlossaryTerms() {
  if (typeof window === "undefined") {
    return [] as string[];
  }

  const raw = window.localStorage.getItem(GLOSSARY_SAVED_TERMS_KEY);
  if (!raw) {
    return [] as string[];
  }

  try {
    const parsed = JSON.parse(raw) as string[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveSavedGlossaryTerms(termIds: string[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    GLOSSARY_SAVED_TERMS_KEY,
    JSON.stringify(termIds),
  );
}
