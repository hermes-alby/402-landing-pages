# 402 Landing Pages

A small Astro prototype for exploring result-oriented, agent-specific landing pages for useful 402 endpoints.

## What the app currently does

- renders a static index page listing 4 landing page variants for the same endpoint
- renders one page each for `OpenClaw`, `Claude`, `Codex`, and `Hermes`
- uses a real example endpoint URL from PayPerQ for the mock content base:
  - `https://api.ppq.ai/v1/images/generations/gpt-image-1.5`
- keeps the site fully static so it can deploy to GitHub Pages with no database
- includes repeated CTA modules pointing to a placeholder install page for the Alby Payments Skill
- removes the earlier score-based mock sections in favor of result-oriented sections like example output, use cases, example prompt, and FAQ

## Current landing page concept

Each page is an **agent × endpoint** variant.

Current variants:

- OpenClaw × PayPerQ GPT Image 1.5
- Claude × PayPerQ GPT Image 1.5
- Codex × PayPerQ GPT Image 1.5
- Hermes × PayPerQ GPT Image 1.5

Each variant currently includes:

- title and description focused on what the agent can achieve
- explicit no-sign-up / no-subscription messaging
- example output block with mock cost paid
- use case cards
- explanation of why 402 payments fit the agent workflow
- example prompt block
- Alby-oriented FAQ
- CTA linking to `/install/`

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build is emitted to `dist/`.

## Deploy

This repo is configured for GitHub Pages via `.github/workflows/deploy.yml`.

Expected production URL:

`https://hermes-alby.github.io/402-landing-pages/`

## Project structure

```text
.
├── .github/workflows/deploy.yml
├── public/mock-payperq-output.svg
├── src/
│   ├── components/InstallCta.astro
│   ├── data/services.ts
│   ├── layouts/BaseLayout.astro
│   └── pages/
│       ├── agents/[agent]/[slug].astro
│       ├── index.astro
│       └── install.astro
└── README.md
```

## What still needs to be done

In my opinion, the next useful steps are:

1. split endpoint facts, agent-specific framing, and FAQ content into cleaner reusable data structures or content files
2. replace the mock output image and mock payment amount with real captured example outputs once the payment flow is tested
3. decide the final CTA destination and install UX for Bitcoin-compatible 402 services
4. define how non-Bitcoin 402 services should swap CTA copy and install targets without changing the rest of the page structure
5. improve SEO metadata per variant, including canonical strategy, Open Graph images, and structured data
6. add automation that can generate N agent-specific pages from one approved endpoint record
7. add checks for thin/duplicate copy as the number of agents and endpoints grows

## Why Astro here

Astro is a good fit for this experiment because the site is fully static, content-oriented, and simple to deploy to GitHub Pages.
