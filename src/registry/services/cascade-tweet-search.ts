import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'cascade-tweet-search',
  providerKey: 'cascade',
  name: 'Tweet search',
  endpointUrl: 'https://twitter.surf.cascade.fyi/tweets/search',
  category: 'Live search',
  reviewStatus: 'approved',
  reviewSource: 'legacy-manual',
  activationStatus: 'live',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-19',
  summary: 'Existing Cascade landing page backfilled into the service registry while the public landing page remains coming-soon.',
  notes: ['Backfilled from the current landing-page catalog.'],
} satisfies ServiceRegistryEntry;

export default service;
