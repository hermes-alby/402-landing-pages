# Landing page eval framework

This repo now has a **human-triggered eval framework executed by Hermes**.

The qualitative judgment is not meant to run from a local script or external API key in this repository.
Instead, Hermes should:

1. read the rubric, prompt, examples, and relevant landing-page source
2. inspect the built page and supporting facts
3. write the eval report artifacts into `evals/reports/`
4. run structural validation on those generated artifacts

## What is in this folder

- `rubric.json` — the current qualitative scoring criteria and weights
- `prompt.md` — instructions Hermes should follow while judging a page
- `examples/good/` — reviewed examples of strong copy
- `examples/bad/` — reviewed examples of weak or misleading copy
- `examples/TEMPLATE.json` — schema for adding a new example
- `report-template.json` — shape for Hermes-written JSON reports
- `report-template.md` — shape for Hermes-written Markdown reports
- `reports/` — generated eval reports

## Workflow

### 1. Build the site

```bash
npm run build
```

### 2. Check the eval framework files

```bash
npm run eval:check
```

### 3. Ask Hermes to evaluate one page

Hermes should read:

- `evals/rubric.json`
- `evals/prompt.md`
- any relevant example files under `evals/examples/`
- the landing-page source under `src/data/services/`
- the built page under `dist/agents/<agent>/<slug>/index.html`

Hermes then writes:

- `evals/reports/<agent>--<slug>.json`
- `evals/reports/<agent>--<slug>.md`

### 4. Validate the generated report files

```bash
npm run eval:validate-report -- \
  evals/reports/hermes--sats4ai-generate-text.json \
  evals/reports/hermes--sats4ai-generate-text.md
```

This step only checks structure. It does **not** judge copy quality.

## How to add a reviewed example

Copy `evals/examples/TEMPLATE.json` into either `evals/examples/good/` or `evals/examples/bad/`, then fill in:

- `slug`
- `agent`
- `title`
- `excerpt`
- `notes`
- `criterionTags`

Examples should be short and specific. Prefer a focused excerpt plus notes about why it is good or bad.

## Important boundary

The repository contains:

- the rubric
- the prompt
- the example corpus
- report templates
- structural validators

Hermes provides the actual qualitative judgment and writes the report artifacts.

## Current scope

This first version is intentionally narrow:

- Hermes-executed, not automatic CI scoring
- no auto-rewrite loop
- no mass scoring across all pages
- no requirement to evaluate every PR yet

It is a starter framework so we can review a page together, add examples, and tighten the rubric over time.
