import type { InstallFlow } from './types';

export const installFlows: Record<string, InstallFlow> = {
  openclaw: {
    kind: 'url',
    url: 'https://getalby.com/cli/SKILL.md',
    helperText: 'Install this skill as a custom skill:',
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
    kind: 'url',
    url: 'https://getalby.com/cli/SKILL.md',
    helperText: 'Install this skill as a custom skill:',
  },
};
