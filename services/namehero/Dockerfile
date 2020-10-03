FROM node:12
WORKDIR /usr/src/app
COPY package*.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 8080
ENTRYPOINT [ "node", "index.js" ]
