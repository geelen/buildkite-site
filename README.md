# The Buildkite Site

The Buildkite public website, built with [Next.js](https://github.com/zeit/next.js/) 🐶

## Get started

```shell
yarn install && yarn start
# Or with docker...
# docker-compose up
```

## Testing in development

```shell
yarn test
# Or with docker...
# docker-compose run site yarn test
```

## Downloading the fonts

If you have access to the S3 bucket:

```shell
aws-vault exec buildkite-dev -- ./scripts/download-fonts
```

## Building for production

```shell
NODE_ENV=production yarn build && NODE_ENV=production yarn start
# Or with docker...
# docker-compose -f docker-compose.prod.yml up
```

## Running the integration tests

```shell
docker-compose -f docker-compose.integration-tests.yml run tests
```

To run on the live site:

```shell
env TEST_HOST=https://buildkite.com docker-compose -f docker-compose.integration-tests.yml run tests
```