export type AgentName = 'OpenClaw' | 'Claude' | 'Codex' | 'Hermes';

export type FaqItem = {
  question: string;
  answer: string;
};

export type Cta = {
  title: string;
  helper: string;
  href: string;
  buttonLabel: string;
};

export type ExampleImageOutput = {
  kind: 'image';
  title: string;
  caption: string;
  imageSrc: string;
  imageAlt: string;
  details: string[];
};

export type ExampleTableOutput = {
  kind: 'table';
  title: string;
  caption: string;
  columns: string[];
  rows: Array<{ author: string; tweet: string; likes: string }>;
  details: string[];
};

export type ExampleOutput = ExampleImageOutput | ExampleTableOutput;

export type LandingVariant = {
  agent: AgentName;
  agentSlug: string;
  slug: string;
  serviceKey: 'payperq' | 'twitter-cascade';
  serviceName: string;
  endpointName: string;
  endpointUrl: string;
  resultLabel: string;
  category: string;
  priceLabel: string;
  paymentLabel: string;
  title: string;
  description: string;
  heroSummary: string;
  heroBullets: string[];
  whyItWorksTitle: string;
  whyItWorks: string[];
  useCases: string[];
  examplePrompt?: string;
  examplePromptHeading?: string;
  examplePromptNote?: string;
  exampleOutput: ExampleOutput;
  faq: FaqItem[];
  cta: Cta;
};

const installPath = `${import.meta.env.BASE_URL}install/`;
const solanaComingSoonPath = `${import.meta.env.BASE_URL}coming-soon/twitter-cascade/`;

const albyInstallCta: Cta = {
  title: 'Install the Alby Payments Skill',
  helper: 'Gives your agent access to useful services without sign-up, email, or subscription.',
  href: installPath,
  buttonLabel: 'Install now',
};

const solanaComingSoonCta: Cta = {
  title: 'Install the Alby Payments Skill',
  helper: 'Gives your agent access to useful services without sign-up, email, or subscription.',
  href: solanaComingSoonPath,
  buttonLabel: 'Install now',
};

const bitcoinFaq: FaqItem[] = [
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
];

const twitterCascadeFaq: FaqItem[] = [
  {
    question: 'Can I use this with Alby products today?',
    answer:
      'Not yet. This endpoint currently uses Solana, so support in the Alby-directed flow shown on these pages is still coming soon.',
  },
  {
    question: 'Why is there no example prompt on this page?',
    answer:
      'We can show the kind of output and pricing this service offers, but the example result for this page was fetched through another company product because Alby products do not support this service yet.',
  },
  {
    question: 'Why does this service still matter for agents?',
    answer:
      'It shows the kind of high-value, no-sign-up service that agents should be able to use once support lands: search social data, pull live results, and continue the task without a human detour.',
  },
  {
    question: 'What happens next?',
    answer:
      'For now, the right user-facing message is that support is coming soon. Once Alby products support this payment path, these pages can switch to a direct install or usage flow.',
  },
];

const payperqBase = {
  serviceKey: 'payperq' as const,
  serviceName: 'PayPerQ',
  endpointName: 'GPT Image 1.5',
  endpointUrl: 'https://api.ppq.ai/v1/images/generations/gpt-image-1.5',
  resultLabel: 'Generate polished images on demand',
  category: 'Image generation',
  priceLabel: '$0.08',
  paymentLabel: 'No sign-up. No email. No subscription. Pay per use. No human needed.',
  exampleOutput: {
    kind: 'image' as const,
    title: 'Example output',
    caption:
      'Example output section showing the kind of visual result this page is about, together with an example paid request cost.',
    imageSrc: `${import.meta.env.BASE_URL}mock-payperq-output.svg`,
    imageAlt: 'Example generated campaign-style image for PayPerQ GPT Image 1.5',
    details: ['Service: PayPerQ', 'Endpoint: GPT Image 1.5', 'Cost: $0.08', 'Flow: pay per use with no sign-up or email'],
  },
  examplePromptHeading: 'Example prompt',
  faq: bitcoinFaq,
  cta: albyInstallCta,
};

