import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'payperq',
  name: 'PayPerQ',
  websiteUrl: 'https://ppq.ai',
  protocols: ['L402'],
  discoverySources: ['legacy-manual'],
  reviewStatus: 'approved',
  reviewSource: 'legacy-manual',
  activationStatus: 'live',
  lastCheckedAt: '2026-04-19',
  backfilled: true,
  summary: 'Legacy provider already live in landing pages before the provider registry existed.',
  notes: ['Backfilled as an existing supported provider.'],
} satisfies ProviderRegistryEntry;

export default provider;
