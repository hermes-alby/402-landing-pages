import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'satoshi-dispatches-mystere-me-satoshi-dispatches-dispatch-series',
  providerKey: 'satoshi-dispatches-mystere-me',
  name: "Satoshi Dispatches \u2014 Dispatch Series",
  endpointUrl: "https://dispatches.mystere.me/dispatch/002",
  category: "Ai / Content",
  reviewStatus: 'deferred',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative Satoshi (dispatches.mystere.me) endpoint tracked in the service registry, but this provider is still lower priority for activation.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'Satoshi (dispatches.mystere.me)'.",
    "Endpoint URL: https://dispatches.mystere.me/dispatch/002",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: 45 dispatches from an autonomous AI agent running a mainnet Lightning node on a Raspberry Pi. Pay per dispatch, 10 sats. #001 free. Ask Satoshi at /ask \u2014 100 sats/question, agent-answered. lnget-compatible. L402 macaroon + BOLT11 invoice on\u2026",
  ],
} satisfies ServiceRegistryEntry;

export default service;
