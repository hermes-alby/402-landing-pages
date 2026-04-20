# Provider Intake and Activation Workflow

This document is the durable, provider-agnostic workflow for adding new providers and services to the site.

It is intentionally written as a **repeatable operating guide**, not a log of any specific provider review. Provider-specific notes, screenshots, paid test artifacts, and one-off decisions should live in separate docs under `docs/provider-tests/` or future evaluation notes — not here.

---

## Purpose

Use this workflow when you want to:

- discover new providers from a directory source
- decide whether a provider is worth tracking
- add provider and service records to the repo
- create landing pages before or after paid validation
- run a real paid activation test later
- automate the process without losing the human review checkpoints

This document should stay useful even if the current provider set changes completely.

---

## Current operating assumptions

- discovery source: `402index.io` only
- provider approval and service approval are tracked separately
- landing pages can be published before paid validation, but unsupported services must stay on a non-supported path such as `coming-soon`
- real paid activation is a later step, not part of the first intake pass
- service-level support state controls CTA routing
- provider and service decisions should be durable in git so the same work does not need to be repeated later

---

## Four-stage workflow

### 1. Provider intake

Goal: decide whether a provider is worth tracking at all.

Do this before adding landing pages.

Checklist:

- discover the provider from the approved source
- dedupe against the repo, existing registry entries, and past PRs
- inspect the real website and docs directly
- assess whether the provider looks credible enough for future trial work
- record the provider decision in the provider registry

Recommended outcomes:

- `approved`
- `approved-for-trial`
- `deferred`
- `rejected`
- `duplicate`

Important rule:

- directory health should be treated as telemetry, not as the approval gate
- evaluate the real provider directly before rejecting it

### 2. Service review

Goal: choose representative services/endpoints under the provider.

Checklist:

- pick one or more representative services worth testing or publishing
- record service-level metadata in the service registry
- mark activation state separately from provider state
- keep unpublished or unvalidated services on a `coming-soon` path

Recommended service-level fields:

- provider key
- service key
- endpoint URL
- summary
- landing page status
- activation status
- last checked date
- notes about caveats or review quality

### 3. Implementation / landing-page prep

Goal: prepare the provider and service for the public site without overstating support.

Checklist:

- add provider data under `src/data/providers/`
- add service data under `src/data/services/`
- create or update generated variants
- source provider branding locally under `public/providers/`
- create landing pages that are honest about current support state

Important rule:

- a provider can have live landing pages while still being unvalidated for paid activation
- in that case the landing pages should remain `coming-soon` or equivalent rather than routing to install/support claims

### 4. Paid activation test

Goal: validate one real paid endpoint before moving the service to supported.

Checklist:

- get explicit confirmation before spending funds or taking other side effects
- run a real paid request against the chosen endpoint
- capture request, response, cost, and any routing fees
- save the artifact under `docs/provider-tests/`
- update service-level support state based on real results

After the paid test, decide whether to:

- expand the provider with more endpoints
- validate another endpoint under the same provider
- keep the provider but leave some services coming soon
- remove or downgrade the provider if the real flow disappoints

---

## Discovery guidance

When using `402index.io` in bulk:

- fetch the API directly rather than scraping the web UI
- page through results until you reach the total count
- group services by provider name or canonical provider identifier
- ignore rows with `provider: null` when generating provider-intake candidates

During dedupe:

- dedupe by provider / brand / root domain, not by endpoint path alone
- record obvious aliases as explicit duplicates rather than silently collapsing them

Examples of duplicate patterns to watch for:

- brand name vs root domain
- subdomain vs brand
- casing or spelling variants
- marketplace hostname vs marketing site hostname

---

## Provider branding workflow

Provider branding should be local and reusable.

Rules:

- store provider artwork under `public/providers/`
- reference provider artwork through structured provider data, not external runtime URLs
- prefer official logos, favicons, or official avatars first
- if no usable public mark exists, create a simple fallback monogram for review

Asset requirements:

- provider images must be **square**
- provider images must be **no larger than 256×256**
- optimize images before shipping them
- if a downloaded source is not square, crop or place it on a square canvas before committing it
- if a downloaded source is oversized, resize it to a sensible square output before committing it