const twitterCascadeBase = {
  serviceKey: 'twitter-cascade' as const,
  serviceName: 'Twitter Cascade',
  endpointName: 'Tweet search',
  endpointUrl: 'https://twitter.surf.cascade.fyi/tweets/search',
  resultLabel: 'Search and summarize live Twitter results on demand',
  category: 'Social search',
  priceLabel: '$0.04',
  paymentLabel: 'No sign-up. No email. No subscription. Pay per use. Support for Alby users is coming soon.',
  exampleOutput: {
    kind: 'table' as const,
    title: 'Example output',
    caption:
      'Example result from querying recent Bitcoin tweets. This shows the kind of output and pricing the service can return today.',
    columns: ['Author', 'Tweet', 'Likes'],
    rows: [
      { author: '@BitcoinPulseX', tweet: 'Satoshi-era whale dumps 3,500 BTC ($260M) after 15 years', likes: '2,018' },
      { author: '@BitcoinMagazine', tweet: 'Bitcoin pumps above $77,000!', likes: '1,211' },
      { author: '@Vivek4real_', tweet: 'Eric Trump: "Bitcoin is going to hit $1 million"', likes: '723' },
      { author: '@pete_rizzo_', tweet: 'Charles Schwab actively buying/selling Bitcoin, crypto trading live within weeks', likes: '307' },
      { author: '@TrendingBitcoin', tweet: 'Research: BTC could hit $1M by 2027, $5M by 2031', likes: '168' },
    ],
    details: ['Service: Twitter Cascade', 'Endpoint: tweet search', 'Query example: bitcoin since:2026-04-16', 'Cost: $0.04'],
  },
  faq: twitterCascadeFaq,
  cta: solanaComingSoonCta,
};

