# Provider Intake and Activation Workflow

> Working notes for the 402 landing pages project. This document records the current manual test flow so we can formalize it into a repeatable provider registry + activation workflow later.

**Last updated:** 2026-04-19T08:16:35Z  
**Discovery scope for v1:** `402index.io` only

---

## Why this document exists

We need a scalable way to grow the landing pages catalog when 402index contains thousands of endpoints and many providers have very large service catalogs.

The key decision is:

- evaluate **providers first**
- only activate **a few endpoints per approved provider** at first
- test the real payment flow before generating landing pages
- record decisions in git so we do not re-evaluate the same provider repeatedly

This file captures the agreed manual workflow and the first live test case.

---

## Current design decisions

### Discovery source
For now we only use:

- `402index.io`

We are **not** scanning Satring, Sponge, x402 Bazaar directly, or other registries yet.

### Health interpretation
402index health is useful telemetry, but it is **not** the approval gate for provider intake.

Use it to notice possible risk or staleness, but do not reject an otherwise credible provider only because 402index currently reports degraded or down health.

### Control plane
We want a provider registry in the repo that records whether a provider is:

- approved
- rejected
- deferred
- duplicate
- already activated/live

### Existing providers
Providers already live in landing pages should be backfilled into the future registry as lightweight legacy entries, not re-reviewed from scratch.

Suggested legacy metadata shape:

- `reviewStatus: approved`
- `reviewSource: legacy-manual`
- `activationStatus: live`
- `backfilled: true`

### Workflow split
We want two distinct workflows:

1. **Provider intake / evaluation**
   - discover provider
   - dedupe against repo + open PRs
   - evaluate credibility
   - record decision in git

2. **Provider landing-page activation**
   - choose 1–3 cheap / interesting endpoints
   - review the real site / docs / branding
   - add provider + service records to the live data layer
   - create landing-page data and ship initial coming-soon or trial pages

3. **Provider paid testing / validation**
   - run a real paid test later as a separate follow-up task
   - capture outputs / artifacts
   - decide whether to keep, expand, or remove the provider after real usage evidence

---

## Proposed future repository structure

The first implementation step of this structure is now in place:

- `src/registry/types.ts`
- `src/registry/providers/*.ts`

The registry is currently used as the durable provider decision layer and includes lightweight backfilled entries for legacy providers plus a new entry for Sats4AI.

```text
registry/
  providers/
    <provider>.yaml
  provider-endpoint-candidates/
    <provider>.yaml

docs/
  provider-evaluations/
    <provider>.md
  provider-intake-and-activation.md
```

Rationale:

- `registry/providers/*` = machine-readable provider state
- `docs/provider-evaluations/*` = human-readable review notes and evidence
- `src/data/providers/*` and `src/data/services/*` remain the already-activated landing-page source of truth

### Provider registry should eventually record

- canonical provider key
- provider name
- website URL
- protocol(s)
- source indexes
- first seen / last reviewed dates
- decision status
- activation status
- duplicate-of link if relevant
- concise decision summary
- notes / links / docs / GitHub

---

## Manual v1 workflow

### Step 1 — Discover provider from 402index
- Search provider name on 402index
- Confirm there are indexed services/endpoints
- Note health, protocol, category, price, and source metadata from the index

### Step 2 — Dedupe before opening any PR
Check for existing references in:

- repo content
- existing provider registry entries (future)
- open GitHub PRs
- closed GitHub PRs if needed

Canonical dedupe should use the provider / brand / root domain, not individual endpoint paths.

### Step 3 — Evaluate provider credibility
Check:

- website quality
- docs quality
- pricing clarity
- terms / contact / support
- GitHub repos
- whether the provider exposes real discovery docs
- whether the endpoints issue valid payment challenges
- whether the service itself is useful enough to justify a landing page
- any obvious red flags

Important rule:

- **do not use 402index health as the decision gate for provider approval or rejection**
- record 402index health as telemetry only
- if a provider looks interesting, evaluate the real site and service directly
- a provider can still be worth tracking even when 402index currently shows degraded or down health

### Step 4 — Decide provider status
Recommended status buckets:

- `approved`
- `approved-for-trial`
- `deferred`
- `rejected`
- `duplicate`

### Step 5 — Add provider and service registry entries before activation
For an approved or deferred provider:

- add a provider registry entry with the review decision
- add 1 representative service registry entry for the best initial endpoint candidate
- keep service status separate from provider status
- mark untested endpoints as `activationStatus: not-started` and `landingPageStatus: coming-soon`

### Step 6 — Choose only a few endpoints initially
Selection criteria:

- cheap to test later
- clear user value
- simple request / response shape
- strong landing-page story
- synchronous when possible

Avoid initial activation of expensive, obscure, or highly async endpoints unless necessary.

### Step 7 — Build the landing-page candidate before paid testing
For an approved provider / representative endpoint:

- review the real docs and endpoint shape directly
- confirm the provider is worth showing publicly even before paid validation
- add provider data to `src/data/providers/*`
- add service data to `src/data/services/*`
- download and store a local provider logo under `public/providers/`
- publish the first landing page as `coming-soon` or other clearly non-supported state if the endpoint is still untested

### Step 8 — Run a real paid test later
Treat paid testing as a follow-up step, ideally in a separate task or PR:

- trigger the 402 / L402 challenge
- pay it
- retry successfully
- save request / response / output artifacts
- record quirks and pricing
- decide whether to:
  - keep and expand the provider
  - try a different endpoint from the same provider
  - or remove the provider if the real flow disappoints

### Step 9 — Only then promote to supported / expand coverage
Once the paid test is real and documented:

