import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'mycelia-signal',
  name: "Mycelia Signal",
  websiteUrl: "https://myceliasignal.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Mycelia Signal looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'Mycelia Signal DLC Threshold Oracle'.",
  endpointCandidates: ["threshold", "vwap", "price"],
  notes: [
    "402index snapshot on 2026-04-20: 13 indexed L402 services; top categories: real-time-data, data, uncategorized; average reliability 95.4.",
    "Representative candidate endpoint: https://api.myceliasignal.com/dlc/oracle/threshold",
    "Main website candidate: https://myceliasignal.com (title: Mycelia Signal \u2014 Sovereign Oracle | Signed Price Data over Lightning & x402)",
    "Source mix: satring\u00d711, discovery\u00d71, self-registered\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, pricing, terms, contact, github, mcp, l402, lightning.",
    "Representative service summary: Register a DLC threshold contract (pair, strike, direction ABOVE/BELOW, expiry Unix timestamp). Schnorr attestation over secp256k1 for Bitcoin smart contract settlement. Free testnet available at /dlc/oracle/threshold/preview.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;
