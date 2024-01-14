# Build stage
FROM node:20-alpine as build
WORKDIR /app
COPY . /app
RUN yarn install --immutable --immutable-cache --check-cache
RUN yarn build


FROM nginx:stable-alpine
# TODO