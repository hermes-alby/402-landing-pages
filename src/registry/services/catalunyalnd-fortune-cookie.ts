import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'catalunyalnd-fortune-cookie',
  providerKey: 'catalunyalnd',
  name: "Fortune Cookie \u26a1\ud83e\udd60",
  endpointUrl: "https://l402-fortune-cookie.yf-ae7.workers.dev/api/fortune",
  category: "Tools",
  reviewStatus: 'deferred',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative CatalunyaLND endpoint tracked in the service registry, but this provider is still lower priority for activation.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'CatalunyaLND'.",
    "Endpoint URL: https://l402-fortune-cookie.yf-ae7.workers.dev/api/fortune",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: Get a random fortune cookie wisdom for 1 sat. Minimal L402 demo API powered by Cloudflare Workers + LNbits.",
  ],
} satisfies ServiceRegistryEntry;

export default service;
