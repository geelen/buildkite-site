const parallelismPoster     = require('../../assets/images/screencasts/parallelism-frame.poster.jpg');
const parallelismThumbail   = require('../../assets/images/screencasts/parallelism-frame.thumbnail.jpg');

const elasticStackPoster    = require('../../assets/images/screencasts/elastic-stack-frame.poster.jpg');
const elasticStackThumbnail = require('../../assets/images/screencasts/elastic-stack-frame.thumbnail.jpg');

const stepTypesPoster       = require('../../assets/images/screencasts/step-types-frame.poster.jpg');
const stepTypesThumbnail    = require('../../assets/images/screencasts/step-types-frame.thumbnail.jpg');

const prflowPoster          = require('../../assets/images/screencasts/pr-flow-frame.poster.jpg');
const prflowThumbnail       = require('../../assets/images/screencasts/pr-flow-frame.thumbnail.jpg');

export default [
  {
    pathname: '/screencasts/pipeline-steps',
    title: 'Running steps in parallel',
    headTitle: 'Parallelism screencast',
    description: 'Have you ever wanted to run 400 test steps at the same time? Introducing the parallelism attribute, this screencast steps through setting up a pipeline to run a Rails test suite in parallel. ',
    duration: '90s',
    images: { poster: parallelismPoster, thumbnail: parallelismThumbail },
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
    description: 'Interested in the Elastic Stack, but not sure it suits your needs? In this screencast we\'ll give you a short overview of the setup and operation of an Elastic CI Stack on AWS.',
    duration: '74s',
    images: { poster: elasticStackPoster, thumbnail: elasticStackThumbnail },
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
    title: 'Step types for pipelines',
    headTitle: 'Step types for pipelines screencast',
    description: 'Want to take a peek inside a production-ready pipeline? In this screencast we\'ll talk through the different step types, looking at an example based on an internal Buildkite pipeline.',
    duration: '102s',
    images: { poster: stepTypesPoster, thumbnail: stepTypesThumbnail },
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
    title: 'Pull request workflow',
    headTitle: 'Pull Request workflow screencast',
    description: 'Walk through an end-to-end workflow, from pushing a commit to merging a pull request. This screencast will show you what it\'s like when you connect Github and Buildkite.',
    duration: '99s',
    images: { poster: prflowPoster, thumbnail: prflowThumbnail },
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
