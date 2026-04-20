import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'boltwork',
  name: "Boltwork",
  websiteUrl: "https://parsebit-lnd.fly.dev",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Boltwork looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'Boltwork Web Page Summariser'.",
  endpointCandidates: ["webpage", "translate", "data"],
  notes: [
    "402index snapshot on 2026-04-20: 10 indexed L402 services; top categories: ai; average reliability 100.0.",
    "Representative candidate endpoint: https://parsebit-lnd.fly.dev/extract/webpage",
    "Main website candidate: https://parsebit-lnd.fly.dev.",
    "Source mix: self-registered\u00d710.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Representative service summary: Submit any web page URL and receive a structured AI summary including title, key points, topics, and sentiment. Powered by Claude. Pay 100 sats per request via Bitcoin Lightning L402.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;
