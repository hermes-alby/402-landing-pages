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
  whyItWorks: string[];
  useCases: string[];
  examplePrompt: string;
};

export const installPath = `${import.meta.env.BASE_URL}install/`;

export const endpoint = {
  slug: 'payperq-gpt-image-1-5',
  serviceName: 'PayPerQ',
  endpointName: 'GPT Image 1.5',
  endpointUrl: 'https://api.ppq.ai/v1/images/generations/gpt-image-1.5',
  category: 'Image generation',
  resultLabel: 'Generate polished images on demand',
  priceLabel: 'Example cost paid: 182 sats',
  paymentLabel: 'No sign-up. No subscription. No human needed.',
  websiteUrl: 'https://ppq.ai',
  exampleImage: `${import.meta.env.BASE_URL}mock-payperq-output.svg`,
  exampleImageAlt: 'Example generated campaign-style image for PayPerQ GPT Image 1.5',
  examplePromptTitle: 'Example prompt',
  examplePrompt:
    'Use the PPQ 402 API to generate a GPT 1.5 image of a transparent bitcoin hardware wallet floating above a reflective obsidian pedestal, glowing amber rim light, clean studio background, premium launch campaign style, and pay using the Alby Payments Skill.',
  exampleOutputCaption:
    'Example output section showing the kind of visual result this page is about, together with an example paid request cost.',
  outputDetails: [
    'Service: PayPerQ',
    'Endpoint: GPT Image 1.5',
    'Cost paid: 182 sats',
    'Flow: paid on demand without sign-up',
  ],
  sharedFaq: [
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
  ] satisfies FaqItem[],
};

export const variants: LandingVariant[] = [
  {
    agent: 'OpenClaw',
    agentSlug: 'openclaw',
    slug: endpoint.slug,
    title: 'Generate images with OpenClaw using PayPerQ GPT Image 1.5',
    description:
      'Enable OpenClaw to generate polished images with PayPerQ. No sign-up, no subscription, and no human needed to unblock the workflow.',
    heroSummary:
      'Use OpenClaw to create campaign visuals, concept art, and launch graphics with PayPerQ’s GPT Image 1.5 endpoint without stopping to create an account or hand the task back to a human.',
    whyItWorks: [
      'OpenClaw can keep moving instead of pausing to ask a human to sign up for yet another tool.',
      'Pay-on-demand access is a better fit for experimentation than adding a subscription before the workflow proves useful.',
      'The agent can discover the service, use it, and continue the task in one flow.',
    ],
    useCases: [
      'Generate marketing visuals for a launch brief',
      'Create concept art while iterating on product ideas',
      'Produce blog or social images inside a larger OpenClaw workflow',
    ],
    examplePrompt:
      'Use the PPQ 402 API to generate a GPT 1.5 image with prompt: create a cinematic launch visual for a bitcoin productivity app with glowing amber accents and premium editorial composition, and pay using the Alby Payments Skill.',
  },
  {
    agent: 'Claude',
    agentSlug: 'claude',
    slug: endpoint.slug,
    title: 'Generate images with Claude using PayPerQ GPT Image 1.5',
    description:
      'Enable Claude to generate images with PayPerQ. No sign-up, no subscription, and no human needed to get from prompt to result.',
    heroSummary:
      'Turn Claude into a practical image-generation assistant by giving it access to PayPerQ’s GPT Image 1.5 endpoint for polished mockups, illustrations, and visual ideation without workflow-breaking signup friction.',
    whyItWorks: [
      'Claude can stay focused on the task instead of bouncing the user into account creation and setup.',
      'The agent can request exactly the output it needs when it needs it.',
      'Pay-on-demand access is easier to justify for occasional visual work than another monthly tool bill.',
    ],
    useCases: [
      'Create website hero art from a product brief',
      'Generate concept images for product strategy docs',
      'Draft social media visuals from a single Claude conversation',
    ],
    examplePrompt:
      'Use the PPQ 402 API to generate a GPT 1.5 image with prompt: illustrate a modern coworking team shipping a bitcoin app in a sunlit studio, crisp editorial ad style, and pay using the Alby Payments Skill.',
  },
  {
    agent: 'Codex',
    agentSlug: 'codex',
    slug: endpoint.slug,
    title: 'Generate images with Codex using PayPerQ GPT Image 1.5',
    description:
      'Enable Codex to generate images with PayPerQ right inside a working dev flow — no sign-up, no subscription, no human needed.',
    heroSummary:
      'Let Codex generate launch graphics, README visuals, and demo assets from the same environment where it writes code by calling PayPerQ’s GPT Image 1.5 endpoint on demand.',
    whyItWorks: [
      'Codex workflows often need one-off assets, and this avoids stopping development for another SaaS signup.',
      'The agent can produce code, docs, and visuals inside one continuous loop.',
      'On-demand access makes sense when the image task is occasional but still valuable.',
    ],
    useCases: [
      'Generate screenshots or launch graphics for README pages',
      'Create mock visuals for review apps and demos',
      'Produce branded illustrations while Codex is shipping a feature',
    ],
    examplePrompt:
      'Use the PPQ 402 API to generate a GPT 1.5 image with prompt: design a sleek dashboard launch graphic for a developer bitcoin payments toolkit, blue and amber palette, high-detail product marketing style, and pay using the Alby Payments Skill.',
  },
  {
    agent: 'Hermes',
    agentSlug: 'hermes',
    slug: endpoint.slug,
    title: 'Generate images with Hermes using PayPerQ GPT Image 1.5',
    description:
      'Enable Hermes to generate images with PayPerQ for launches, content, and prototypes — no sign-up, no subscription, no human needed.',
    heroSummary:
      'Give Hermes direct access to PayPerQ’s GPT Image 1.5 endpoint so it can create visuals inside a broader autonomous workflow without handing the task back to a human for account setup.',
    whyItWorks: [
      'Hermes can discover a useful tool, use it, and continue the workflow without signup churn.',
      'The same session can move from research to prompting to image generation with much less friction.',
      'This is especially useful when an autonomous workflow needs a paid service only occasionally.',
    ],
    useCases: [
      'Generate landing page visuals while building a prototype site',
      'Create images for research reports or ecosystem monitoring posts',
      'Produce assets for demos, docs, and GitHub Pages previews',
    ],
    examplePrompt:
      'Use the PPQ 402 API to generate a GPT 1.5 image with prompt: create a futuristic editorial illustration of autonomous agents collaborating in a bitcoin-native workspace, elegant lighting, premium campaign composition, and pay using the Alby Payments Skill.',
  },
];
