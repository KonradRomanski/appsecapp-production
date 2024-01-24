#!/bin/bash
docker-compose -f docker-compose.yaml down --remove-orphans

docker pull konrad848/appsecapp-backend:latest

if [ $? -eq 0 ]; then
    echo "Backend image pulled successfully."
else
    echo "Failed to pull backend image. Exiting."
    exit 1
fi

docker pull konrad848/appsecapp-frontend:latest

if [ $? -eq 0 ]; then
    echo "Frontend image pulled successfully."
else
    echo "Failed to pull frontend image. Exiting."
    exit 1
fi

docker-compose -f docker-compose.yaml up -d
