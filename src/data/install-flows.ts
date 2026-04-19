import type { InstallFlow } from './types';

const customSkillInstallPrompt = 'Install this skill as a custom skill: <https://getalby.com/payments/SKILL.md>';
const npmSkillInstallCommand = 'npx skills add getAlby/payments-skill';

const promptInstallFlow = (prompt: string): InstallFlow => ({
  kind: 'prompt',
  prompt,
});

const commandInstallFlow = (command: string): InstallFlow => ({
  kind: 'command',
  command,
});

export const installFlows: Record<string, InstallFlow> = {
  openclaw: promptInstallFlow(customSkillInstallPrompt),
  claude: commandInstallFlow(npmSkillInstallCommand),
  codex: commandInstallFlow(npmSkillInstallCommand),
  hermes: promptInstallFlow(customSkillInstallPrompt),
};
