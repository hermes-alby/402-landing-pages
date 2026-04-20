import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'plebtv',
  name: "PlebTV",
  websiteUrl: "https://plebtv.com",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "PlebTV looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'PlebTV: Integrating Bitcoin Payments with the Zaprite API | Live Coding Workshop with NickTee'.",
  endpointCandidates: ["integrating-bitcoin-payments-with-the-zaprite-api-live-coding-workshop-with-nicktee-jyd0ko", "pleblabhackathons-sats-4-tips-accepting-tips-in-sats-for-restaurants-donation-pages-charities-and-anyone-working-auduz0", "pbs-live-pbs-3-moonbase-v-california-gurls-30min-wait-massages-w-thomas-johns-simon-logan-l1gy7l"],
  notes: [
    "402index snapshot on 2026-04-20: 37 indexed L402 services; top categories: video, technology, education; average reliability 45.2.",
    "Representative candidate endpoint: https://www.plebtv.com/api/l402/video/integrating-bitcoin-payments-with-the-zaprite-api-live-coding-workshop-with-nicktee-jyd0ko",
    "Main website candidate: https://plebtv.com (title: PlebTV)",
    "Source mix: self-registered\u00d737.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: pricing, lightning.",
    "Representative service summary: NickTee dives into the Zaprite API your gateway to Bitcoin-native invoicing, payment processing, and financial automation. Whether you're building client apps, hacking on side projects, or just exploring how to integrate Lightning and on-ch\u2026",
  ],
} satisfies ProviderRegistryEntry;

export default provider;
