import { createServiceDefinition } from '../service-factory';
import { buildCostDetail, createUsdFixedPrice } from '../pricing';
import type { ServiceDefinition } from '../types';

const pricing = createUsdFixedPrice(0.002, 'per content extraction');

const service = createServiceDefinition({
  key: 'minifetch-minifetch-com-api-v1-x402-extract-url-content',
  providerKey: 'minifetch',
  name: 'Extract URL Content',
  endpointUrl: 'https://minifetch.com/api/v1/x402/extract/url-content',
  resultLabel: 'Extract clean markdown page content for agents, RAG, and SEO workflows',
  category: 'Web extraction',
  supportStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  pricing,
  exampleOutput: {
    kind: 'table',
    title: 'What the live site and endpoint already show',
    caption:
      'Minifetch openly markets URL-content extraction for AI agents, RAG, LLM datasets, and SEO research, and the live endpoint presents a payment-gated access flow priced at $0.002.',
    columns: ['Observed item', 'Value'],
    rows: [
      ['Homepage positioning', 'Fetch and extract metadata and data from web pages for AI agents, SEO research, and LLM datasets'],
      ['Endpoint pricing', '$0.002 Base USDC'],
      ['Payment flow shown live', 'Payment Required page with wallet connection options'],
    ],
    details: [
      'Provider: Minifetch',
      'Service: Extract URL Content',
      'Endpoint: /api/v1/x402/extract/url-content',
      buildCostDetail(pricing),
      'Checked: live homepage, docs, robots.txt, SKILL.md, and endpoint payment screen reviewed on 2026-04-20',
      'Observed docs also list related extraction endpoints for preview, links, and metadata',
    ],
    briefingTitle: 'Why this page is live before paid activation',
    briefingParagraphs: [
      'Minifetch already exposes polished public docs, explicit pricing, and a real payment-gated endpoint, so the landing page can explain the extraction workflow honestly before we run the paid request end to end.',
      'This page stays on the coming-soon path until we execute a real paid extraction and capture the returned content payload as an activation artifact.',
    ],
  },
  examplePrompt:
    'Use Minifetch Extract URL Content to fetch a clean markdown summary of a product or documentation page, then return the key takeaways for an agent workflow using Minifetch with the Alby payments skill.',
  variantTitle: ({ agentName, providerName }) => `Extract clean web page content with ${agentName} using ${providerName}`,
  variantDescription: ({ agentName, providerName, priceLabel }) =>
    `Enable ${agentName} to extract clean web page content through ${providerName} for ${priceLabel}, without building a custom scraping and cleanup pipeline first.`,
  heroSummary: ({ agentName, providerName, serviceName }) =>
    `Give ${agentName} access to ${providerName} ${serviceName} so it can turn messy web pages into cleaner, more token-efficient content for research, RAG, and structured automation workflows.`,
  heroBulletHighlights: () => [
    'The site explicitly targets SEO research, AI agents, and dataset-building use cases, so the workflow is easy to explain honestly.',
    'Minifetch also publishes a robots-friendly stance and related skills/docs, which makes the product feel purpose-built instead of being just a hidden endpoint.',
  ],
  whyItWorks: ({ agentName, providerName }) => [
    `${agentName} becomes more useful when it can fetch clean page content directly instead of wasting tokens on ads, nav chrome, and raw HTML noise.`,
    `${providerName} already explains the extraction workflow, payment model, and adjacent endpoints publicly, which makes it a strong candidate for a manual landing page before supported-now status is earned.`,
    'That gives this page immediate user value for RAG, SEO, and browsing workflows while keeping the supported label gated behind a real paid validation run.',
  ],
  useCases: () => [
    'Extract clean markdown from a page before feeding it into a RAG or summarization workflow',
    'Pull web content for SEO or competitive analysis without hand-cleaning the result',
    'Fetch page content for an agent task without relying on brittle custom scraping code',
  ],
  faqResultDescription: ({ providerName, serviceName }) =>
    `${providerName} ${serviceName} is designed to return cleaner, token-efficient page content instead of raw web markup, making the result easier for LLM and agent workflows to use.`,
}) satisfies ServiceDefinition;

export default service;
