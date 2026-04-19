import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'l402-services-predictions-oracle',
  providerKey: 'l402-services',
  name: 'predictions oracle',
  endpointUrl: 'https://l402.services/predictions/oracle',
  category: 'Research intelligence',
  reviewStatus: 'approved',
  reviewSource: 'legacy-manual',
  activationStatus: 'live',
  landingPageStatus: 'supported',
  lastCheckedAt: '2026-04-19',
  summary: 'Existing live predictions-oracle landing page kept as a legacy-approved service entry.',
  notes: ['Backfilled from the current landing-page catalog.'],
} satisfies ServiceRegistryEntry;

export default service;
