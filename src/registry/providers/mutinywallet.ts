import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'mutinywallet',
  name: "MutinyWallet",
  websiteUrl: "https://faucet.mutinynet.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "MutinyWallet looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'Mutinynet Faucet'.",
  endpointCandidates: ["l402"],
  notes: [
    "402index snapshot on 2026-04-20: 1 indexed L402 services; top categories: bitcoin; average reliability 95.0.",
    "Representative candidate endpoint: https://faucet.mutinynet.com/api/l402",
    "Main website candidate: https://faucet.mutinynet.com.",
    "Source mix: self-registered\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: github, lightning.",
    "Representative service summary: Lightning-gated faucet on Bitcoin's Mutinynet testnet. Pay a small L402 invoice to receive testnet sats.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;
