FROM node:13.1-alpine as builder
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm ci
EXPOSE 8080
ENTRYPOINT npm run start:prod
