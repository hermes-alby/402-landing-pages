import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'l402-services',
  name: 'L402 Services',
  websiteUrl: 'https://l402.services',
  protocols: ['L402'],
  discoverySources: ['legacy-manual'],
  reviewStatus: 'approved',
  reviewSource: 'legacy-manual',
  activationStatus: 'live',
  lastCheckedAt: '2026-04-19',
  backfilled: true,
  summary: 'Legacy provider already live in landing pages before the registry was introduced.',
  notes: ['Backfilled as an existing supported provider.'],
} satisfies ProviderRegistryEntry;

export default provider;