export const variants: LandingVariant[] = [
  {
    ...payperqBase,
    agent: 'OpenClaw',
    agentSlug: 'openclaw',
    slug: 'payperq-gpt-image-1-5',
    title: 'Generate images with OpenClaw using PayPerQ GPT Image 1.5',
    description:
      'Enable OpenClaw to generate polished images with PayPerQ. No sign-up, no email, no subscription, and no human needed to unblock the workflow.',
    heroSummary:
      'Use OpenClaw to create campaign visuals, concept art, and launch graphics with PayPerQ’s GPT Image 1.5 endpoint without stopping to create an account or hand the task back to a human.',
    heroBullets: [
      payperqBase.paymentLabel,
      'Use a real service on demand instead of creating another account.',
      'Let the agent keep going instead of handing the task back to you.',
    ],
    whyItWorksTitle: 'Why this is a great fit for OpenClaw',
    whyItWorks: [
      'OpenClaw can keep moving instead of pausing to ask a human to sign up for yet another tool.',
      'Pay-on-demand access is a better fit for experimentation than adding a subscription before the workflow proves useful.',
      'The agent can discover the service, use it, and continue the task in one flow.',
    ],
    useCases: ['Generate marketing visuals for a launch brief', 'Create concept art while iterating on product ideas', 'Produce blog or social images inside a larger OpenClaw workflow'],
    examplePrompt:
      'Use the PPQ 402 API to generate a GPT 1.5 image with prompt: create a cinematic launch visual for a bitcoin productivity app with glowing amber accents and premium editorial composition, and pay using the Alby Payments Skill.',
  },
  {
    ...payperqBase,
    agent: 'Claude',
    agentSlug: 'claude',
    slug: 'payperq-gpt-image-1-5',
    title: 'Generate images with Claude using PayPerQ GPT Image 1.5',
    description:
      'Enable Claude to generate images with PayPerQ. No sign-up, no email, no subscription, and no human needed to get from prompt to result.',
    heroSummary:
      'Turn Claude into a practical image-generation assistant by giving it access to PayPerQ’s GPT Image 1.5 endpoint for polished mockups, illustrations, and visual ideation without workflow-breaking signup friction.',
    heroBullets: [
      payperqBase.paymentLabel,
      'Use a real service on demand instead of creating another account.',
      'Let the agent keep going instead of handing the task back to you.',
    ],
    whyItWorksTitle: 'Why this is a great fit for Claude',
    whyItWorks: [
      'Claude can stay focused on the task instead of bouncing the user into account creation and setup.',
      'The agent can request exactly the output it needs when it needs it.',
      'Pay-on-demand access is easier to justify for occasional visual work than another monthly tool bill.',
    ],
    useCases: ['Create website hero art from a product brief', 'Generate concept images for product strategy docs', 'Draft social media visuals from a single Claude conversation'],
    examplePrompt:
      'Use the PPQ 402 API to generate a GPT 1.5 image with prompt: illustrate a modern coworking team shipping a bitcoin app in a sunlit studio, crisp editorial ad style, and pay using the Alby Payments Skill.',
  },
  {
    ...payperqBase,
    agent: 'Codex',
    agentSlug: 'codex',
    slug: 'payperq-gpt-image-1-5',
    title: 'Generate images with Codex using PayPerQ GPT Image 1.5',
    description:
      'Enable Codex to generate images with PayPerQ right inside a working dev flow — no sign-up, no email, no subscription, no human needed.',
    heroSummary:
      'Let Codex generate launch graphics, README visuals, and demo assets from the same environment where it writes code by calling PayPerQ’s GPT Image 1.5 endpoint on demand.',
    heroBullets: [
      payperqBase.paymentLabel,
      'Use a real service on demand instead of creating another account.',
      'Let the agent keep going instead of handing the task back to you.',
    ],
    whyItWorksTitle: 'Why this is a great fit for Codex',
    whyItWorks: [
      'Codex workflows often need one-off assets, and this avoids stopping development for another SaaS signup.',
      'The agent can produce code, docs, and visuals inside one continuous loop.',
      'On-demand access makes sense when the image task is occasional but still valuable.',
    ],
    useCases: ['Generate screenshots or launch graphics for README pages', 'Create mock visuals for review apps and demos', 'Produce branded illustrations while Codex is shipping a feature'],
    examplePrompt:
      'Use the PPQ 402 API to generate a GPT 1.5 image with prompt: design a sleek dashboard launch graphic for a developer bitcoin payments toolkit, blue and amber palette, high-detail product marketing style, and pay using the Alby Payments Skill.',
  },
  {
    ...payperqBase,
    agent: 'Hermes',
    agentSlug: 'hermes',
    slug: 'payperq-gpt-image-1-5',
    title: 'Generate images with Hermes using PayPerQ GPT Image 1.5',
    description:
      'Enable Hermes to generate images with PayPerQ for launches, content, and prototypes — no sign-up, no email, no subscription, no human needed.',
    heroSummary:
      'Give Hermes direct access to PayPerQ’s GPT Image 1.5 endpoint so it can create visuals inside a broader autonomous workflow without handing the task back to a human for account setup.',
    heroBullets: [
      payperqBase.paymentLabel,
      'Use a real service on demand instead of creating another account.',
      'Let the agent keep going instead of handing the task back to you.',
    ],
    whyItWorksTitle: 'Why this is a great fit for Hermes',
    whyItWorks: [
      'Hermes can discover a useful tool, use it, and continue the workflow without signup churn.',
      'The same session can move from research to prompting to image generation with much less friction.',
      'This is especially useful when an autonomous workflow needs a paid service only occasionally.',
    ],
    useCases: ['Generate landing page visuals while building a prototype site', 'Create images for research reports or ecosystem monitoring posts', 'Produce assets for demos, docs, and GitHub Pages previews'],
    examplePrompt:
      'Use the PPQ 402 API to generate a GPT 1.5 image with prompt: create a futuristic editorial illustration of autonomous agents collaborating in a bitcoin-native workspace, elegant lighting, premium campaign composition, and pay using the Alby Payments Skill.',
  },
  {
    ...twitterCascadeBase,
    agent: 'OpenClaw',
    agentSlug: 'openclaw',
    slug: 'twitter-cascade-search',
    title: 'Search Twitter with OpenClaw using Twitter Cascade',
    description:
      'Enable OpenClaw to search live Twitter results with Twitter Cascade. No sign-up, no email, no subscription, and support for Alby users is coming soon.',
    heroSummary:
      'Twitter Cascade is the kind of social search service an agent should be able to call without account friction. For now, this Solana-based payment flow is not yet supported by Alby products.',
    heroBullets: [
      twitterCascadeBase.paymentLabel,
      'Useful for live research, trend checks, and pulling recent social context into an agent workflow.',
      'No example prompt yet because Alby products do not support this payment path today.',
    ],
    whyItWorksTitle: 'Why this would be powerful for OpenClaw',
    whyItWorks: [
      'OpenClaw could pull live social context without asking a human to create another account first.',
      'Tweet search is a natural tool inside research and monitoring workflows.',
      'The main missing piece is payment-path support, not usefulness.',
    ],
    useCases: ['Track breaking Bitcoin stories from live tweets', 'Pull top social posts into research summaries', 'Scan recent sentiment around a company, token, or topic'],
  },
  {
    ...twitterCascadeBase,
    agent: 'Claude',
    agentSlug: 'claude',
    slug: 'twitter-cascade-search',
    title: 'Search Twitter with Claude using Twitter Cascade',
    description:
      'Enable Claude to search Twitter with Twitter Cascade. No sign-up, no email, no subscription, and Alby support for this service is coming soon.',
    heroSummary:
      'This is a strong example of a service Claude should be able to use directly for live social research, but the current payment path is Solana-only so the Alby-directed flow is not live yet.',
    heroBullets: [
      twitterCascadeBase.paymentLabel,
      'Useful for live research, trend checks, and pulling recent social context into an agent workflow.',
      'No example prompt yet because Alby products do not support this payment path today.',
    ],
    whyItWorksTitle: 'Why this would be powerful for Claude',
    whyItWorks: [
      'Claude becomes much more useful when it can access fresh social context instead of relying only on static web pages.',
      'This avoids the classic workflow break where the user has to create an account or manually fetch data.',
      'The product gap here is support, not demand for the result.',
    ],
    useCases: ['Find top tweets about Bitcoin in the last 24 hours', 'Pull examples for a market commentary draft', 'Track public reactions to an announcement or product launch'],
  },
  {
    ...twitterCascadeBase,
    agent: 'Codex',
    agentSlug: 'codex',
    slug: 'twitter-cascade-search',
    title: 'Search Twitter with Codex using Twitter Cascade',
    description:
      'Enable Codex to search Twitter with Twitter Cascade for live research tasks. No sign-up, no email, no subscription, and Alby support is coming soon.',
    heroSummary:
      'Codex workflows often need fresh live data for demos, dashboards, or research tooling. Twitter Cascade is a useful fit, but the current Solana payment path is not yet supported in Alby products.',
    heroBullets: [
      twitterCascadeBase.paymentLabel,
      'Useful for live research, trend checks, and pulling recent social context into an agent workflow.',
      'No example prompt yet because Alby products do not support this payment path today.',
    ],
    whyItWorksTitle: 'Why this would be powerful for Codex',
    whyItWorks: [
      'Codex could pipe live tweet search directly into code, docs, dashboards, or automation.',
      'Developers should not need to stop and wire up another account just to fetch a research result.',
      'Once payment support lands, this becomes a strong pay-on-demand data source.',
    ],
    useCases: ['Feed live tweet data into a prototype dashboard', 'Pull social examples into generated docs', 'Research current public discussion for an app or narrative'],
  },
  {
    ...twitterCascadeBase,
    agent: 'Hermes',
    agentSlug: 'hermes',
    slug: 'twitter-cascade-search',
    title: 'Search Twitter with Hermes using Twitter Cascade',
    description:
      'Enable Hermes to search Twitter with Twitter Cascade for live research and monitoring. No sign-up, no subscription, and support for Alby users is coming soon.',
    heroSummary:
      'Hermes would be able to use Twitter Cascade for fast social search inside research and monitoring workflows, but this endpoint currently uses a Solana payment flow that Alby products do not support yet.',
    heroBullets: [
      twitterCascadeBase.paymentLabel,
      'Useful for live research, trend checks, and pulling recent social context into an agent workflow.',
      'No example prompt yet because Alby products do not support this payment path today.',
    ],
    whyItWorksTitle: 'Why this would be powerful for Hermes',
    whyItWorks: [
      'Hermes workflows often benefit from fresh social data alongside web and repo research.',
      'This kind of tool fits autonomous monitoring, summarization, and alerting tasks well.',
      'The main blocker right now is payment compatibility, not the value of the endpoint.',
    ],
    useCases: ['Monitor top Bitcoin tweets for ecosystem reports', 'Pull fresh social context into research summaries', 'Track sentiment shifts during breaking news events'],
  },
];

export const serviceSections = [
  {
    key: 'payperq',
    title: 'PayPerQ · GPT Image 1.5',
    description: 'Bitcoin-compatible flow with install CTA available now.',
  },
  {
    key: 'twitter-cascade',
    title: 'Twitter Cascade · Tweet search',
    description: 'Solana-based flow. Support in Alby products is coming soon.',
  },
] as const;
