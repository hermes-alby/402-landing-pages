export type ProviderReviewStatus = 'approved' | 'approved-for-trial' | 'rejected' | 'deferred' | 'duplicate';

export type ProviderActivationStatus = 'not-started' | 'tested' | 'live';

export type ProviderReviewSource = 'legacy-manual' | 'manual-intake';

export type ProviderRegistryEntry = {
  key: string;
  name: string;
  websiteUrl: string;
  protocols: string[];
  discoverySources: string[];
  reviewStatus: ProviderReviewStatus;
  reviewSource: ProviderReviewSource;
  activationStatus: ProviderActivationStatus;
  backfilled?: boolean;
  summary: string;
  notes?: string[];
  endpointCandidates?: string[];
  duplicateOf?: string;
};
