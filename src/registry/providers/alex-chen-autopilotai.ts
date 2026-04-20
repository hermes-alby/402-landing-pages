import type { ProviderRegistryEntry } from '../types';

const provider = {
  key: 'alex-chen-autopilotai',
  name: "Alex Chen (AutoPilotAI)",
  websiteUrl: "https://skillscan.chitacloud.dev",
  protocols: ['L402'],
  discoverySources: ['402index.io'],
  reviewStatus: 'approved-for-trial',
  reviewSource: 'manual-intake',
  activationStatus: 'not-started',
  lastCheckedAt: '2026-04-20',
  summary: "Alex Chen (AutoPilotAI) looks credible enough for trial intake based on website, discovery, and service usefulness signals; the most promising first landing-page candidate is 'SkillScan - AI Agent Security Scanner'.",
  endpointCandidates: ["skillscan-ai-agent-security-scanner"],
  notes: [
    "402index snapshot on 2026-04-20: 1 indexed L402 services; top categories: ai; average reliability 85.0.",
    "Representative candidate endpoint: https://skillscan.chitacloud.dev/",
    "Main website candidate: https://skillscan.chitacloud.dev (title: SkillScan - AI Agent Skill Security Scanner)",
    "Source mix: satring\u00d71.",
    "402index health was recorded as telemetry only and was not used as the approval gate for this intake pass.",
    "Observed website/discovery signals: docs, pricing, contact.",
    "Representative service summary: Security scanner for AI agent skills and MCP tools. CRITICAL BUG FIXED March 4: now correctly fetches SKILL.md from ClawHub API instead of HTML pages - all scans now accurate. Scans for prompt injection, capability overreach, supply chain r\u2026",
  ],
} satisfies ProviderRegistryEntry;

export default provider;
