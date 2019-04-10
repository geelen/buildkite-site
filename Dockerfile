# -- Base images
# Pinned to specific versions, and updated by Renovate
FROM node:10.15.3-alpine@sha256:e622269573edaa6be7676d21ec87f9038cef11464df87d9d67425d6af29ee4f1 AS node
FROM buildkite/puppeteer:v1.14.0@sha256:3692502d2eb1c81e97414b0a6b2968f029f7ca0007f0ca95fe83fbfca9a1f4eb AS puppeteer

# -- Production environment
FROM    node AS production
ENV     NODE_ENV=production
EXPOSE  3000
WORKDIR /app
COPY    package.json yarn.lock .yarnclean /app/
RUN     apk --no-cache --virtual build-dependencies add python make g++ && \
        yarn install --frozen-lockfile --silent && \
        apk del build-dependencies
COPY    . /app
RUN     yarn run build
CMD     ["yarn", "run", "start"]

# -- Development
# We can just override NODE_ENV and re-run install to get the additional dev
# deps.
FROM production as development
ENV  NODE_ENV=development
RUN  yarn install --frozen-lockfile --silent

# -- Test
# Same deps as development
FROM development as test

# -- Integration tests
FROM     puppeteer AS integration-tests
COPY     --from=development /app /app
WORKDIR  /app
CMD      ["yarn", "run", "integration"]

# -- Default target
FROM production
