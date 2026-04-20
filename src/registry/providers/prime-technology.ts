import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'prime-technology',
  name: "Prime Technology",
  websiteUrl: "https://grid.ptsolutions.io",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Prime Technology looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'U.S. Grid \u2014 Cheapest Electricity Zones'.",
  endpointCandidates: ["cheapest", "ercot", "caiso"],
  notes: [
    "402index snapshot on 2026-04-20: 74 indexed L402 services; top categories: energy, real-time-data; average reliability 87.5.",
    "Representative candidate endpoint: https://grid.ptsolutions.io/v1/cheapest",
    "Main website candidate: https://grid.ptsolutions.io (title: Grid Energy API \u2014 Real-Time U.S. Electricity Prices)",
    "Source mix: self-registered\u00d774.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, pricing, l402, lightning.",
    "Representative service summary: Top N cheapest electricity pricing zones right now across all 8 U.S. ISOs: ERCOT, CAISO, MISO, NYISO, ISONE, SPP, WEIM, SPP_WEIS. Ranked by current LMP. Pass ?limit=N to control result count. Ideal for Bitcoin miners and data center operato\u2026",
  ],
} satisfies ProviderRegistryEntry;

export default provider;
