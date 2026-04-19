export type RegistrySupportStatus = 'supported' | 'coming-soon';

export type ProviderReviewStatus = 'approved' | 'approved-for-trial' | 'rejected' | 'deferred' | 'duplicate';

export type ProviderActivationStatus = 'not-started' | 'tested' | 'live';

export type ProviderReviewSource = 'legacy-manual' | 'manual-intake';

export type ServiceReviewStatus = 'approved' | 'approved-for-trial' | 'rejected' | 'deferred' | 'duplicate';

export type ServiceActivationStatus = 'not-started' | 'schema-checked' | 'paid-tested' | 'live';

export type ServiceReviewSource = 'legacy-manual' | 'manual-intake';

export type ProviderRegistryEntry = {
  key: string;
  name: string;
  websiteUrl: string;
  protocols: string[];
  discoverySources: string[];
  reviewStatus: ProviderReviewStatus;
  reviewSource: ProviderReviewSource;
  activationStatus: ProviderActivationStatus;
  lastCheckedAt: string;
  backfilled?: boolean;
  summary: string;
  notes?: string[];
  endpointCandidates?: string[];
  duplicateOf?: string;
};

export type ServiceRegistryEntry = {
  key: string;
  providerKey: string;
  name: string;
  endpointUrl: string;
  category: string;
  reviewStatus: ServiceReviewStatus;
  reviewSource: ServiceReviewSource;
  activationStatus: ServiceActivationStatus;
  landingPageStatus: RegistrySupportStatus;
  lastCheckedAt: string;
  summary: string;
  notes?: string[];
  duplicateOf?: string;
};