This rule applies to both newly added providers and later cleanups of older provider assets.

---

## Repository structure

Current and recommended structure:

```text
src/
  registry/
    providers/
      <provider>.ts
    services/
      <service>.ts
  data/
    providers/
      <provider>.ts
    services/
      <service>.ts

docs/
  provider-intake-and-activation.md
  provider-tests/
    <provider>-<service>-<date>.md
```

Separation of concerns:

- `src/registry/providers/*` = durable provider decision layer
- `src/registry/services/*` = durable service review + activation layer
- `src/data/providers/*` and `src/data/services/*` = live public landing-page data
- `docs/provider-tests/*` = paid test artifacts and one-off evidence

---

## Registry guidance

### Provider registry should record

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

### Service registry should record

- canonical service key
- provider key
- service name
- endpoint URL
- landing page status
- activation status
- last checked date
- concise summary
- notes about caveats, schema quality, or confidence level

---

## Manual workflow checklist

### Step 1 — discover providers

- search the approved discovery source
- confirm the provider has indexed services/endpoints
- note protocol, category, pricing hints, and source metadata

### Step 2 — dedupe before implementation

Check for existing references in:

- repo content
- provider registry entries
- service registry entries
- open GitHub PRs
- closed PRs if needed

### Step 3 — evaluate provider credibility

Check:

- website quality
- docs quality
- pricing clarity
- terms / contact / support signals
- GitHub repos or technical footprint
- discovery docs or machine-readable metadata
- whether the services are useful enough for public landing pages
- any obvious red flags

### Step 4 — record provider decision

- create or update the provider registry entry
- add `lastCheckedAt`
- record the reasoning compactly

### Step 5 — choose representative services

- pick the services most likely to produce useful, understandable landing pages
- favor services that are easy to explain and later cheap to validate
- create or update service registry entries

### Step 6 — prepare public data

- add provider + service data for the public site
- keep unsupported services routed to `coming-soon`
- avoid implying support before a paid test exists

### Step 7 — run paid validation later

- confirm the user wants to spend
- execute a real paid request
- save artifacts
- update service status from evidence, not optimism

---

## Automation guidance

The workflow is intentionally separable so it can be automated in pieces.

Good automation targets:

1. **directory ingestion**
   - fetch providers/services from the approved discovery source
   - normalize aliases
   - produce candidate provider/service records

2. **dedupe checks**
   - compare candidates against registry entries and repo content
   - detect duplicates and alias collisions

3. **landing-page prep**
   - scaffold provider/service data files
   - generate variants
   - validate route generation and CTA routing

4. **branding normalization**
   - download provider logos
   - square them
   - resize to max 256×256
   - optimize file size

5. **paid activation follow-up**
   - should remain gated by explicit confirmation because it spends funds and has side effects

What should stay human-reviewed:

- final provider credibility decision
- final service usefulness decision
- whether a provider is worth public landing-page exposure
- whether a paid validation spend is justified

---

## Documentation rules

To keep this doc reusable:

- do not add provider-specific case studies here
- do not add temporary shortlist batches here
- do not add one-off implementation logs here
- do not let this become a history dump of past experiments

Instead:

- keep this file procedural and general
- store paid test artifacts in `docs/provider-tests/`
- store provider-specific evaluation notes in dedicated docs if needed
- update `README.md` with high-level references only

---

## Verification checklist

Before claiming the intake or implementation step is complete:

- provider/service records are updated in the right layer
- `lastCheckedAt` values are present where needed
- provider branding assets are local, square, and no larger than 256×256
- unsupported services route to `coming-soon`
- supported services route to install only after real validation
- `npm run build` passes
- any relevant verification scripts pass
- GitHub URLs are checked directly before claiming the work exists

---

## Summary

This workflow is designed to support repeatable expansion:

- intake providers first
- review services separately
- prepare landing pages honestly
- validate paid support later with evidence
- keep branding local and normalized
- keep this document general so it remains useful for future runs and automation
