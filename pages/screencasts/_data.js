const placeholderImage = require('../../assets/images/screencasts/placeholder.png');

export default [
  {
    pathname: '/screencasts/pipeline-steps',
    title: 'Parallelism',
    headTitle: 'Running in parallel with Buildkite',
    description: 'TODO',
    duration: '90s',
    image: placeholderImage,
    videos: {
      webm: "https://d3lj8s78qytm30.cloudfront.net/parallelism.webm",
      mp4: "https://d3lj8s78qytm30.cloudfront.net/parallelism.mp4",
    },
    relatedDocumentation: [
      { title: 'Example code on Github', url: 'https://github.com/buildkite/rails-docker-parallel-example/tree/parallelism-demo' },
      { title: 'Parallel builds', url: '/docs/builds/parallel-builds' },
      { title: 'Containerised builds with Docker', url: '/docs/builds/docker-containerized-builds' },
    ],
  },
  {
    pathname: '/screencasts/elastic-ci-stack',
    title: 'Elastic CI Stack',
    headTitle: 'The Buildkite Elastic CI Stack in Action',
    description: 'TODO',
    duration: '74s',
    image: placeholderImage,
    videos: {
      webm: "https://d3lj8s78qytm30.cloudfront.net/elastic-ci-stack.mp4",
      mp4: "https://d3lj8s78qytm30.cloudfront.net/elastic-ci-stack.mp4",
    },
    relatedDocumentation: [
      { title: 'Yet Another Doc', url: '/docs/yet-another-doc' },
      { title: 'Some Doc', url: '/docs/some-doc' },
    ],
  },
  {
    pathname: '/screencasts/step-types',
    title: 'Step Types',
    headTitle: 'Step types in Buildkite pipelines',
    description: 'TODO',
    duration: '90s',
    image: placeholderImage,
    videos: {
      webm: "https://d3lj8s78qytm30.cloudfront.net/parallelism.webm",
      mp4: "https://d3lj8s78qytm30.cloudfront.net/parallelism.mp4",
    },
    relatedDocumentation: [
      { title: 'Another Doc', url: '/docs/another-doc' },
      { title: 'Yet Another Doc', url: '/docs/yet-another-doc' },
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
      { title: 'Another Doc', url: '/docs/another-doc' },
      { title: 'A Fourth Even More Enticing Doc', url: '/docs/a-fourth-even-more-enticing-doc' },
      { title: 'Yet Another Doc', url: '/docs/yet-another-doc' },
      { title: 'Some Doc', url: '/docs/some-doc' },
    ],
  }
]