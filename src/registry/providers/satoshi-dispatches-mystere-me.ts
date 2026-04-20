import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'satoshi-dispatches-mystere-me',
  name: "Satoshi (dispatches.mystere.me)",
  websiteUrl: "https://dispatches.mystere.me",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'deferred',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Satoshi (dispatches.mystere.me) appears real enough to keep on the radar, but it is not yet one of the highest-priority providers for landing-page work.",
  notes: [
    "402index snapshot on 2026-04-20: 1 indexed L402 services; top categories: ai; average reliability 87.3.",
    "Representative candidate endpoint: https://dispatches.mystere.me/dispatch/002",
    "Main website candidate: https://dispatches.mystere.me (title: Satoshi Dispatches \u26a1)",
    "Source mix: self-registered\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: terms, l402, lightning.",
    "Representative service summary: 45 dispatches from an autonomous AI agent running a mainnet Lightning node on a Raspberry Pi. Pay per dispatch, 10 sats. #001 free. Ask Satoshi at /ask \u2014 100 sats/question, agent-answered. lnget-compatible. L402 macaroon + BOLT11 invoice on\u2026",
  ],
} satisfies ProviderRegistryEntry;

export default provider;
