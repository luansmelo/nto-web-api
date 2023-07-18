FROM node:18-alpine

WORKDIR /api

COPY package*.json ./

RUN yarn

COPY . .

RUN npx prisma generate

EXPOSE 3003

CMD ["yarn", "start:dev"]
