---
name: HIM exam web UI system
description: HIM_exam apps/web uses Tailwind CSS v4 with shared semantic surface/button/input classes and a Korean medical exam prep visual system.
type: project
---

`HIM_exam/apps/web` uses Tailwind CSS v4 plus semantic global classes in `src/app/globals.css` (`app-panel`, `app-panel-strong`, `app-panel-tint`, `app-button-*`, `app-input`, `app-chip`) to drive the UI system. The active visual direction introduced on 2026-07-19 uses `Noto Sans KR`, strong navy/blue/teal accents, glassy white surfaces, and high-contrast exam-prep styling for study cards, headers, glossary, and settings views.

**Why:** The app needed a more memorable Korean learning-service feel with stronger color contrast while preserving the fixed header and scrollable content structure.
**How to apply:** When updating web UI in this project, prefer extending these shared tokens/classes and keep new screens aligned to the navy-blue-teal medical study palette instead of reintroducing isolated slate/emerald one-off styles.
