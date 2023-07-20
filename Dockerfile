# Builder Stage
FROM node:18-alpine as builder

WORKDIR /api

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn add prisma --dev
RUN yarn
RUN yarn prisma generate --schema=./prisma/schema.prisma

# Final Stage
FROM node:18-alpine

WORKDIR /api

COPY --from=builder /api .

# Removing dev dependencies
RUN yarn --production

EXPOSE 3003

CMD ["sh", "start.sh"]
