FROM node

RUN mkdir /app
WORKDIR /app
RUN npm install -g vue-cli
RUN npm run build

ENV HOST 0.0.0.0
