import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'claudio-ai-agent-bitcoin-data-oracle',
  providerKey: 'claudio-ai-agent',
  name: "Bitcoin Data Oracle",
  endpointUrl: "https://oracle.neofreight.net/",
  category: "Real Time Data",
  reviewStatus: 'deferred',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative Claudio (AI Agent) endpoint tracked in the service registry, but this provider is still lower priority for activation.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'Claudio (AI Agent)'.",
    "Endpoint URL: https://oracle.neofreight.net/",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: Verify Bitcoin transactions, addresses, and invoices. Get fee estimates, block height, and BTC/USD price with Nostr-signed attestation. Real mainnet node. 21 sats/request via L402.",
  ],
} satisfies ServiceRegistryEntry;

export default service;
