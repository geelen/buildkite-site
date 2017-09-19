# The Buildkite Site

The Buildkite public website, built with [Next.js](https://github.com/zeit/next.js/) 🐶

## Get started

```shell
yarn install && yarn start
```

Or if you prefer Docker:

```shell
docker-compose up
```

## Downloading the fonts

If you have access to the S3 bucket:

```shell
aws-vault exec buildkite-dev -- yarn run download-fonts
```

## Testing in development

```shell
yarn test
```

## Building for production

```shell
yarn build && NODE_ENV=production yarn start
```
