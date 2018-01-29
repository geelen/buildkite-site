const placeholderImage = require('../../assets/images/screencasts/placeholder.png');

export default [
  {
    pathname: '/screencasts/pipeline-steps',
    title: 'Running in parallel',
    headTitle: 'Parallelism screencast',
    description: 'TODO',
    duration: '90s',
    image: placeholderImage,
    videos: {
      webm: "https://d3lj8s78qytm30.cloudfront.net/parallelism.webm",
      mp4: "https://d3lj8s78qytm30.cloudfront.net/parallelism.mp4",
    },
    relatedDocumentation: [
      { title: 'Example code on Github', url: 'https://github.com/buildkite/rails-docker-parallel-example/tree/parallelism-demo' },
      { title: 'parallel builds', url: '/docs/builds/parallel-builds' },
      { title: 'the buildkite agent', url: '/docs/agent' },
      { title: 'containerised builds with Docker', url: '/docs/builds/docker-containerized-builds' },
    ],
  },
  {
    pathname: '/screencasts/elastic-ci-stack',
    title: 'Elastic CI Stack for AWS in Action',
    headTitle: 'Elastic CI Stack for AWS',
    description: 'TODO',
    duration: '74s',
    image: placeholderImage,
    videos: {
      webm: "https://d3lj8s78qytm30.cloudfront.net/elastic-ci-stack.mp4",
      mp4: "https://d3lj8s78qytm30.cloudfront.net/elastic-ci-stack.mp4",
    },
    relatedDocumentation: [
      { title: 'Elastic stack quickstart', url: '/docs/quickstart/elastic-ci-stack-aws' },
      { title: 'complete documentation on Github', url: 'https://github.com/buildkite/elastic-ci-stack-for-aws' },
    ],
  },
  {
    pathname: '/screencasts/step-types',
    title: 'Step Types for pipelines',
    headTitle: 'Step Types for pipelines',
    description: 'TODO',
    duration: '90s',
    image: placeholderImage,
    videos: {
      webm: "https://d3lj8s78qytm30.cloudfront.net/parallelism.webm",
      mp4: "https://d3lj8s78qytm30.cloudfront.net/parallelism.mp4",
    },
    relatedDocumentation: [
      { title: 'Defining your pipeline steps', url: '/docs/pipelines/defining-steps' },
      { title: 'command steps', url: '/docs/pipelines/command-step' },
      { title: 'wait steps', url: '/docs/pipelines/wait-step' },
      { title: 'block steps', url: '/docs/pipelines/block-step' },
      { title: 'trigger steps', url: '/docs/pipelines/trigger-step' },
    ],
  },
  {
    pathname: '/screencasts/pr-flow',
    title: 'Pull Request Workflow',
    headTitle: 'A pull request workflow with Github and Buildkite',
    description: 'TODO',
    duration: '90s',
    image: placeholderImage,
    videos: {
      webm: "https://d3lj8s78qytm30.cloudfront.net/elastic-ci-stack.mp4",
      mp4: "https://d3lj8s78qytm30.cloudfront.net/elastic-ci-stack.mp4",
    },
   relatedDocumentation: [
      { title: 'Getting started', url: '/docs/quickstart/getting-started' },
      { title: 'Github Enterprise setup', url: '/docs/tutorials/github-enterprise' },
      { title: 'using a private repo', url: '/docs/quickstart/getting-started#using-a-private-repository' },
    ],
  }
]
