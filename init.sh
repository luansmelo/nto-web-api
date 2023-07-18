#!/bin/sh
if [ ! -f .env ]; then
  echo ".env file is missing"
  exit 1
fi

while ! nc -z database 3306; do
  sleep 1
done

npx prisma db pull
npx prisma generate
yarn start:dev
