import { createServiceDefinition } from '../service-factory';
import { buildCostDetail, createSatsFixedPrice } from '../pricing';
import type { ServiceDefinition } from '../types';

const pricing = createSatsFixedPrice(10, 'API fee', 'plus the bounty amount you fund');

const service = createServiceDefinition({
  key: 'ganamos-create-job',
  providerKey: 'ganamos',
  name: 'Create Job',
  endpointUrl: 'https://www.ganamos.earth/api/posts',
  resultLabel: 'Post a Bitcoin-funded bounty job for an agent or human to complete',
  category: 'Marketplace automation',
  supportStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  pricing,
  exampleOutput: {
    kind: 'table',
    title: 'What the create-job flow returns',
    caption:
      'Ganamos documents a structured job-posting API. This is enough to explain the workflow and its user value before we run a paid posting test.',
    columns: ['Returned field', 'What it means', 'Why it matters'],
    rows: [
      ['post_id', 'Unique identifier for the bounty post', 'Lets the agent track the job lifecycle after creation'],
      ['status URL', 'Polling endpoint for the newly created job', 'Makes follow-up automation possible without manual checking'],
      ['funded reward + fee', 'The bounty amount plus the 10 sat API fee', 'Sets a clear economic model for agent-created work'],
    ],
    details: [
      'Provider: Ganamos',
      'Service: Create Job',
      'Endpoint: /api/posts',
      buildCostDetail(pricing),
      'Checked: site, docs, and API overview reviewed on 2026-04-20',
    ],
    briefingTitle: 'Why this can be a landing page before paid testing',
    briefingParagraphs: [
      'The public docs and API overview already show a concrete workflow: create a bounty, track it, and approve a result. That is enough to publish an honest first page.',
      'The page stays on the coming-soon path until we confirm a real paid create-job request and see how the funding flow behaves in practice.',
    ],
  },
  examplePrompt:
    'Create a Bitcoin-funded bounty job asking for a one-page summary of the latest Lightning wallet releases, with a 5,000 sat reward, using Ganamos with the Alby payments skill.',
  variantTitle: ({ agentName, providerName }) => `Create Bitcoin bounty jobs with ${agentName} using ${providerName}`,
  variantDescription: ({ agentName, providerName, priceLabel }) =>
    `Enable ${agentName} to post Bitcoin-funded bounty jobs through ${providerName} for ${priceLabel} instead of coordinating task funding manually in chat.`,
  heroSummary: ({ agentName, providerName, serviceName }) =>
    `Give ${agentName} access to ${providerName} ${serviceName} so it can turn a task into a funded bounty workflow with a clear API fee, a persistent job record, and follow-up status polling.`,
  heroBulletHighlights: () => [
    'Useful when an agent needs to turn a task request into a funded marketplace workflow.',
    'A concrete and memorable Bitcoin-native use case even before supported-now status is earned.',
  ],
  whyItWorks: ({ agentName, providerName }) => [
    `${agentName} can do more than recommend work — it can prepare a funded job flow that another human or agent can actually pick up.`,
    `${providerName} exposes a simple marketplace API, which makes it much easier to explain than a vague agent-economy concept page.`,
    'That creates useful public content now while leaving the real funded posting test for a later validation pass.',
  ],
  useCases: () => [
    'Post a funded research or writing bounty directly from an agent workflow',
    'Spin up small paid tasks without negotiating the funding mechanics manually',
    'Track a bounty job lifecycle from creation through approval in one API-driven flow',
  ],
  faqResultDescription: ({ providerName, serviceName }) =>
    `${providerName} ${serviceName} is designed to create a funded bounty job and return the identifiers and follow-up URLs an agent needs to keep tracking the task after creation.`,
}) satisfies ServiceDefinition;

export default service;
