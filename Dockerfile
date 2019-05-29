FROM node:alpine

RUN mkdir /opt/project
WORKDIR /opt/project

RUN apk add --no-cache git

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENTRYPOINT [ "node", "./dist/index.js" ]
