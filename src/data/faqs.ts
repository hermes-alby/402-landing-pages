import type { FaqItem } from './types';

export const buildGenericLandingFaq = ({
  providerName,
  resultDescription,
}: {
  providerName: string;
  resultDescription: string;
}): FaqItem[] => [
  {
    question: 'What is the Alby Payments Skill?',
    answer:
      'It is the install flow this page points to so your agent can unlock useful paid services without asking you to create separate accounts first.',
  },
  {
    question: `Do I need a ${providerName} account or subscription?`,
    answer:
      'The intended flow here is pay on demand. The point is to let your agent use the service when needed instead of stopping for account creation first.',
  },
  {
    question: 'Why does “no human needed” matter?',
    answer:
      'Agents often get stuck when they need a human to create an account, pass a captcha, or manage another subscription. This flow is meant to remove that bottleneck.',
  },
  {
    question: 'What kind of results can this service return?',
    answer: resultDescription,
  },
  {
    question: 'What is 402?',
    answer:
      '402 is the payment pattern behind this kind of API access. You do not need to understand the protocol details to use the page — the important point is that the agent can pay and continue the task.',
  },
];
