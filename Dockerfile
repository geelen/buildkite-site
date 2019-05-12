# -- Base images
# Pinned to specific versions, and updated by Renovate
FROM node:10.15.3-alpine@sha256:5f9cd51eaeeb2eaec4a9bcf92d18d8908f1d489534cabff04b5f4eafae877cee AS node
FROM buildkite/puppeteer:v1.15.0@sha256:0aeeef12cc7872a012f7d1be5d48bd7a208ef492792b094db8e6f1c5774538df AS puppeteer

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
