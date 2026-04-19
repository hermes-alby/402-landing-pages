export type SupportStatus = 'supported' | 'coming-soon';

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
  briefingTitle?: string;
  briefingParagraphs?: string[];
};

export type ExampleTableOutput = {
  kind: 'table';
  title: string;
  caption: string;
  columns: string[];
  rows: string[][];
  details: string[];
  briefingTitle?: string;
  briefingParagraphs?: string[];
};

export type ExampleOutput = ExampleImageOutput | ExampleTableOutput;

export type { ServicePrice } from './pricing';

export type Agent = {
  key: string;
  name: string;
  logoSrc: string;
};

export type InstallFlow =
  | {
      kind: 'command';
      command: string;
    }
  | {
      kind: 'prompt';
      prompt: string;
    };

export type Provider = {
  key: string;
  name: string;
  logoSrc: string;
  websiteUrl: string;
  supportStatus: SupportStatus;
  lastCheckedAt: string;
};

export type ServiceDefinition = {
  key: string;
  providerKey: string;
  name: string;
  endpointUrl: string;
  resultLabel: string;
  category: string;
  supportStatus: SupportStatus;
  lastCheckedAt: string;
  pricing: import('./pricing').ServicePrice;
  paymentLabel: string;
  exampleOutput: ExampleOutput;
  examplePrompt?: string;
  examplePromptHeading?: string;
  variantTitle: (context: { agentName: string; providerName: string; serviceName: string; priceLabel: string }) => string;
  variantDescription: (context: { agentName: string; providerName: string; serviceName: string; priceLabel: string }) => string;
  heroSummary: (context: { agentName: string; providerName: string; serviceName: string; priceLabel: string }) => string;
  heroBullets: (context: { agentName: string; providerName: string; serviceName: string; paymentLabel: string; priceLabel: string }) => string[];
  whyItWorksTitle: (context: { agentName: string; providerName: string; serviceName: string; priceLabel: string }) => string;
  whyItWorks: (context: { agentName: string; providerName: string; serviceName: string; priceLabel: string }) => string[];
  useCases: (context: { agentName: string; providerName: string; serviceName: string; priceLabel: string }) => string[];
  faq: (context: { providerName: string; serviceName: string }) => FaqItem[];
};

export type LandingVariant = {
  agentKey: string;
  agentName: string;
  agentLogoSrc: string;
  providerKey: string;
  providerName: string;
  providerLogoSrc: string;
  providerLastCheckedAt: string;
  serviceKey: string;
  serviceName: string;
  serviceLastCheckedAt: string;
  slug: string;
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
  exampleOutput: ExampleOutput;
  faq: FaqItem[];
  cta: Cta;
  supportStatus: SupportStatus;
};
