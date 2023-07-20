#!/bin/sh

# Ensure database is ready before starting the app
while ! nc -z database 3306; do sleep 1; done

# Start the application
node dist/main
