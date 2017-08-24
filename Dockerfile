FROM node:7

EXPOSE 3000

WORKDIR /app

COPY yarn.lock package.json /app/
RUN yarn install

COPY . /app

RUN yarn run build

CMD ["yarn", "run", "start"]
