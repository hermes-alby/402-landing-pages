import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'catalunyalnd',
  name: "CatalunyaLND",
  websiteUrl: "https://l402-fortune-cookie.yf-ae7.workers.dev",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'deferred',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "CatalunyaLND appears real enough to keep on the radar, but it is not yet one of the highest-priority providers for landing-page work.",
  notes: [
    "402index snapshot on 2026-04-20: 1 indexed L402 services; top categories: tools; average reliability 85.0.",
    "Representative candidate endpoint: https://l402-fortune-cookie.yf-ae7.workers.dev/api/fortune",
    "Main website candidate: https://l402-fortune-cookie.yf-ae7.workers.dev.",
    "Source mix: self-registered\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Representative service summary: Get a random fortune cookie wisdom for 1 sat. Minimal L402 demo API powered by Cloudflare Workers + LNbits.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;
