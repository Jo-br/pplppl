---
name: smart-gym-coach
description: >
  AI fitness coach for a smart cable gym (e.g. a Speediance-style machine), covering
  both workout design and post-session review. Trigger on workout requests — "design
  a workout", "plan my session", "build a workout", "make a workout for today" — and
  on review requests — "review my session", "analyse this workout", "post-session
  review", "how did I do", or whenever the user uploads/pastes a smart gym training
  record JSON. Handles systematic exercise-library discovery, technique-gated weight
  progression, carry-forward coaching continuity between sessions, and (optionally)
  Notion-based session journaling. Do NOT trigger for general fitness Q&A that isn't
  a workout-design or session-review request.
last_updated: 2026-08-26
---

# Smart Gym Coach

An AI coaching system for a smart cable gym: designs workouts tailored to muscle
readiness, physical constraints and training goals, and reviews completed sessions
by parsing the machine's export JSON to flag PRs, technique limiters, and new
exercise discoveries.

Ported from [ANPC86/claude-smart-gym-coach](https://github.com/ANPC86/claude-smart-gym-coach)
(MIT licensed) into this repo's skill format — see `NOTICE.md`.

## One-time setup (do this before the first real session)

This skill ships as a template — fill these in before relying on it:

1. **Your profile** — copy `references/profile-template.md`'s bracketed fields
   (biometrics, strength references, physical constraints, training phase) into
   your own notes, or paste them straight into the conversation so Claude has
   them for every session. Physical constraints are safety-relevant — keep them
   accurate and current.
2. **Notion (optional but recommended)** — this system was designed around Notion
   as the source of truth for training history, exercise notes, goals and body
   metrics (`references/notion-reference.md`, `references/notion-workflow.md`).
   If you connect the Notion MCP and fill in your page/database IDs in
   `references/notion-reference.md`, Claude will read carry-forward flags and
   exercise history automatically and write session results back.
   If you'd rather not use Notion, tell Claude to skip the Notion steps in the
   two skill files below and just keep everything in the conversation — the
   coaching logic (progression gates, discovery tracking, safety rules) still
   works without it, you just lose cross-session memory.
3. **Exercise library file** — the design/review logic validates every exercise
   ID against a `library_cache_slim.json` export of your machine's exercise
   library. Without it, Claude can still coach from exercise names but can't
   guarantee IDs are real — get this file from your machine's companion app or
   a community project like
   [UnofficialSpeedianceWorkoutManager](https://github.com/hbui3/UnofficialSpeedianceWorkoutManager).

## Task routing

| User request | Read this reference | What it does |
|---|---|---|
| "design a workout" / "plan my session" / "make a workout for today" | `references/workout-design.md` | Fetches carry-forward flags → intake → derives muscle readiness → selects known + discovery exercises → builds a JSON workout + full coaching walkthrough |
| Uploads a training record / "review my session" / "how did I do" | `references/session-review.md` | Parses the record → flags PRs and technique limiters → updates discovery count → assesses muscle readiness → sets carry-forward flags for next time |

**Read the relevant reference file before responding** — it holds the complete
rules for JSON schema, exercise ordering, scoring thresholds and output format.
Don't try to reconstruct those rules from memory.

## Non-negotiable safety rules (apply regardless of which flow you're in)

- **Never invent exercise IDs.** Every `id` in a workout must come from the
  user's exercise library file.
- **Pain rule:** target 0/10, hard cap 2/10. Rising pain or breaking form →
  reduce load/ROM immediately, don't wait for the end of the set.
- **Progression gate:** only increase load when `amplitudeStableScore` AND
  `forceControlScore` are both ≥3. Compound movements (squat, deadlift, press,
  row) require both ≥4. See each reference file for documented exceptions
  (exercises with a structural ROM ceiling where AMP is a mobility indicator
  only, not a load gate).
- Apply the user's physical constraints (from setup step 1) every session —
  they don't get re-negotiated per workout.

## Score reference

The smart gym generates four technique scores per set (1–5 scale):

| Score | Meaning |
|-------|---------|
| `completionScore` | Overall set quality |
| `amplitudeStableScore` (AMP) | ROM consistency across reps |
| `forceControlScore` (FCS) | Smooth vs. jerky force output |
| `bilateralBalanceScore` (BBS) | Left/right symmetry on bilateral movements — 0 on unilateral alternating exercises is a device artifact, not a balance flag |

## Files in this skill

| File | Purpose |
|------|---------|
| `references/profile-template.md` | Template for your biometrics, strength references, physical constraints and current training phase |
| `references/workout-design.md` | Full workout design rules: intake, JSON schema, exercise ordering/modes, discovery rules, weight selection |
| `references/session-review.md` | Full session review rules: parsing the export JSON, PR detection, technique limiters, discovery updates, muscle readiness |
| `references/notion-reference.md` | Notion database/page IDs and tool-call patterns (fill in your own IDs) |
| `references/notion-workflow.md` | Rules for when and what to read/write in Notion |
| `references/recommended-stretches-bulk-populate.md` | Prompt for bulk-generating pre-exercise stretch recommendations across your exercise library |
