# For local development

FROM    node:8.9.4-alpine@sha256:14b627a91c92566d489d9d9073e465563be0e0c598c9537aa32e871a812018f5
ENV     NODE_ENV=development
EXPOSE  3000
WORKDIR /app
COPY    package.json yarn.lock .yarnclean /app/
RUN     apk --no-cache --virtual build-dependencies add python make g++ && \
        yarn install --frozen-lockfile --silent && \
        apk del build-dependencies
COPY    . /app
CMD     ["yarn", "run", "start"]
