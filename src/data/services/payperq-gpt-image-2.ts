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
    title: 'Main showcase + supporting examples',
    caption:
      'Main showcase image: a polished campaign-style product ad from the OpenAI ChatGPT Images 2.0 launch post, chosen because it demonstrates a concrete commercial brief instead of generic AI art.',
    imageSrc: `${import.meta.env.BASE_URL}services/payperq-gpt-image-2/main-matcha.webp`,
    imageAlt:
      'A premium matcha launch poster with refined product styling, editorial typography, and campaign-quality art direction',
    supportingImages: [
      {
        src: `${import.meta.env.BASE_URL}services/payperq-gpt-image-2/support-languages.webp`,
        alt: 'A multilingual editorial poster showing strong text rendering across multiple languages and scripts',
        caption: 'Typography and multilingual layout control',
        promptDirection:
          'Design a modern editorial poster about multilingual communication with bold geometric layout, strong hierarchy, and dense readable text across multiple scripts and languages.',
      },
      {
        src: `${import.meta.env.BASE_URL}services/payperq-gpt-image-2/support-wolf-magazine.webp`,
        alt: 'A magazine-style educational spread about wolves with photography, sidebars, maps, and infographic structure',
        caption: 'Editorial spreads, infographics, and structured layouts',
        promptDirection:
          'Create a magazine-style educational spread about wolves in North America with wildlife photography, myth-versus-fact sidebars, maps, statistics, and infographic callouts.',
      },
      {
        src: `${import.meta.env.BASE_URL}services/payperq-gpt-image-2/support-visual-polyglot.webp`,
        alt: 'A dense collage poster combining art, science, design, culture, and mixed-media visual references',
        caption: 'Broad visual range across styles, subjects, and media',
        promptDirection:
          'Create a dense editorial collage showing art, science, history, nature, and design references arranged around a central creative manifesto headline.',
      },
    ],
    details: [
      'Provider: PayPerQ',
      'Service: GPT Image 2',
      'Endpoint: /v1/images/generations/gpt-image-2',
      buildCostDetail(pricing),
      'Observed live model metadata: low, medium, and high quality tiers are listed in the PPQ models API',
      'Observed live model metadata: prompt input is required, and optional image URL input, aspect ratio control, output format, and multi-image generation are supported',
      'Main and supporting examples are local copies sourced from the OpenAI “Introducing ChatGPT Images 2.0” post to show commercial, multilingual, and editorial range',
      'Price shown here uses the medium-quality rate from the live PPQ models API on 2026-04-24',
    ],
    briefingTitle: 'Why this showcase is stronger than a single vague hero image',
    briefingParagraphs: [
      'A single pretty image is easy to dismiss as generic AI slop. A stronger landing-page story shows the model solving different real briefs: campaign creative, multilingual poster design, and dense editorial layout work.',
      'This makes the page more useful to a wider set of visitors because they can immediately see whether they care about ads, social creative, typography, or infographic-style visual production.',
    ],
  },
  examplePrompt:
    'Create a premium launch poster for a new specialty matcha café opening in Brooklyn Heights. Show one hero iced strawberry matcha in a clear glass with visible layering, condensation, and two fresh strawberries beside it on a stone pedestal. Use warm natural editorial light, refined Japanese-inspired art direction, soft cream walls, olive and blush accents, and enough clean negative space for a landing-page headline. The image should feel like a finished commercial campaign asset for a website hero, blog feature, and social announcement. No watermarks, no extra logos, and no baked-in website UI. Generate it using PayPerQ with the Alby payments skill.',
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
