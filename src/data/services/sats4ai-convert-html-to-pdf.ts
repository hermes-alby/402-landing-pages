import { createServiceDefinition } from '../service-factory';
import { buildCostDetail, createSatsFixedPrice } from '../pricing';
import type { ServiceDefinition } from '../types';

const pricing = createSatsFixedPrice(50, 'per PDF conversion');

const service = createServiceDefinition({
  key: 'sats4ai-convert-html-to-pdf',
  providerKey: 'sats4ai',
  name: 'convert-html-to-pdf',
  endpointUrl: 'https://sats4ai.com/api/l402/convert-html-to-pdf',
  resultLabel: 'Turn HTML or Markdown into PDFs with a paid endpoint instead of a separate export toolchain',
  category: 'Document conversion',
  supportStatus: 'coming-soon',
  lastCheckedAt: '2026-04-19',
  pricing,
  exampleOutput: {
    kind: 'table',
    title: 'What this endpoint is built for',
    caption:
      'Sats4AI exposes convert-html-to-pdf as a paid utility endpoint for agents that need clean PDF export from HTML or Markdown content.',
    columns: ['Capability', 'Details'],
    rows: [
      ['Accepted input', 'HTML content or Markdown content in a single JSON field'],
      ['Format selector', 'Choose html or markdown explicitly'],
      ['Typical result', 'A generated PDF suitable for delivery or archiving'],
    ],
    details: [
      'Provider: Sats4AI',
      'Service: Convert HTML to PDF',
      'Endpoint: /api/l402/convert-html-to-pdf',
      buildCostDetail(pricing),
      'Checked: live schema confirmed on 2026-04-19',
    ],
    briefingTitle: 'Why this matters for agents',
    briefingParagraphs: [
      'An agent often already has structured HTML or Markdown ready to go, but still needs a PDF export step before handing work off to people or other systems.',
      'This landing page stays on the coming-soon path until we capture one real paid conversion run.',
    ],
  },
  examplePromptHeading: 'Example prompt',
  examplePrompt:
    'Convert board-meeting-2026-04-20.md into a shareable PDF using Sats4AI with the Alby payments skill.',
  variantTitle: ({ agentName, providerName }) => `Convert HTML or Markdown to PDF with ${agentName} using ${providerName}`,
  variantDescription: ({ agentName, providerName, priceLabel }) =>
    `Enable ${agentName} to turn HTML or Markdown into shareable PDFs with ${providerName} for ${priceLabel} instead of hand-building export workflows or paid SaaS seats.`,
  heroSummary: ({ agentName, providerName, serviceName }) =>
    `Give ${agentName} access to ${providerName} ${serviceName} so it can produce PDFs directly from structured content without bouncing through a browser export flow.`,
  heroBulletHighlights: () => [
    'Works for both HTML and Markdown source content.',
    'Useful when an agent needs a final deliverable, not just raw text.',
  ],
  whyItWorks: ({ agentName, providerName }) => [
    `${agentName} can generate reports or briefs in text first, then turn them into PDFs in the same flow instead of stopping for a manual export step.`,
    `${providerName} keeps the request shape simple enough that PDF generation can become a cheap utility action inside broader automations.`,
    'That makes handoff to email, archives, and human review much easier than shipping only raw Markdown or HTML.',
  ],
  useCases: () => [
    'Export generated reports or meeting briefs as PDFs',
    'Create shareable customer-facing summaries from Markdown output',
    'Archive agent-generated content in a PDF-friendly format',
  ],
  faqResultDescription: () =>
    'Sats4AI Convert HTML to PDF is designed to return a generated PDF from HTML or Markdown input so agent workflows can end with a document, not just source markup.',
}) satisfies ServiceDefinition;

export default service;
