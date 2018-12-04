# -- Base images
# Pinned to specific versions, and updated by Renovate
FROM node:8.14.0-alpine@sha256:4a9c7876372e427ca7dcdca6cd6704dc70c81a13600c70ef860982f5a1dc653b AS node
FROM buildkite/puppeteer:v1.11.0@sha256:fca4a62124e2d6804f635c9fa211eb8846067c590961103c180465ed43e4b40e AS puppeteer

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
FROM     puppeteer AS integration-tests
RUN      npm i -g mocha@5
ENV      PATH="${PATH}:/node_modules/.bin"
WORKDIR  /tests
CMD      ["mocha", "--recursive", "--no-timeouts", "."]

# -- Default target
FROM production
