FROM node:15.4.0-alpine3.10

WORKDIR /app
COPY . /app

RUN apk update && apk upgrade

RUN npm install
RUN npm run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

CMD ["npm", "run", "start"]
