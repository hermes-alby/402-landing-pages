import { createServiceDefinition } from '../service-factory';
import { buildCostDetail, createUsdFixedPrice } from '../pricing';
import type { ServiceDefinition } from '../types';

const pricing = createUsdFixedPrice(0.069, 'per image');

const service = createServiceDefinition({
  copyFamily: 'image-generation',
  key: 'payperq-gpt-image-2',
  providerKey: 'payperq',
  name: 'ChatGPT Images 2.0',
  endpointUrl: 'https://api.ppq.ai/v1/images/generations/gpt-image-2',
  resultLabel: 'Create launch-ready visuals on demand from one reusable prompt',
  category: 'Image generation',
  supportStatus: 'coming-soon',
  lastCheckedAt: '2026-04-24',
  pricing,
  exampleOutput: {
    kind: 'image',
    title: 'Launch visuals, editorial layouts, and multilingual posters',
    caption:
      'Bring your ideas to life with polished campaign-style images, then explore the range ChatGPT Images 2.0 can cover on demand — from multilingual posters to layout-heavy editorial work.',
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
      'Service: ChatGPT Images 2.0',
      'Endpoint: /v1/images/generations/gpt-image-2',
      buildCostDetail(pricing),
      'Quality options: low, medium, and high tiers',
      'Prompt input is required; optional image URL input, aspect ratio control, output format, and multi-image generation are supported',
      'Example range: commercial product launch art, multilingual typography, editorial spreads, and broad visual exploration',
      'Shown price reflects the medium-quality image tier',
    ],
    briefingTitle: 'More ways to create with ChatGPT Images 2.0',
    briefingParagraphs: [
      'Create polished launch creative without the drag of a monthly subscription. Pay only per image, nothing wasted.',
      'From campaign visuals and multilingual posters to layout-heavy editorial work, you can generate the exact kind of image you need without committing to another creative subscription.',
    ],
  },
  examplePrompt:
    'Create a premium launch poster for a new specialty matcha café opening in Brooklyn Heights. Show one hero iced strawberry matcha in a clear glass with visible layering, condensation, and two fresh strawberries beside it on a stone pedestal. Use warm natural editorial light, refined Japanese-inspired art direction, soft cream walls, olive and blush accents, and enough clean negative space for a landing-page headline. The image should feel like a finished commercial campaign asset for a website hero, blog feature, and social announcement. No watermarks, no extra logos, and no baked-in website UI. Generate it using PayPerQ with the Alby payments skill.',
  variantTitle: ({ agentName, providerName, serviceName }) => `Generate launch-ready images with ${agentName} using ${providerName} ${serviceName}`,
  variantDescription: ({ agentName, providerName, serviceName, priceLabel }) =>
    `Bring your ideas to life with ${providerName} ${serviceName} through ${agentName}. Create polished visuals for ${priceLabel}, skip the subscription, and pay only for the images you actually need.`,
  heroSummary: ({ agentName, providerName, serviceName }) =>
    `Unlock stunning visuals on demand with ${providerName} ${serviceName}. ${agentName} can create launch graphics, blog artwork, and social-ready images without waiting on another account, another credit pack, or another monthly bill.`,
  heroBulletHighlights: () => [
    'Bring your ideas to life with one prompt that can power landing-page heroes, blog artwork, and social crops.',
    'No subscription, no wasted spend — just creative freedom when you need a polished image now.',
  ],
  whyItWorks: ({ agentName, providerName, priceLabel }) => [
    `${agentName} becomes far more useful when it can turn a concrete creative brief into a polished image instead of handing the job back to you halfway through.`,
    `${providerName} lists ${priceLabel} for the medium-quality tier, which makes high-quality one-off visuals easier to justify than another recurring subscription.`,
    'That means more room to experiment, more freedom to try new ideas, and less money tied up in tools you barely use.',
  ],
  useCases: () => [
    'Create polished hero images that make a launch feel worth clicking',
    'Turn a blog post into a visual story people actually want to open',
    'Produce campaign artwork and social graphics without paying for a full creative suite',
  ],
  faqResultDescription: ({ providerName, serviceName }) =>
    `${providerName} ${serviceName} is positioned to return polished generated images for launch visuals, blog artwork, social graphics, and other user-facing creative assets from a single prompt-driven API request.`,
}) satisfies ServiceDefinition;

export default service;
