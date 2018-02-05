import Br from 'components/Br'

const parallelismPoster = require('../../assets/images/screencasts/parallelism-frame.poster.jpg')
const parallelismThumbail = require('../../assets/images/screencasts/parallelism-frame.thumbnail.jpg')

const elasticStackPoster = require('../../assets/images/screencasts/elastic-stack-frame.poster.jpg')
const elasticStackThumbnail = require('../../assets/images/screencasts/elastic-stack-frame.thumbnail.jpg')

const stepTypesPoster = require('../../assets/images/screencasts/step-types-frame.poster.jpg')
const stepTypesThumbnail = require('../../assets/images/screencasts/step-types-frame.thumbnail.jpg')

const prflowPoster = require('../../assets/images/screencasts/pr-flow-frame.poster.jpg')
const prflowThumbnail = require('../../assets/images/screencasts/pr-flow-frame.thumbnail.jpg')

export default [
  {
    pathname: '/screencasts/parallel-testing',
    title: 'Parallel Testing',
    description: (
      <React.Fragment>
        An introduction to Buildkite’s parallelism attribute, <Br maxWidth="40em" />
        using it to run 15 hours of tests in under 5 minutes.
      </React.Fragment>
    ),
    duration: '90s',
    images: { poster: parallelismPoster, thumbnail: parallelismThumbail },
    videos: {
      webm: "https://d3lj8s78qytm30.cloudfront.net/parallel-testing.webm",
      mp4: "https://d3lj8s78qytm30.cloudfront.net/parallel-testing.mp4"
    },
    relatedDocumentation: [
      { title: 'Parallel Builds', url: '/docs/builds/parallel-builds' },
      { title: 'Buildkite Agent', url: '/docs/agent' },
      { title: 'Containerised Builds with Docker', url: '/docs/builds/docker-containerized-builds' }
    ],
    exampleCode: 'https://github.com/buildkite/rails-docker-parallel-example/tree/parallelism-demo'
  },
  {
    pathname: '/screencasts/elastic-ci-stack-for-aws',
    title: 'Elastic CI Stack for AWS',
    description: (
      <React.Fragment>
        Running an autoscaling build cluster in your own<Br maxWidth="40em" /> AWS account, using the Elastic CI Stack for AWS.
      </React.Fragment>
    ),
    duration: '74s',
    images: { poster: elasticStackPoster, thumbnail: elasticStackThumbnail },
    videos: {
      webm: "https://d3lj8s78qytm30.cloudfront.net/elastic-ci-stack.webm",
      mp4: "https://d3lj8s78qytm30.cloudfront.net/elastic-ci-stack.mp4"
    },
    relatedDocumentation: [
      { title: 'Elastic Stack for AWS Quickstart', url: '/docs/quickstart/elastic-ci-stack-aws' }
    ],
    exampleCode: 'https://github.com/buildkite/elastic-ci-stack-for-aws'
  },
  {
    pathname: '/screencasts/pipeline-step-types',
    title: 'Pipeline Step Types',
    description: (
      <React.Fragment>
        A look at all the different step types you<Br maxWidth="40em" /> can use in your Buildkite pipelines.
      </React.Fragment>
    ),
    duration: '102s',
    images: { poster: stepTypesPoster, thumbnail: stepTypesThumbnail },
    videos: {
      webm: "https://d3lj8s78qytm30.cloudfront.net/step-types.webm",
      mp4: "https://d3lj8s78qytm30.cloudfront.net/step-types.mp4"
    },
    relatedDocumentation: [
      { title: 'Defining Your Pipeline Steps', url: '/docs/pipelines/defining-steps' },
      { title: 'Command Steps', url: '/docs/pipelines/command-step' },
      { title: 'Wait Steps', url: '/docs/pipelines/wait-step' },
      { title: 'Block Steps', url: '/docs/pipelines/block-step' },
      { title: 'Trigger Steps', url: '/docs/pipelines/trigger-step' }
    ],
    exampleCode: 'https://github.com/buildkite/screencast-examples/'
  },
  {
    pathname: '/screencasts/github-pr-workflow',
    title: 'GitHub Pull Request Workflow',
    description: (
      <React.Fragment>
        A look at testing a GitHub pull request and merge,<Br maxWidth="40em" /> and other ways to use GitHub with Buildkite.
      </React.Fragment>
    ),
    duration: '99s',
    images: { poster: prflowPoster, thumbnail: prflowThumbnail },
    videos: {
      webm: "https://d3lj8s78qytm30.cloudfront.net/github-pr-workflow.webm",
      mp4: "https://d3lj8s78qytm30.cloudfront.net/github-pr-workflow.mp4"
    },
    relatedDocumentation: [
      { title: 'Getting Started', url: '/docs/quickstart/getting-started' }
    ],
    exampleCode: 'https://github.com/buildkite/screencast-examples/'
  }
]
