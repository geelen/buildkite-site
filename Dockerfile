# -- Base images
# Pinned to specific versions, and updated by Renovate
FROM node:8.12.0-alpine@sha256:d75742c5fd41261113ed4706f961a21238db84648c825a5126ada373c361f46e AS node
FROM buildkite/puppeteer:v1.8.0@sha256:e1702ed3a5a57564aefb5550ffa9dd5a45c5e38773ae932c5a260d9c85e0b4a0 AS puppeteer

# -- Production environment
FROM    node AS production
ENV     NODE_ENV=production
EXPOSE  3000
WORKDIR /app
COPY    package.json yarn.lock .yarnclean /app/
COPY    npm_patches /app/npm_patches
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
FROM     puppeteer AS integration-tests
RUN      npm i -g mocha@5
ENV      PATH="${PATH}:/node_modules/.bin"
WORKDIR  /tests
CMD      ["mocha", "--recursive", "--no-timeouts", "."]

# -- Default target
FROM production
