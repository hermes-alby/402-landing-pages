import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'cascade',
  name: 'Cascade',
  websiteUrl: 'https://cascade.fyi',
  protocols: ['L402'],
  discoverySources: ['legacy-manual'],
  reviewStatus: 'approved',
  reviewSource: 'legacy-manual',
  activationStatus: 'live',
  backfilled: true,
  summary: 'Legacy provider already represented in landing pages and backfilled into the provider registry.',
  notes: ['Backfilled as an existing coming-soon provider.'],
} satisfies ProviderRegistryEntry;

export default provider;
