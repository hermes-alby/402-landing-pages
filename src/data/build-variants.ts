import { agents } from './agents';
import { installFlows } from './install-flows';
import { providers, providersByKey } from './providers';
import { serviceDefinitions } from './services/index';
import type { Cta, LandingVariant } from './types';

const installPath = (agentKey: string) => `${import.meta.env.BASE_URL}install/${agentKey}/`;
const comingSoonPath = (agentKey: string) => `${import.meta.env.BASE_URL}coming-soon/${agentKey}/`;

const supportedCta = (agentKey: string): Cta => ({
  title: 'Install the Alby Payments Skill',
  helper: 'Gives your agent access to useful services without sign-up, email, or subscription.',
  href: installPath(agentKey),
  buttonLabel: 'Install now',
});

const comingSoonCta = (agentKey: string): Cta => ({
  title: 'Install the Alby Payments Skill',
  helper: 'Gives your agent access to useful services without sign-up, email, or subscription.',
  href: comingSoonPath(agentKey),
  buttonLabel: 'Install now',
});

export const variants: LandingVariant[] = agents.flatMap((agent) =>
  serviceDefinitions.map((service) => {
    const provider = providersByKey[service.providerKey];
    const context = {
      agentName: agent.name,
      providerName: provider.name,
      serviceName: service.name,
      paymentLabel: service.paymentLabel,
    };

    return {
      agentKey: agent.key,
      agentName: agent.name,
      agentLogoSrc: agent.logoSrc,
      providerKey: provider.key,
      providerName: provider.name,
      serviceKey: service.key,
      serviceName: service.name,
      slug: service.key,
      endpointUrl: service.endpointUrl,
      resultLabel: service.resultLabel,
      category: service.category,
      priceLabel: service.priceLabel,
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
        serviceName: service.name,
      }),
      cta: provider.supportStatus === 'supported' ? supportedCta(agent.key) : comingSoonCta(agent.key),
      supportStatus: provider.supportStatus,
    };
  }),
);

export const providerSections = providers.map((provider) => ({
  key: provider.key,
  title: provider.sectionTitle,
  description: provider.sectionDescription,
  supportStatus: provider.supportStatus,
}));

export { agents, installFlows, providers, serviceDefinitions };
