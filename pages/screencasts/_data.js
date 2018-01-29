const placeholderImage = require('../../assets/images/screencasts/placeholder.png');
const parallelismImage = require('../../assets/images/screencasts/parallelism-frame.png');
const elasticStackImage = require('../../assets/images/screencasts/elastic-stack-frame.png');
const stepTypesImage = require('../../assets/images/screencasts/step-types-frame.png');
const prflowImage = require('../../assets/images/screencasts/pr-flow-frame.png');

export default [
  {
    pathname: '/screencasts/pipeline-steps',
    title: 'Running in parallel',
    headTitle: 'Parallelism screencast',
    description: 'Have you ever wanted to run 400 test steps at the same time? Introducing the parallelism attribute, this screencast steps through setting up a pipeline to run a Rails test suite in parallel. ',
    duration: '90s',
    image: parallelismImage,
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
    title: 'Elastic CI Stack for AWS',
    headTitle: 'Elastic CI Stack for AWS screencast',
    description: 'TODO',
    duration: '74s',
    image: elasticStackImage,
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
    headTitle: 'Step Types for pipelines screencast',
    description: 'TODO',
    duration: '90s',
    image: stepTypesImage,
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
    headTitle: 'Pull Request workflow screencast',
    description: 'TODO',
    duration: '90s',
    image: prflowImage,
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
