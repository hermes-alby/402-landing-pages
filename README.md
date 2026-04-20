# 402 Landing Pages

A static Astro site for publishing user-facing landing pages for agent-usable 402 services.

## Site purpose

The site presents production-style landing pages for services that agents can use with pay-per-use 402 payments.
Each landing page is an **agent × service** variant that explains:

- what the service does
- which provider powers it
- how pricing works
- when the service is useful
- where a user should go next to install or express interest

The homepage is intended to help end users discover useful services, compare options, and understand which workflows are already supported.

## Current implementation

- renders a static homepage with featured services and a broader directory of service pages
- renders dedicated pages for `OpenClaw`, `Claude`, `Codex`, and `Hermes`
- uses real provider/service records as the content base
- keeps the site fully static so it can deploy to GitHub Pages with no database
- includes install and coming-soon flows for different support states
- uses public-facing sections such as example output, use cases, pricing, example prompts, and FAQ

## Current service/page model

Each page is an **agent × service** variant.

Current examples include:

- OpenClaw × PayPerQ GPT Image 1.5
- Claude × PayPerQ GPT Image 1.5
- Codex × PayPerQ GPT Image 1.5
- Hermes × PayPerQ GPT Image 1.5

Each variant currently includes:

- a title and description focused on the user outcome
- explicit no-sign-up / no-subscription messaging where accurate
- example output blocks
- use case cards
- explanation of why 402 payments fit the workflow
- example prompt blocks where appropriate
- FAQ content
- CTA routing to `/install/` or `/coming-soon/` based on support state

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
│   │   ├── faqs.ts
│   │   ├── install-flows.ts
│   │   ├── providers/
│   │   │   ├── cascade.ts
│   │   │   ├── index.ts
│   │   │   └── payperq.ts
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

## Internal workflow notes

- `docs/provider-intake-and-activation.md` — general provider-intake, service-review, branding, and paid-activation workflow for repeating or automating the flow later
- `docs/provider-tests/sats4ai-translate-text-2026-04-19.md` — first successful end-to-end paid endpoint test record for Sats4AI translation

## What still needs to be done

1. replace remaining mock output images and placeholder payment amounts with real captured example outputs where available
2. finalize the CTA destination and install UX for supported services
3. improve SEO metadata per variant, including canonical strategy, Open Graph images, and structured data
4. keep provider and service registry entries fresh with real last-checked dates as more endpoints are reviewed
5. automate repeatable 402index intake runs that refresh provider and representative service registry entries without treating 402index health as the approval gate
6. add automation that can generate more agent-specific pages from approved provider/service records
7. add checks for thin or duplicate copy as the number of agents, providers, and services grows

## Why Astro here

Astro is a good fit because the site is fully static, content-oriented, and simple to deploy to GitHub Pages.
