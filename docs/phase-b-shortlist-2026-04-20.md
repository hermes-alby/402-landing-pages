# Phase B shortlist review — 2026-04-20

This note records the first non-paid review pass after the provider and service registry intake PR was merged.

## Why this document exists

We want a lightweight step between registry intake and paid testing:

1. shortlist a few providers
2. review the real site, docs, branding, and endpoint shape directly
3. add landing pages first as initial content
4. do real paid testing later as a separate follow-up task / PR

This lets us expand the catalog without pretending a provider is fully validated before we have real paid usage evidence.

## Current policy

- **Phase C can happen before paid testing.**
- Initial pages for newly reviewed providers should normally stay in a non-supported state such as `coming-soon` until real paid validation exists.
- **Phase D paid testing happens later and separately.**
- After the paid test, we decide whether to:
  - expand the provider with more endpoints
  - keep just the first endpoint
  - try a different endpoint from the same provider
  - or remove the provider if real usage is disappointing

## Recommended first Phase C candidates

### 1. Lightning Enable → Agent Commerce Store
**Recommendation:** advance to Phase C

Why:
- strong docs and product framing
- clear public story for agent-usable APIs
- good branding / asset sourcing path
- useful first landing-page narrative even before paid validation

### 2. Satring → Satring Directory API
**Recommendation:** advance to Phase C

Why:
- strategically relevant to the ecosystem
- real docs and clear branding assets
- easy to explain on a landing page
- good candidate for a discovery / directory style page

### 3. Ganamos → Create Job
**Recommendation:** advance to Phase C

Why:
- clear, concrete workflow
- memorable Bitcoin-native use case
- docs and branding are straightforward
- good public-page story even before paid validation

## Good next candidates after the first batch

### Prime Technology → U.S. Grid — Cheapest Electricity Zones
**Recommendation:** next after the first batch

Why:
- differentiated real-time energy data use case
- strong docs and endpoint identity
- likely good landing-page story for miners / infra automation

### Mycelia Signal → DLC Threshold Oracle
**Recommendation:** next after the first batch

Why:
- differentiated Bitcoin-native oracle story
- real docs and structured endpoint output
- more specialized copy, so probably better after the easier first batch

## Deferred from the first implementation batch

### proxy402
Useful, but more generic and less differentiated than the first batch.

### Bitcoin Benji
Interesting, but the representative service currently points to an `.onion` endpoint, which is less ideal for the first landing-page batch.

### Minifetch
Promising, but the current representative metadata still relies on scraper-derived text and should be reviewed more directly before implementation.

## Expected follow-up sequence

1. **Phase C PR**
   - add provider data
   - add service data
   - download/store provider logo assets locally
   - generate initial landing pages in a non-supported state

2. **Phase D PR / task**
   - run real paid tests
   - capture artifacts
   - decide whether to expand, revise, or remove each provider

3. **Expansion after successful paid validation**
   - add more endpoints from the same provider only after the first one proves useful in practice
