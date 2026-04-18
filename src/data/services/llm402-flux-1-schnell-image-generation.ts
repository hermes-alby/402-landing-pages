import { buildGenericLandingFaq } from '../faqs';
import type { ServiceDefinition } from '../types';

const service = {
  key: 'llm402-flux-1-schnell-image-generation',
  providerKey: 'llm402',
  name: 'FLUX.1-schnell image generation',
  endpointUrl: 'https://llm402.ai/v1/images/generations',
  resultLabel: 'Generate images on demand for real-time agent workflows',
  category: 'Image generation',
  priceLabel: '21 sats (~$0.01)',
  paymentLabel: 'No sign-up. No email. No subscription. Pay per use. No human needed.',
  exampleOutput: {
    kind: 'image',
    title: 'Example output',
    caption:
      'Example output based on the same image-generation workflow described in the llm402.ai blog post, using the FLUX.1-schnell tier for low-latency image creation.',
    imageSrc: `${import.meta.env.BASE_URL}services/llm402-flux-1-schnell-image-generation/blog.jpg`,
    imageAlt: 'Blog image for llm402.ai FLUX.1-schnell image generation showing a neon vending machine with lightning-bolt coins',
    details: ['Provider: llm402.ai', 'Service: FLUX.1-schnell image generation', 'Endpoint: /v1/images/generations', 'Cost: 21 sats (~$0.01)'],
  },
  examplePromptHeading: 'Example prompt',
  examplePrompt:
    'Use llm402.ai to generate an image with model black-forest-labs/FLUX.1-schnell and prompt: A vending machine dispensing AI-generated artwork for lightning bolt coins, each slot showing a different image style, pixel art.',
  variantTitle: ({ agentName, providerName, serviceName }) => `Generate images with ${agentName} using ${providerName} ${serviceName}`,
  variantDescription: ({ agentName, providerName, serviceName }) =>
    `Enable ${agentName} to generate images through ${providerName} ${serviceName} for as little as 21 sats, with no account, no API key, no prepaid balance, and no human needed.`,
  heroSummary: ({ agentName, providerName, serviceName }) =>
    `Give ${agentName} direct access to ${providerName}'s ${serviceName} endpoint so it can turn prompts into images in one paid request instead of stopping for account setup, credits, or manual checkout.`,
  heroBullets: ({ paymentLabel }) => [
    paymentLabel,
    'Fast enough for real-time thumbnail, mockup, and draft-image workflows.',
    'Uses the standard OpenAI-style images endpoint so the integration path is simple.',
  ],
  whyItWorksTitle: ({ agentName }) => `Why this works for ${agentName}`,
  whyItWorks: ({ agentName, providerName }) => [
    `${agentName} can generate an image exactly when it needs one instead of kicking the task back to a human for another AI account.`,
    `${providerName} prices the fastest tier at 21 sats, which makes one-off visual requests easy to justify inside bigger workflows.`,
    'The payment, retry, and authorization flow is handled automatically by the Alby payments skill.',
  ],
  useCases: () => [
    'Generate social images and blog thumbnails from a text brief',
    'Create quick visual drafts for landing pages, docs, or product concepts',
    'Produce on-demand illustrations inside a larger autonomous workflow',
  ],
  faq: ({ providerName, serviceName }) =>
    buildGenericLandingFaq({
      providerName,
      resultDescription: `${providerName} ${serviceName} returns generated images from a synchronous API call, so agents can create drafts, thumbnails, and visual assets without waiting on a separate download or polling workflow.`,
    }),
} satisfies ServiceDefinition;

export default service;
