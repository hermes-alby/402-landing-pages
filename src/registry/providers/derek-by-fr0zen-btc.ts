import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'derek-by-fr0zen-btc',
  name: "Derek by Fr0zen_BTC",
  websiteUrl: "https://tooth-therapeutic-bias-exclude.trycloudflare.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'rejected',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Derek by Fr0zen_BTC is not a good landing-page candidate right now because the provider identity or host quality still looks too weak.",
  notes: [
    "402index snapshot on 2026-04-20: 2 indexed L402 services; top categories: real-time-data; average reliability 30.0.",
    "Representative candidate endpoint: https://tooth-therapeutic-bias-exclude.trycloudflare.com/api/latest-alert",
    "Main website candidate: https://tooth-therapeutic-bias-exclude.trycloudflare.com.",
    "Source mix: l402directory\u00d72.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Representative service summary: Latest breaking Bitcoin alert. Only issued for 3%+ BTC moves or fundamental shifts (exchange hacks, regulatory moves, ETF decisions, sovereign purchases). Updated every 15 minutes.",
    "Current rejection is based on weak provider/host credibility, not on 402index health alone.",
  ],
} satisfies ProviderRegistryEntry;

export default provider;
