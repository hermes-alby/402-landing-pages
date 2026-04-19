import { agents } from './agents';
import { installFlows } from './install-flows';
import { providers, providersByKey } from './providers';
import { formatPriceLabel } from './pricing';
import { serviceDefinitions } from './services/index';
import type { Cta, LandingVariant } from './types';

const installPath = (agentKey: string) => `${import.meta.env.BASE_URL}install/${agentKey}/`;
const comingSoonPath = (agentKey: string) => `${import.meta.env.BASE_URL}coming-soon/${agentKey}/`;

const shuffleScore = (value: string) => {
  let hash = 0;

  for (const char of value) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }

  return hash;
};


const displayTokenMap: Record<string, string> = {
  ai: 'AI',
  api: 'API',
  claude: 'Claude',
  codex: 'Codex',
  gpt: 'GPT',
  html: 'HTML',
  image: 'Image',
  pdf: 'PDF',
  flux: 'FLUX',
  schnell: 'Schnell',
  text: 'Text',
  translate: 'Translate',
  generate: 'Generate',
  analyze: 'Analyze',
  convert: 'Convert',
  search: 'Search',
  quotes: 'Quotes',
  tweet: 'Tweet',
  predictions: 'Predictions',
  oracle: 'Oracle',
};

const formatServiceDisplayName = (name: string) =>
  name
    .split(/\s+/)
    .flatMap((part) => part.split('-'))
    .map((token) => {
      const lower = token.toLowerCase();
      if (displayTokenMap[lower]) {
        return displayTokenMap[lower];
      }
      if (token !== token.toLowerCase()) {
        return token;
      }
      return token.charAt(0).toUpperCase() + token.slice(1);
    })
    .join(' ');

const buildCta = (agentKey: string, supportStatus: 'supported' | 'coming-soon'): Cta => ({
  title: 'Install the Alby Payments Skill',
  helper: 'Gives your agent access to useful services without sign-up, email, or subscription.',
  href: supportStatus === 'supported' ? installPath(agentKey) : comingSoonPath(agentKey),
  buttonLabel: 'Install now',
});

export const variants: LandingVariant[] = agents.flatMap((agent) =>
  serviceDefinitions.map((service) => {
    const provider = providersByKey[service.providerKey];
    const supportStatus = service.supportStatus;
    const priceLabel = formatPriceLabel(service.pricing);
    const serviceDisplayName = formatServiceDisplayName(service.name);
    const context = {
      agentName: agent.name,
      providerName: provider.name,
      serviceName: serviceDisplayName,
      paymentLabel: service.paymentLabel,
      priceLabel,
    };

    return {
      agentKey: agent.key,
      agentName: agent.name,
      agentLogoSrc: agent.logoSrc,
      providerKey: provider.key,
      providerName: provider.name,
      providerLogoSrc: provider.logoSrc,
      providerLastCheckedAt: provider.lastCheckedAt,
      serviceKey: service.key,
      serviceName: serviceDisplayName,
      serviceLastCheckedAt: service.lastCheckedAt,
      slug: service.key,
      endpointUrl: service.endpointUrl,
      resultLabel: service.resultLabel,
      category: service.category,
      priceLabel,
      paymentLabel: service.paymentLabel,
      title: service.variantTitle(context),
      description: service.variantDescription(context),
      heroSummary: service.heroSummary(context),
      heroBullets: service.heroBullets(context),
      whyItWorksTitle: service.whyItWorksTitle(context),
      whyItWorks: service.whyItWorks(context),
      useCases: service.useCases(context),
      examplePrompt: service.examplePrompt,
      examplePromptHeading: service.examplePromptHeading,
      exampleOutput: service.exampleOutput,
      faq: service.faq({
        providerName: provider.name,
        serviceName: serviceDisplayName,
      }),
      cta: buildCta(agent.key, supportStatus),
      supportStatus,
    };
  }),
);

export const homepageVariants: LandingVariant[] = [...variants].sort((a, b) => {
  const scoreA = shuffleScore(`${a.agentKey}:${a.slug}`);
  const scoreB = shuffleScore(`${b.agentKey}:${b.slug}`);

  if (scoreA !== scoreB) {
    return scoreA - scoreB;
  }

  return `${a.agentKey}:${a.slug}`.localeCompare(`${b.agentKey}:${b.slug}`);
});

export { agents, installFlows, providers, serviceDefinitions };
