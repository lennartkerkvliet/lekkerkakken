FROM node:15.4.0-alpine3.10 AS dependencies

WORKDIR /app
COPY ./package.json ./

RUN npm install --no-progress

FROM dependencies AS development

FROM dependencies AS production
COPY . /app
RUN npm run build
