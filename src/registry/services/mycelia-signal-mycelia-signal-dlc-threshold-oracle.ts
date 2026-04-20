import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'mycelia-signal-mycelia-signal-dlc-threshold-oracle',
  providerKey: 'mycelia-signal',
  name: "Mycelia Signal DLC Threshold Oracle",
  endpointUrl: "https://api.myceliasignal.com/dlc/oracle/threshold",
  category: "Uncategorized",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative Mycelia Signal endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'Mycelia Signal'.",
    "Endpoint URL: https://api.myceliasignal.com/dlc/oracle/threshold",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: Register a DLC threshold contract (pair, strike, direction ABOVE/BELOW, expiry Unix timestamp). Schnorr attestation over secp256k1 for Bitcoin smart contract settlement. Free testnet available at /dlc/oracle/threshold/preview.",
  ],
} satisfies ServiceRegistryEntry;

export default service;
