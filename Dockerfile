FROM node:7

EXPOSE 3000

WORKDIR /app

COPY yarn.lock package.json /app/
RUN yarn install

COPY . /app

CMD ["yarn", "run", "start"]
