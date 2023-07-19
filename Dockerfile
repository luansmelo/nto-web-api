FROM node:18-alpine

WORKDIR /api

COPY package*.json ./

RUN yarn

COPY . .

RUN apk add --no-cache dos2unix && dos2unix ./init.sh && chmod +x ./init.sh

EXPOSE 3003

CMD ["sh", "./init.sh"]
