import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'pull-that-up-jamie-search-quotes',
  providerKey: 'pull-that-up-jamie',
  name: 'search-quotes',
  endpointUrl: 'https://www.pullthatupjamie.ai/api/search-quotes',
  category: 'Podcast search',
  reviewStatus: 'approved',
  reviewSource: 'legacy-manual',
  activationStatus: 'live',
  landingPageStatus: 'supported',
  lastCheckedAt: '2026-04-19',
  summary: 'Existing live podcast-quote search landing page kept as a legacy-approved service entry.',
  notes: ['Backfilled from the current landing-page catalog.'],
} satisfies ServiceRegistryEntry;

export default service;
