import { buildGenericLandingFaq } from '../faqs';
import type { ServiceDefinition } from '../types';

const service = {
  key: 'llm402-gpt-5-image-generation',
  providerKey: 'llm402',
  name: 'GPT-5-image generation',
  endpointUrl: 'https://llm402.ai/v1/images/generations',
  resultLabel: 'Generate detailed, user-facing images on demand',
  category: 'Image generation',
  priceLabel: '105 sats (~$0.03)',
  paymentLabel: 'No sign-up. No email. No subscription. Pay per use. No human needed.',
  exampleOutput: {
    kind: 'image',
    title: 'Example output',
    caption:
      'Example output based on the same llm402.ai workflow, this time representing the higher-detail GPT-5-image tier described in the blog post comparison.',
    imageSrc: `${import.meta.env.BASE_URL}mock-payperq-output.svg`,
    imageAlt: 'Example generated image for llm402.ai GPT-5-image generation',
    details: ['Provider: llm402.ai', 'Service: GPT-5-image generation', 'Endpoint: /v1/images/generations', 'Cost: 105 sats (~$0.03)'],
  },
  examplePromptHeading: 'Example prompt',
  examplePrompt:
    'Use llm402.ai to generate an image with model openai/gpt-5-image and prompt: A vending machine dispensing AI-generated artwork for lightning bolt coins, each slot showing a different image style, pixel art.',
  variantTitle: ({ agentName, providerName, serviceName }) => `Generate detailed images with ${agentName} using ${providerName} ${serviceName}`,
  variantDescription: ({ agentName, providerName, serviceName }) =>
    `Enable ${agentName} to generate higher-detail images through ${providerName} ${serviceName} for 105 sats, with no account, no API key, no prepaid balance, and no human needed.`,
  heroSummary: ({ agentName, providerName, serviceName }) =>
    `Give ${agentName} access to ${providerName}'s ${serviceName} endpoint when the output needs to be polished enough for user-facing pages, richer mockups, and more detailed visual work.`,
  heroBullets: ({ paymentLabel }) => [
    paymentLabel,
    'Better fit when the image will end up in front of a user instead of staying a rough internal draft.',
    'Uses the same endpoint and payment flow as the cheaper llm402.ai image tiers, just with a higher-quality model.',
  ],
  whyItWorksTitle: ({ agentName }) => `Why this works for ${agentName}`,
  whyItWorks: ({ agentName, providerName }) => [
    `${agentName} can choose a higher-quality image path without changing the integration or asking a human to manage another AI account.`,
    `${providerName} keeps the request flow identical across models, so the agent can trade more sats for better image quality when it matters.`,
    'This is the stronger option for polished launch assets, hero graphics, and visuals that need to look coherent on first view.',
  ],
  useCases: () => [
    'Generate polished hero images for landing pages or product launches',
    'Create higher-quality campaign visuals and social graphics',
    'Produce detailed mockups when rough draft quality is not enough',
  ],
  faq: ({ providerName, serviceName }) =>
    buildGenericLandingFaq({
      providerName,
      resultDescription: `${providerName} ${serviceName} returns more detailed, coherent generated images from the same synchronous image endpoint, making it a better fit for polished user-facing visuals than the faster draft tier.`,
    }),
} satisfies ServiceDefinition;

export default service;
