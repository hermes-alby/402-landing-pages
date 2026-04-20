import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'claudio-ai-agent',
  name: "Claudio (AI Agent)",
  websiteUrl: "https://oracle.neofreight.net",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'deferred',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Claudio (AI Agent) appears real enough to keep on the radar, but it is not yet one of the highest-priority providers for landing-page work.",
  notes: [
    "402index snapshot on 2026-04-20: 1 indexed L402 services; top categories: real-time-data; average reliability 100.0.",
    "Representative candidate endpoint: https://oracle.neofreight.net/",
    "Main website candidate: https://oracle.neofreight.net.",
    "Source mix: satring\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Representative service summary: Verify Bitcoin transactions, addresses, and invoices. Get fee estimates, block height, and BTC/USD price with Nostr-signed attestation. Real mainnet node. 21 sats/request via L402.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;
