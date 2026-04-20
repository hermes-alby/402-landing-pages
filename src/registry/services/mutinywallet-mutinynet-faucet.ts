import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'mutinywallet-mutinynet-faucet',
  providerKey: 'mutinywallet',
  name: "Mutinynet Faucet",
  endpointUrl: "https://faucet.mutinynet.com/api/l402",
  category: "Bitcoin",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative MutinyWallet endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'MutinyWallet'.",
    "Endpoint URL: https://faucet.mutinynet.com/api/l402",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: Lightning-gated faucet on Bitcoin's Mutinynet testnet. Pay a small L402 invoice to receive testnet sats.",
  ],
} satisfies ServiceRegistryEntry;

export default service;
