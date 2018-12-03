# -- Base images
# Pinned to specific versions, and updated by Renovate
FROM node:8.15.0-alpine@sha256:f30a55706c7336a648493b926128f56176e4500cfdc968764bfdb711716e0109 AS node
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
FROM     puppeteer AS integration-tests
COPY     --from=development /app /app
WORKDIR  /app
CMD      ["yarn", "run", "integration"]

# -- Default target
FROM production
