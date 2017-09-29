# For local development

FROM    node:8.6.0
ENV     NODE_ENV=development
EXPOSE  3000
WORKDIR /app
COPY    yarn.lock package.json /app/
RUN     yarn install
COPY    . /app
CMD     ["yarn", "run", "start"]