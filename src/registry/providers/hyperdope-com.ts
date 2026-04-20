import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'hyperdope-com',
  name: "hyperdope.com",
  websiteUrl: "https://hyperdope.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'duplicate',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "hyperdope.com appears to be an alias or duplicate listing for an already-tracked provider and was added to avoid re-review.",
  duplicateOf: 'hyperdope',
  notes: [
    "402index snapshot on 2026-04-20: 1 indexed L402 services; top categories: bitcoin; average reliability 90.0.",
    "Representative candidate endpoint: https://hyperdope.com/api/l402/videos/17c27b50/master.m3u8",
    "Main website candidate: https://hyperdope.com (title: Hyperdope)",
    "Source mix: self-registered,l402apps\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: terms, l402, lightning.",
    "Representative service summary: L402-gated HLS video streaming. 10 sats for 4 hours of access. Returns HLS master playlist. Browse videos at hyperdope.com/api/homepage, search at hyperdope.com/api/search?q=bitcoin. Play in browser via hyperdope.com/player.html?v={hash}&to\u2026",
    "Mapped as duplicate of provider key 'hyperdope'.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;
