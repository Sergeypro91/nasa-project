FROM node:lts-alpine

WORKDIR /app

COPY package*.json yarn.lock ./

COPY client/package*.json client/yarn.lock client/
RUN npm run install-client --only=production

COPY server/package*.json server/yarn.lock server/
RUN npm run install-server --only=production

COPY client/ client/
RUN npm run build --prefix client

COPY server/ server/

USER node

CMD [ "npm", "start", "--prefix", "server" ]

EXPOSE 8000