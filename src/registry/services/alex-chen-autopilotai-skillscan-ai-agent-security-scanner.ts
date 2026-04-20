import type { ServiceRegistryEntry } from '../types';

const service = {
  key: 'alex-chen-autopilotai-skillscan-ai-agent-security-scanner',
  providerKey: 'alex-chen-autopilotai',
  name: "SkillScan - AI Agent Security Scanner",
  endpointUrl: "https://skillscan.chitacloud.dev/",
  category: "Ai / Ml",
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  landingPageStatus: 'coming-soon',
  lastCheckedAt: '2026-04-20',
  summary: "Representative Alex Chen (AutoPilotAI) endpoint added from 402index for service-level review before any landing page is published.",
  notes: [
    "Discovered via 402index on 2026-04-20 and selected as the most promising representative endpoint for provider 'Alex Chen (AutoPilotAI)'.",
    "Endpoint URL: https://skillscan.chitacloud.dev/",
    "No direct schema check or paid activation test has been recorded yet.",
    "402index health was treated as informational only during this intake pass.",
    "Directory description: Security scanner for AI agent skills and MCP tools. CRITICAL BUG FIXED March 4: now correctly fetches SKILL.md from ClawHub API instead of HTML pages - all scans now accurate. Scans for prompt injection, capability overreach, supply chain r\u2026",
  ],
} satisfies ServiceRegistryEntry;

export default service;
