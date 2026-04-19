export type ServiceCopyFamily =
  | 'generic'
  | 'image-generation'
  | 'live-search'
  | 'podcast-search'
  | 'research-intelligence';

export const defaultPaymentLabel = 'No sign-up. No email. No subscription. Pay per use. No human needed.';

export const defaultExamplePromptHeading = () => 'Example prompt';

export const defaultWhyItWorksTitle = ({ agentName }: { agentName: string }) => `Why this works for ${agentName}`;
