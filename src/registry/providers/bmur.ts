import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'bmur',
  name: "Bmur",
  websiteUrl: "https://ganamos.earth",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'duplicate',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Bmur appears to be an alias or duplicate listing for an already-tracked provider and was added to avoid re-review.",
  duplicateOf: 'ganamos',
  notes: [
    "402index snapshot on 2026-04-20: 2 indexed L402 services; top categories: social, tools; average reliability 100.0.",
    "Representative candidate endpoint: https://speedread.fit/",
    "Main website candidate: https://ganamos.earth (title: Ganamos! Bitcoin-Powered Job Marketplace)",
    "Source mix: satring\u00d71, satring,l402apps\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, l402, lightning.",
    "Representative service summary: Speed reading app using RSVP technology. Upload PDFs, paste text, or read web articles at high speed. Browse a public library of documents with optional L402 paywalls \u2014 payments go directly to content creators via their Lightning Address.",
    "Mapped as duplicate of provider key 'ganamos'.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;
