# Base image used to build the application in the first phase
FROM node:13.12.0-alpine as build

# Setting current work directory inside the container
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

RUN npm run build

# Build the production image with the Application
FROM nginx:stable-alpine

# Copy the application files from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy the nginx configuration
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]