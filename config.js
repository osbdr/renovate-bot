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
  baseBranches: ['develop'],
  labels: ['renovate'],
  logLevel: 'debug',
  repositories: [
    "osbdr/pipeline-nodejs-demo",
    "osbdr/pipeline-python-demo",
    "osbdr/pipeline-django-demo"
  ],
  onboarding: true,
  onboardingConfig: {
    extends: ['config:base'],
    automerge: true,
    automergeType: 'pr'
  }
};
