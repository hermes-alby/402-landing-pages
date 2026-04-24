import { createServiceDefinition } from '../service-factory';
import { buildCostDetail, createUsdFixedPrice } from '../pricing';
import type { ServiceDefinition } from '../types';

const pricing = createUsdFixedPrice(0.069, 'per image',);

const service = createServiceDefinition({
  copyFamily: 'image-generation',
  key: 'payperq-gpt-image-2',
  providerKey: 'payperq',
  name: 'GPT Image 2',
  endpointUrl: 'https://api.ppq.ai/v1/images/generations/gpt-image-2',
  resultLabel: 'Create launch-ready visuals on demand from one reusable prompt',
  category: 'Image generation',
  supportStatus: 'coming-soon',
  lastCheckedAt: '2026-04-24',
  pricing,
  exampleOutput: {
    kind: 'image',
    title: 'Showcase concept image',
    caption:
      'A showcase concept built around a reusable launch-visual prompt for product pages, blog headers, and social campaigns — the kind of polished composition this landing page is meant to help an agent request.',
    imageSrc: `${import.meta.env.BASE_URL}services/payperq-gpt-image-2/showcase.svg`,
    imageAlt:
      'A premium launch-style product visual with a glowing dashboard card, phone mockup, and social crop frames in amber and indigo tones',
    details: [
      'Provider: PayPerQ',
      'Service: GPT Image 2',
      'Endpoint: /v1/images/generations/gpt-image-2',
      buildCostDetail(pricing),
      'Observed live model metadata: low, medium, and high quality tiers are listed in the PPQ models API',
      'Observed live model metadata: prompt input is required, and optional image URL input, aspect ratio control, output format, and multi-image generation are supported',
      'Price shown here uses the medium-quality rate from the live PPQ models API on 2026-04-24',
    ],
    briefingTitle: 'Why this prompt direction is broadly useful',
    briefingParagraphs: [
      'A strong first image workflow for many users is not abstract art — it is a launch-ready visual that can work across a landing page, blog post, and social promotion with only small edits.',
      'This example prompt is designed to give an agent one reusable creative brief with clear composition, cropping, and quality constraints instead of a vague request that produces pretty but unusable output.',
    ],
  },
  examplePrompt:
    'Create a launch-ready hero image for a new AI product announcement. Show one clear central product moment with clean negative space for a headline overlay, premium editorial lighting, crisp interface detail, and a composition that can crop cleanly to 16:9, 1:1, and 4:5 for a landing page, blog post, and social campaign. Use a dark indigo background with warm amber accents, avoid text, logos, and watermarks, and deliver a polished marketing visual using PayPerQ with the Alby payments skill.',
  variantTitle: ({ agentName, providerName, serviceName }) => `Generate launch-ready images with ${agentName} using ${providerName} ${serviceName}`,
  variantDescription: ({ agentName, providerName, serviceName, priceLabel }) =>
    `Enable ${agentName} to create polished product, blog, and campaign visuals through ${providerName} ${serviceName} for ${priceLabel}, without forcing another subscription or prepaid credit flow.`,
  heroSummary: ({ agentName, providerName, serviceName }) =>
    `Give ${agentName} a higher-quality image path through ${providerName} ${serviceName} when the workflow needs a polished hero visual, launch graphic, or social-ready asset instead of a rough draft image.`,
  heroBulletHighlights: () => [
    'Useful for one prompt that can power landing-page heroes, blog artwork, and social crops with minimal rewrites.',
    'Live PPQ model metadata shows optional image input, aspect-ratio control, output-format selection, and multiple quality tiers.',
  ],
  whyItWorks: ({ agentName, providerName, priceLabel }) => [
    `${agentName} becomes more useful when it can turn a concrete marketing or content brief into visuals without stopping to ask a human for another AI subscription or prepaid balance.`,
    `${providerName} lists ${priceLabel} for the medium-quality tier in the live models API, which is a practical reference point for polished one-off image requests.`,
    'A reusable prompt that plans for headline space and multi-crop output is more valuable than a generic art prompt because the result can slot directly into real publishing workflows.',
  ],
  useCases: () => [
    'Generate polished hero images for landing pages and launch announcements',
    'Create reusable blog-header and social-campaign visuals from one prompt brief',
    'Produce higher-quality mockups and campaign artwork when rough draft output is not enough',
  ],
  faqResultDescription: ({ providerName, serviceName }) =>
    `${providerName} ${serviceName} is positioned to return polished generated images for launch visuals, blog artwork, social graphics, and other user-facing creative assets from a single prompt-driven API request.`,
}) satisfies ServiceDefinition;

export default service;
