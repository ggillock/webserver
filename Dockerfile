# Build dependencies
FROM node:17-alpine as dependencies
WORKDIR /app
COPY package.json .
RUN npm i
COPY . . 
# Build production image
#FROM dependencies as builder
#RUN npm run build
EXPOSE 8080
CMD npm run start