import { buildGenericLandingFaq } from './faqs';
import {
  defaultExamplePromptHeading,
  defaultPaymentLabel,
  defaultWhyItWorksTitle,
  type ServiceCopyFamily,
} from './service-category-defaults';
import type { ServiceDefinition } from './types';

type VariantContext = Parameters<ServiceDefinition['variantTitle']>[0];
type HeroBulletContext = Parameters<ServiceDefinition['heroBullets']>[0];
type FaqContext = Parameters<ServiceDefinition['faq']>[0];

type CreateServiceDefinitionInput = Omit<ServiceDefinition, 'paymentLabel' | 'heroBullets' | 'whyItWorksTitle' | 'faq'> & {
  copyFamily?: ServiceCopyFamily;
  paymentLabel?: string;
  heroBulletHighlights: (context: HeroBulletContext) => string[];
  whyItWorksTitle?: ServiceDefinition['whyItWorksTitle'];
  faqResultDescription?: string | ((context: FaqContext) => string);
  faq?: ServiceDefinition['faq'];
};

const getFaqResultDescription = (
  faqResultDescription: CreateServiceDefinitionInput['faqResultDescription'],
  context: FaqContext,
) => {
  if (typeof faqResultDescription === 'function') {
    return faqResultDescription(context);
  }

  return faqResultDescription ?? `${context.providerName} ${context.serviceName} returns useful paid results on demand.`;
};

export const createServiceDefinition = ({
  copyFamily = 'generic',
  paymentLabel = defaultPaymentLabel,
  heroBulletHighlights,
  whyItWorksTitle = defaultWhyItWorksTitle,
  faqResultDescription,
  faq,
  examplePrompt,
  examplePromptHeading,
  ...service
}: CreateServiceDefinitionInput): ServiceDefinition => ({
  ...service,
  paymentLabel,
  examplePrompt,
  examplePromptHeading:
    examplePrompt === undefined ? examplePromptHeading : (examplePromptHeading ?? defaultExamplePromptHeading(copyFamily)),
  heroBullets: (context) => [context.paymentLabel, ...heroBulletHighlights(context)],
  whyItWorksTitle,
  faq:
    faq ??
    ((context) =>
      buildGenericLandingFaq({
        providerName: context.providerName,
        resultDescription: getFaqResultDescription(faqResultDescription, context),
      })),
});

export const buildAgentProviderServiceLabel = ({
  agentName,
  providerName,
  serviceName,
}: VariantContext) => `${agentName} using ${providerName} ${serviceName}`;
