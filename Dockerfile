# -- Base images
# Pinned to specific versions, and updated by Renovate
FROM node:8.11.4-alpine@sha256:cf4ea9156ef964eaf0c4df65da3f4fed7358dbe31149ca105c7684a5858195d8 AS node
FROM buildkite/puppeteer:v1.7.0@sha256:7a1cfb60cbbbe2c5e03dd1f89aebbc4d05f6531df6792214f009c168b7594be9 AS puppeteer

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
