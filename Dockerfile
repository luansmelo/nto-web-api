FROM node:18-alpine

WORKDIR /api

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3003

CMD ["sh", "./init.sh"]
