export type AgentName = 'OpenClaw' | 'Claude' | 'Codex' | 'Hermes';

export type FaqItem = {
  question: string;
  answer: string;
};

export type LandingVariant = {
  agent: AgentName;
  agentSlug: string;
  slug: string;
  title: string;
  description: string;
  heroSummary: string;
  why402: string[];
  useCases: string[];
  examplePrompt: string;
};

export const installPath = `${import.meta.env.BASE_URL}install/`;

export const endpoint = {
  slug: 'payperq-gpt-image-1-5',
  serviceName: 'PayPerQ',
  endpointName: 'GPT Image 1.5',
  endpointUrl: 'https://api.ppq.ai/v1/images/generations/gpt-image-1.5',
  protocol: '402 payments',
  category: 'Image generation',
  resultLabel: 'Generate polished images on demand',
  priceLabel: 'Mock payment: 182 sats',
  paymentLabel: 'No sign-up. No subscription. Pay per request.',
  websiteUrl: 'https://ppq.ai',
  exampleImage: `${import.meta.env.BASE_URL}mock-payperq-output.svg`,
  exampleImageAlt: 'Mock output image for the PayPerQ GPT Image 1.5 endpoint',
  examplePromptTitle: 'Interesting prompt',
  examplePrompt:
    'Create a cinematic product illustration of a transparent bitcoin hardware wallet floating above a reflective obsidian pedestal, glowing amber rim light, clean studio background, premium launch campaign style.',
  exampleOutputCaption:
    'Mock example output for the PayPerQ GPT Image 1.5 endpoint, shown here as a stand-in for a generated image plus payment receipt details.',
  outputDetails: [
    'Service used: PayPerQ',
    'Endpoint: GPT Image 1.5',
    'Cost paid: 182 sats',
    'Payment mode: 402 pay-per-request',
  ],
  sharedFaq: [
    {
      question: 'What is the Alby Payments Skill?',
      answer:
        'It is the install flow this site points to so your agent can use paid services without asking you to sign up for each provider individually.',
    },
    {
      question: 'Do I need a PayPerQ account or subscription?',
      answer:
        'This landing page is designed around a pay-per-request flow. The goal is to use the endpoint when needed instead of creating a separate account and subscription first.',
    },
    {
      question: 'What is 402?',
      answer:
        '402 is the pattern behind paywalled API access: the service can ask for payment before returning the result, which fits agentic pay-per-use flows well.',
    },
    {
      question: 'What is NWC?',
      answer:
        'NWC stands for Nostr Wallet Connect. In Alby products it is one of the ways payment-capable tools can connect to a wallet setup for machine payments.',
    },
    {
      question: 'What is Alby Hub?',
      answer:
        'Alby Hub is Alby’s self-custodial wallet and app layer for connecting Bitcoin payment tools. If a user needs setup details, the Alby Payments Skill should guide them.',
    },
    {
      question: 'Will this page always be Bitcoin-specific?',
      answer:
        'No. This prototype is focused on 402 services that accept Bitcoin through Alby-compatible flows. Later, non-Bitcoin 402 services can use different CTA destinations and copy.',
    },
  ] satisfies FaqItem[],
};

