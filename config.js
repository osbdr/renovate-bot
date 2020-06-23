module.exports = {
  hostRules: [
    {
      hostType: 'docker',
      hostName: 'index.docker.io',
      username: '',
      password: '',
    }
  ],
  platform: 'github',
  assignees: ['j0nm1'],
  baseBranches: ['dev'],
  labels: ['renovate'],
  rebaseWhen: 'auto',
  repositories: [
    "j0nm1/renovate-bot"
  ],
  onboarding: true,
  onboardingConfig: {
    extends: ['config:base'],
    automerge: true,
    automergeType: 'pr'
  }
};
