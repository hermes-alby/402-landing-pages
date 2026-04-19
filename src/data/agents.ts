import type { Agent } from './types';

export const agents: Agent[] = [
  { key: 'openclaw', name: 'OpenClaw', logoSrc: `${import.meta.env.BASE_URL}agents/openclaw.png` },
  { key: 'claude', name: 'Claude', logoSrc: `${import.meta.env.BASE_URL}agents/claude.png` },
  { key: 'codex', name: 'Codex', logoSrc: `${import.meta.env.BASE_URL}agents/codex.png` },
  { key: 'hermes', name: 'Hermes', logoSrc: `${import.meta.env.BASE_URL}agents/hermes.png` },
];

export const agentsByKey = Object.fromEntries(agents.map((agent) => [agent.key, agent])) as Record<string, Agent>;
