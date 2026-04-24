# Landing page eval framework

This repo now has a **human-triggered** landing-page eval framework.

The goal is not to auto-grade every page yet. The goal is to make it easy to:

1. evaluate one landing page at a time
2. store good and bad examples as we review pages together
3. keep the rubric and examples in git so the process stays consistent

## What is in this folder

- `rubric.json` — the current scoring criteria, weights, phrase lists, and thresholds
- `examples/good/` — reviewed examples of strong copy
- `examples/bad/` — reviewed examples of weak or misleading copy
- `examples/TEMPLATE.json` — schema for adding a new example
- `reports/` — generated eval reports for local review only

## Workflow

### 1. Build the site

```bash
npm run build
```

### 2. Check the eval framework files

```bash
npm run eval:check
```

### 3. Evaluate one page

```bash
npm run eval:page -- --slug sats4ai-generate-text --agent hermes
```

Short form also works:

```bash
npm run eval:page -- sats4ai-generate-text hermes
```

This writes:

- `evals/reports/hermes--sats4ai-generate-text.json`
- `evals/reports/hermes--sats4ai-generate-text.md`

## How to add a reviewed example

Copy `evals/examples/TEMPLATE.json` into either `evals/examples/good/` or `evals/examples/bad/`, then fill in:

- `slug`
- `agent`
- `title`
- `excerpt`
- `notes`
- `criterionTags`

Examples should be short and specific. Prefer a focused excerpt plus notes about why it is good or bad.

## Current scope

This first version is intentionally narrow:

- no CI gating yet
- no auto-rewrite loop
- no mass scoring across all pages
- no requirement to evaluate every PR yet

It is a starter framework so we can review a page together, add examples, and tighten the rubric over time.
