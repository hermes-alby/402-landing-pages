import type { Agent } from './types';

export const agents: Agent[] = [
  { key: 'openclaw', name: 'OpenClaw', logoSrc: `${import.meta.env.BASE_URL}agents/openclaw.svg` },
  { key: 'claude', name: 'Claude', logoSrc: `${import.meta.env.BASE_URL}agents/claude.svg` },
  { key: 'codex', name: 'Codex', logoSrc: `${import.meta.env.BASE_URL}agents/codex.svg` },
  { key: 'hermes', name: 'Hermes', logoSrc: `${import.meta.env.BASE_URL}agents/hermes.svg` },
];

export const agentsByKey = Object.fromEntries(agents.map((agent) => [agent.key, agent])) as Record<string, Agent>;
