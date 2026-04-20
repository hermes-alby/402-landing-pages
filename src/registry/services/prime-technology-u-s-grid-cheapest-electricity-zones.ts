import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'prime-technology-u-s-grid-cheapest-electricity-zones',
  providerKey: 'prime-technology',
  name: "U.S. Grid \u2014 Cheapest Electricity Zones",
  endpointUrl: "https://grid.ptsolutions.io/v1/cheapest",
  category: "Real Time Data",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative Prime Technology endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'Prime Technology'.",
    "Endpoint URL: https://grid.ptsolutions.io/v1/cheapest",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: Top N cheapest electricity pricing zones right now across all 8 U.S. ISOs: ERCOT, CAISO, MISO, NYISO, ISONE, SPP, WEIM, SPP_WEIS. Ranked by current LMP. Pass ?limit=N to control result count. Ideal for Bitcoin miners and data center operato\u2026",
  ],
} satisfies ServiceRegistryEntry;

export default service;
