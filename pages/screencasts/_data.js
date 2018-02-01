import Br from 'components/Br'

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
    pathname: '/screencasts/parallel-testing',
    title: 'Parallel Testing',
    description: <span>An introduction to Buildkite’s parallelism attribute <Br maxWidth='40em'/> and using it to run 15 hours of tests in under 5 minutes.</span>,
    duration: '90s',
    images: { poster: parallelismPoster, thumbnail: parallelismThumbail },
    videos: {
      webm: "https://d3lj8s78qytm30.cloudfront.net/parallel-testing.webm",
      mp4: "https://d3lj8s78qytm30.cloudfront.net/parallel-testing.mp4",
    },
    relatedDocumentation: [
      { title: 'Parallel Builds', url: '/docs/builds/parallel-builds' },
      { title: 'Buildkite Agent', url: '/docs/agent' },
      { title: 'Containerised Builds with Docker', url: '/docs/builds/docker-containerized-builds' },
    ],
    exampleCode: 'https://github.com/buildkite/rails-docker-parallel-example/tree/parallelism-demo'
  },
  {
    pathname: '/screencasts/elastic-ci-stack-for-aws',
    title: 'Elastic CI Stack for AWS',
    description: 'Interested in the Elastic Stack, but not sure it suits your needs? In this screencast we\'ll give you a short overview of the setup and operation of an Elastic CI Stack on AWS.',
    duration: '74s',
    images: { poster: elasticStackPoster, thumbnail: elasticStackThumbnail },
    videos: {
      webm: "https://d3lj8s78qytm30.cloudfront.net/elastic-ci-stack.webm",
      mp4: "https://d3lj8s78qytm30.cloudfront.net/elastic-ci-stack.mp4",
    },
    relatedDocumentation: [
      { title: 'Elastic stack quickstart', url: '/docs/quickstart/elastic-ci-stack-aws' },
      { title: 'complete documentation on Github', url: 'https://github.com/buildkite/elastic-ci-stack-for-aws' },
    ],
  },
  {
    pathname: '/screencasts/pipeline-step-types',
    title: 'Pipeline Step Types',
    description: 'Want to take a peek inside a production-ready pipeline? In this screencast we\'ll talk through the different step types, looking at an example based on an internal Buildkite pipeline.',
    duration: '102s',
    images: { poster: stepTypesPoster, thumbnail: stepTypesThumbnail },
    videos: {
      webm: "https://d3lj8s78qytm30.cloudfront.net/step-types.webm",
      mp4: "https://d3lj8s78qytm30.cloudfront.net/step-types.mp4",
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
    pathname: '/screencasts/github-pr-workflow',
    title: 'Github Pull Request Workflow',
    description: 'Walk through an end-to-end workflow, from pushing a commit to merging a pull request. This screencast will show you what it\'s like when you connect Github and Buildkite.',
    duration: '99s',
    images: { poster: prflowPoster, thumbnail: prflowThumbnail },
    videos: {
      webm: "https://d3lj8s78qytm30.cloudfront.net/github-pr-workflow.webm",
      mp4: "https://d3lj8s78qytm30.cloudfront.net/github-pr-workflow.mp4",
    },
   relatedDocumentation: [
      { title: 'Getting started', url: '/docs/quickstart/getting-started' },
      { title: 'Github Enterprise setup', url: '/docs/tutorials/github-enterprise' },
      { title: 'using a private repo', url: '/docs/quickstart/getting-started#using-a-private-repository' },
    ],
  }
]
