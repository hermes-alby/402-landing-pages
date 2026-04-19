import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'pull-that-up-jamie',
  name: 'Pull That Up Jamie',
  websiteUrl: 'https://www.pullthatupjamie.ai',
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