export const variants: LandingVariant[] = [
  {
    agent: 'OpenClaw',
    agentSlug: 'openclaw',
    slug: endpoint.slug,
    title: 'Generate images with OpenClaw using PayPerQ GPT Image 1.5',
    description:
      'Enable OpenClaw to generate polished images using PayPerQ. No sign-up, no subscription, just pay per request with the Alby Payments Skill.',
    heroSummary:
      'Use OpenClaw to call PayPerQ\'s GPT Image 1.5 endpoint for campaign visuals, concept art, and on-demand image generation without creating a separate service account first.',
    why402: [
      'OpenClaw can reach useful paid tools exactly when a workflow needs them instead of front-loading sign-up friction.',
      'Pay-per-request pricing is a better fit for experimentation than committing to a subscription before the job proves useful.',
      '402 access works well for agent loops that discover a tool, pay once, and continue the task.',
    ],
    useCases: [
      'Generate marketing visuals for a launch brief',
      'Create concept art while iterating on product ideas',
      'Produce blog or social images inside a larger OpenClaw workflow',
    ],
    examplePrompt:
      'Use the PPQ 402 API to generate a GPT 1.5 Image with prompt: create a cinematic launch visual for a bitcoin productivity app with glowing amber accents and premium editorial composition, and pay using the Alby Payments Skill.',
  },
  {
    agent: 'Claude',
    agentSlug: 'claude',
    slug: endpoint.slug,
    title: 'Generate images with Claude using PayPerQ GPT Image 1.5',
    description:
      'Enable Claude to generate images using PayPerQ over 402 payments. No sign-up, no subscription, just use the service on demand with the Alby Payments Skill.',
    heroSummary:
      'Turn Claude into a practical image generation assistant by giving it access to PayPerQ\'s GPT Image 1.5 endpoint for polished mockups, illustrations, and visual ideation.',
    why402: [
      'Claude can stay focused on the task while reaching a paid image endpoint only when the user actually needs visual output.',
      'No account creation detour means faster iteration from prompt to result.',
      'Pay-per-use access is easier to justify for occasional image generation than another monthly tool bill.',
    ],
    useCases: [
      'Create website hero art from a product brief',
      'Generate concept images for product strategy docs',
      'Draft social media visuals from a single Claude conversation',
    ],
    examplePrompt:
      'Use the PPQ 402 API to generate a GPT 1.5 Image with prompt: illustrate a modern coworking team shipping a bitcoin app in a sunlit studio, crisp editorial ad style, and pay using the Alby Payments Skill.',
  },
  {
    agent: 'Codex',
    agentSlug: 'codex',
    slug: endpoint.slug,
    title: 'Generate images with Codex using PayPerQ GPT Image 1.5',
    description:
      'Enable Codex to generate images using PayPerQ. Give your coding agent access to a real image endpoint without sign-up or subscription overhead.',
    heroSummary:
      'Let Codex generate production-ready visuals from the same environment where it writes code, docs, and launch assets by calling PayPerQ\'s GPT Image 1.5 endpoint on demand.',
    why402: [
      'Codex workflows often need one-off assets, and 402 payments are a natural fit for that just-in-time usage pattern.',
      'Developers can keep the workflow in one place instead of stopping to create another SaaS account.',
      'Pay-per-request image generation is useful when the agent is building demos, docs, or review assets programmatically.',
    ],
    useCases: [
      'Generate screenshots or launch graphics for README pages',
      'Create mock visuals for review apps and demos',
      'Produce branded illustrations while Codex is shipping a feature',
    ],
    examplePrompt:
      'Use the PPQ 402 API to generate a GPT 1.5 Image with prompt: design a sleek dashboard launch graphic for a developer bitcoin payments toolkit, blue and amber palette, high-detail product marketing style, and pay using the Alby Payments Skill.',
  },
  {
    agent: 'Hermes',
    agentSlug: 'hermes',
    slug: endpoint.slug,
    title: 'Generate images with Hermes using PayPerQ GPT Image 1.5',
    description:
      'Enable Hermes to generate images using PayPerQ with pay-per-request 402 access. No sign-up, no subscription, just install the Alby Payments Skill.',
    heroSummary:
      'Give Hermes direct access to PayPerQ\'s GPT Image 1.5 endpoint so it can create visuals for launches, content, and prototypes inside a broader autonomous workflow.',
    why402: [
      'Hermes can discover a useful paid tool, call it once, and continue the workflow without account setup churn.',
      'Pay-per-use access matches the way autonomous agents opportunistically compose services.',
      'The same agent session can move from research to prompting to paid image generation with minimal friction.',
    ],
    useCases: [
      'Generate landing page visuals while building a prototype site',
      'Create images for research reports or ecosystem monitoring posts',
      'Produce assets for demos, docs, and GitHub Pages previews',
    ],
    examplePrompt:
      'Use the PPQ 402 API to generate a GPT 1.5 Image with prompt: create a futuristic editorial illustration of autonomous agents collaborating in a bitcoin-native workspace, elegant lighting, premium campaign composition, and pay using the Alby Payments Skill.',
  },
];

export const variantMap = new Map(
  variants.map((variant) => [`${variant.agentSlug}/${variant.slug}`, variant]),
);
