# For local development

FROM    node:8.4.0-alpine
ENV     NODE_ENV=development
EXPOSE  3000
WORKDIR /app
COPY    package.json yarn.lock .yarnclean /app/
RUN     yarn install --frozen-lockfile --silent
COPY    . /app
CMD     ["yarn", "run", "start"]
