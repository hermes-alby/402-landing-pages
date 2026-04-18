export type Service = {
  slug: string;
  name: string;
  protocol: string;
  tagline: string;
  category: string;
  price: string;
  website: string;
  docs: string;
  qualityVerdict: 'Mock approved' | 'Mock watchlist';
  score: number;
  summary: string;
  whyListed: string[];
  useCases: string[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: 'sparkflow-transcribe',
    name: 'SparkFlow Transcribe',
    protocol: 'L402',
    tagline: 'Pay-per-minute speech transcription for agentic workflows.',
    category: 'Speech to text',
    price: '21 sats / audio minute',
    website: 'https://example.com/sparkflow-transcribe',
    docs: 'https://example.com/sparkflow-transcribe/docs',
    qualityVerdict: 'Mock approved',
    score: 8.4,
    summary:
      'Mock landing page for a fictional L402 transcription API. This demo page shows the kind of structured data an automated pipeline could feed into Astro at build time.',
    whyListed: [
      'Clear, narrowly scoped API offer with a believable pricing unit.',
      'Enough factual fields exist to produce differentiated landing-page copy.',
      'Includes docs and website links that a real pipeline would verify before publication.',
    ],
    useCases: [
      'Agent call recording transcription',
      'Podcast and voice note ingestion',
      'Lightning-paid metered speech processing',
    ],
    faq: [
      {
        question: 'Is this a real service?',
        answer:
          'No. This is intentionally mock data for a prototype GitHub Pages demo.',
      },
      {
        question: 'Why model price in sats?',
        answer:
          'The project is meant to explore 402/L402-style paid API landing pages, so pricing is shown in sats to match the concept.',
      },
    ],
  },
  {
    slug: 'relayguard-moderation',
    name: 'RelayGuard Moderation',
    protocol: 'x402',
    tagline: 'Paid moderation and classification endpoint for user-generated content.',
    category: 'Moderation',
    price: '12 sats / request',
    website: 'https://example.com/relayguard-moderation',
    docs: 'https://example.com/relayguard-moderation/docs',
    qualityVerdict: 'Mock approved',
    score: 7.9,
    summary:
      'Mock x402 service record used to test a second landing-page variant. It demonstrates how a curated service directory could render multiple pages from git-tracked source data.',
    whyListed: [
      'Distinct use case from the transcription example, so the page can avoid duplicate positioning.',
      'Simple protocol, category, and pricing fields support deterministic page sections.',
      'Mock score suggests it cleared the quality gate in a future real workflow.',
    ],
    useCases: [
      'Pre-publish comment moderation',
      'Marketplace listing screening',
      'Spam and abuse filtering for bots',
    ],
    faq: [
      {
        question: 'What is the status of this page?',
        answer:
          'Prototype only. The service data is fabricated to validate the static site flow before any research pipeline exists.',
      },
      {
        question: 'What would happen in the real system?',
        answer:
          'A discovery and scoring loop would enrich service records, and only approved services would be rendered into pages at build time.',
      },
    ],
  },
];

export const serviceMap = new Map(services.map((service) => [service.slug, service]));
