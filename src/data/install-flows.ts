import type { InstallFlow } from './types';

export const installFlows: Record<string, InstallFlow> = {
  openclaw: {
    kind: 'prompt',
    prompt: 'Install this skill as a custom skill: <https://getalby.com/payments/SKILL.md>',
  },
  claude: {
    kind: 'command',
    command: 'npx skills add getAlby/payments-skill',
  },
  codex: {
    kind: 'command',
    command: 'npx skills add getAlby/payments-skill',
  },
  hermes: {
    kind: 'prompt',
    prompt: 'Install this skill as a custom skill: <https://getalby.com/payments/SKILL.md>',
  },
};
