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
├── public/
│   ├── agents/*.svg
│   └── mock-payperq-output.svg
├── src/
│   ├── components/ActionCta.astro
│   ├── data/
│   │   ├── agents.ts
│   │   ├── build-variants.ts
│   │   ├── install-flows.ts
│   │   ├── providers.ts
│   │   ├── services/
│   │   │   ├── cascade-tweet-search.ts
│   │   │   ├── index.ts
│   │   │   └── payperq-gpt-image-1-5.ts
│   │   └── types.ts
│   ├── layouts/BaseLayout.astro
│   └── pages/
│       ├── agents/[agent]/[slug].astro
│       ├── coming-soon/[agent].astro
│       ├── index.astro
│       └── install/[agent].astro
└── README.md
```

## What still needs to be done

In my opinion, the next useful steps are:

1. replace the mock output image and mock payment amount with real captured example outputs once the payment flow is tested
2. decide the final CTA destination and install UX for Bitcoin-compatible 402 services
3. improve SEO metadata per variant, including canonical strategy, Open Graph images, and structured data
4. add automation that can generate N agent-specific pages from one approved provider/service record
5. add checks for thin or duplicate copy as the number of agents, providers, and services grows

## Why Astro here

Astro is a good fit for this experiment because the site is fully static, content-oriented, and simple to deploy to GitHub Pages.
