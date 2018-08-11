# -- Base images
# Pinned to specific versions, and updated by Renovate
FROM node:8.11.3-alpine@sha256:13f928a8b00ed6f10c1e3964da555e7324d327e2ec0c2202be8b72206625573c AS node
FROM buildkite/puppeteer:v1.6.1@sha256:127c5cec69dc7dca578bb8fc5e135f815ce86c641c8743728f181e58add32635 AS puppeteer

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
RUN  yarn install

# -- Test
# Same deps as development
FROM development as test

# -- Integration tests
# Has headless chrome and puppeteer, and adds in Mocha so we can run our tests
# directly inside it
FROM puppeteer AS integration-tests
RUN  npm i -g mocha@5
ENV  PATH="${PATH}:/node_modules/.bin"

# -- Default target
FROM production