- update the relevant service registry entry to reflect the real result
- flip the landing page from `coming-soon` to `supported` only when justified
- add more endpoints from the same provider only if the first paid test went well

---

## Sats4AI manual test case

### Why Sats4AI was chosen
Sats4AI is the first manual provider used to validate the workflow.

### Duplicate check results
Checked on 2026-04-19:

- no `Sats4AI` / `sats4ai` references in the repo
- no open GitHub PRs matching `Sats4AI`
- no historical GitHub PRs matching `Sats4AI`

Conclusion:

- clean candidate for first provider intake test

### 402index findings
402index search returned about 30 Sats4AI services, including:

- `generate-text`
- `translate-text`
- `transcribe-audio`
- `extract-document`
- `convert-html-to-pdf`
- `generate-image`
- `analyze-image`

402index currently marks many Sats4AI services as:

- protocol: `L402`
- provider: `Sats4AI`
- status: `down`
- poor reliability / uptime
- source often includes `self-registered`

Important observation:

- 402index health did **not** fully match direct provider behavior

### Direct provider evidence gathered
Checked directly on `https://sats4ai.com`:

- homepage exists and is product-specific
- L402 docs exist: `/l402`
- MCP docs exist: `/mcp`
- unified docs exist: `/docs`
- terms exist: `/terms`
- contact page exists: `/contact`
- roadmap exists: `/roadmap`
- machine-readable discovery exists:
  - `/.well-known/l402-services`
  - `/llms.txt`
- public GitHub links exposed in docs:
  - `cnghockey/sats4ai-mcp-server`
  - `cnghockey/sats4ai-l402-examples`

### L402 verification results
Direct terminal probes showed valid L402 challenge responses from real endpoints, including:

- `https://sats4ai.com/api/l402/generate-text`
- `https://sats4ai.com/api/l402/translate-text`
- `https://sats4ai.com/api/l402/convert-html-to-pdf`

Observed behavior:

- HTTP `402 Payment Required`
- `www-authenticate: L402 ...`
- real BOLT11 invoice returned
- real macaroon returned

This means the provider is live enough to issue real payment challenges even though 402index health currently looks poor.

### Sats4AI credibility summary
Positive signals:

- clear docs and product positioning
- transparent per-service pricing
- L402 + MCP + discovery docs
- terms and contact pages exist
- public GitHub repos exist and are recently updated
- machine-readable catalog exists
- valid live L402 payment challenges observed

Caveats / red flags:

- no clear team/about page found yet
- weak public proof / social proof so far
- GitHub repos are early / low-star
- site is explicitly beta
- 402index health appears inconsistent / weak

Current recommendation:

- **approved for trial**
- promising but early
- good enough to continue testing manually

### Best first endpoint candidate
Recommended first activation endpoint:

- `translate-text`
- `https://sats4ai.com/api/l402/translate-text`

Status:

- **paid test completed successfully**
- **landing page service added locally as `sats4ai-translate-text`**
- **service registry now records endpoint-level status separately from provider status, so additional Sats4AI pages can stay coming-soon until each endpoint is paid-tested**
- **provider and service registry entries now include `lastCheckedAt` so review freshness is visible in git**
- detailed test record: `docs/provider-tests/sats4ai-translate-text-2026-04-19.md`

Why:

- cheap
- simple request body
- easy synchronous response shape
- clear landing-page value proposition
- easier than audio / video / async workflows

Fallback candidates:

- `generate-text`
- `convert-html-to-pdf`

### Live paid test result
The first end-to-end paid test for Sats4AI has now been completed successfully.

Summary:

- tool used: `@getalby/cli fetch`
- endpoint tested: `translate-text`
- request succeeded end-to-end with real payment and retry
- returned translated Spanish text successfully
- service cost observed: `1 sat`
- routing / payment fees observed: `1 sat`
- total wallet delta observed: `2 sats`

See full artifact record:

- `docs/provider-tests/sats4ai-translate-text-2026-04-19.md`

### Why `translate-text` is preferred over `generate-text`
`generate-text` works, but translation is more differentiated and makes a better first landing-page story for a pay-per-use service.

---

## Wallet setup completed during this manual test
We also set up wallet capability so the environment can complete real paid endpoint tests.

### Skill installation
The Alby payments skill content was saved locally as a custom skill at:

- `/home/ubuntu/.hermes/skills/custom/alby-bitcoin-payments/SKILL.md`

### Wallet auth flow
Auth command run:

```bash
npx -y @getalby/cli@0.6.1 auth https://my.albyhub.com --app-name Hermes
```

Approval URL was generated and approved in Alby Hub.

### Verification command
Wallet access was verified with:

```bash
npx -y @getalby/cli@0.6.1 get-balance
```

Observed balance at setup time:

- `10,000 sats`

Conclusion:

- the environment is now ready to perform real paid endpoint tests

---

## Recommended next implementation step
The next repo work should be:

1. add a provider registry + legacy backfill structure
2. add Sats4AI as the first provider intake record
3. record provider evaluation notes in git
4. perform real end-to-end paid test for `translate-text`
5. capture artifacts for future landing page generation

---

## Recommendation on documentation placement
For now, a normal markdown file under `docs/` is better than introducing `AGENTS.md` immediately.

Reason:

- this repo currently has no `AGENTS.md`
- we only need one durable planning / workflow document right now
- `docs/provider-intake-and-activation.md` is easy to link from `README.md`
- if the repo later accumulates multiple operational conventions, we can add a top-level `AGENTS.md` that points to the docs folder

Current recommendation:

- keep the detailed workflow in `docs/provider-intake-and-activation.md`
- link it from `README.md`
- add `AGENTS.md` later only if the repo grows enough to justify a dedicated operator guide
