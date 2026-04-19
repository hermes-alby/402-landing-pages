export type ServiceCopyFamily =
  | 'generic'
  | 'image-generation'
  | 'live-search'
  | 'podcast-search'
  | 'research-intelligence';

export const defaultPaymentLabel = 'No sign-up. No email. No subscription. Pay per use. No human needed.';

const examplePromptHeadingByFamily: Record<ServiceCopyFamily, string> = {
  generic: 'Example prompt',
  'image-generation': 'Example prompt',
  'live-search': 'Example prompt',
  'podcast-search': 'Example prompt',
  'research-intelligence': 'Example prompt',
};

export const defaultExamplePromptHeading = (copyFamily: ServiceCopyFamily = 'generic') =>
  examplePromptHeadingByFamily[copyFamily];

export const defaultWhyItWorksTitle = ({ agentName }: { agentName: string }) => `Why this works for ${agentName}`;
