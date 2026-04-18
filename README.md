# 402 Landing Pages

A small Astro prototype for exploring static, SEO-friendly landing pages for 402-style paid services.

## What the app currently does

- renders a static index page with links to mock service pages
- renders 2 mock landing pages from structured data in `src/data/services.ts`
- uses Astro static generation so the site can be deployed to GitHub Pages with no database
- includes a GitHub Actions workflow to build and deploy on pushes to `main`
- keeps all demo content in git so the site can be reviewed through normal pull requests

## Mock pages included

- `SparkFlow Transcribe` — fictional L402 transcription API
- `RelayGuard Moderation` — fictional x402 moderation API

These pages use invented data only. They are here to validate the static site shape, navigation, and deployment path.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:4321/402-landing-pages/` in local dev if you want to mimic the GitHub Pages base path closely, or just use Astro's root dev URL during editing.

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
├── astro.config.mjs
├── src/
│   ├── data/services.ts
│   ├── layouts/BaseLayout.astro
│   └── pages/
│       ├── index.astro
│       └── services/[slug].astro
└── README.md
```

## What still needs to be done

In my opinion, the next useful steps are:

1. replace mock records with a real input format that is easy for automation to write, likely JSON or Markdown content files rather than a hand-edited TypeScript array
2. define a deterministic quality gate for which services deserve a page and keep that logic outside the rendering layer
3. build an ingestion loop that discovers candidates, scores them, and only writes approved records into the site data directory
4. add richer SEO fields per service, including title tags, meta descriptions, canonical URLs, Open Graph data, and JSON-LD schema
5. add a clear visual distinction between approved, watchlist, and rejected services if this evolves into a broader directory
6. add automated checks for duplicate copy, broken links, and static build regressions before deploy
7. decide whether generated service records should live directly in this repo or be synced in from a separate data repo/pipeline

## Why Astro here

Astro is a good fit for this experiment because the site is fully static, content-oriented, and simple to deploy to GitHub Pages.
