import type { ServiceDefinition } from '../types';

const bitcoinFaq = [
  {
    question: 'What is the Alby Payments Skill?',
    answer:
      'It is the install flow this page points to so your agent can unlock useful paid services without asking you to create separate accounts first.',
  },
  {
    question: 'Do I need a PayPerQ account or subscription?',
    answer:
      'The intended flow here is pay on demand. The point is to let your agent use the service when needed instead of stopping for account creation first.',
  },
  {
    question: 'Why does “no human needed” matter?',
    answer:
      'Agents often get stuck when they need a human to create an account, pass a captcha, or manage another subscription. This flow is meant to remove that bottleneck.',
  },
  {
    question: 'What is 402?',
    answer:
      '402 is the payment pattern behind this kind of API access. You do not need to understand the protocol details to use the page — the important point is that the agent can pay and continue the task.',
  },
] as const;

export const payperqGptImage15: ServiceDefinition = {
  key: 'payperq-gpt-image-1-5',
  providerKey: 'payperq',
  name: 'GPT Image 1.5',
  endpointUrl: 'https://api.ppq.ai/v1/images/generations/gpt-image-1.5',
  resultLabel: 'Generate polished images on demand',
  category: 'Image generation',
  priceLabel: '$0.08',
  paymentLabel: 'No sign-up. No email. No subscription. Pay per use. No human needed.',
  exampleOutput: {
    kind: 'image',
    title: 'Example output',
    caption:
      'Example output section showing the kind of visual result this page is about, together with an example paid request cost.',
    imageSrc: `${import.meta.env.BASE_URL}mock-payperq-output.svg`,
    imageAlt: 'Example generated campaign-style image for PayPerQ GPT Image 1.5',
    details: ['Provider: PayPerQ', 'Service: GPT Image 1.5', 'Cost: $0.08', 'Flow: pay per use with no sign-up or email'],
  },
  examplePromptHeading: 'Example prompt',
  examplePrompt:
    'Use the PPQ 402 API to generate a GPT 1.5 image with prompt: create a cinematic launch visual for a bitcoin productivity app with glowing amber accents and premium editorial composition, and pay using the Alby Payments Skill.',
  variantTitle: ({ agentName, providerName, serviceName }) => `Generate images with ${agentName} using ${providerName} ${serviceName}`,
  variantDescription: ({ agentName, providerName, serviceName }) =>
    `Enable ${agentName} to generate polished images with ${providerName} ${serviceName}. No sign-up, no email, no subscription, and no human needed to unblock the workflow.`,
  heroSummary: ({ agentName, providerName, serviceName }) =>
    `Give ${agentName} direct access to ${providerName}'s ${serviceName} endpoint so it can create campaign visuals, concept art, and launch graphics without stopping to create an account or hand the task back to a human.`,
  heroBullets: ({ paymentLabel }) => [
    paymentLabel,
    'Use a real service on demand instead of creating another account.',
    'Let the agent keep going instead of handing the task back to you.',
  ],
  whyItWorksTitle: ({ agentName }) => `Why this works for ${agentName}`,
  whyItWorks: ({ agentName, providerName, serviceName }) => [
    `${agentName} can keep moving instead of pausing to ask a human to sign up for yet another tool.`,
    `Pay-on-demand access to ${providerName} ${serviceName} is a better fit for experimentation than adding a subscription before the workflow proves useful.`,
    'The agent can discover the service, use it, and continue the task in one flow.',
  ],
  useCases: () => [
    'Generate marketing visuals for a launch brief',
    'Create concept art while iterating on product ideas',
    'Produce blog or social images inside a broader agent workflow',
  ],
  faq: [...bitcoinFaq],
};
