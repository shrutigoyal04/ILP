# base image
FROM node:alpine

#WorkDir
WORKDIR /app

#Copy files
COPY package.json ./

# dependencies
RUN npm install

#Copy files
COPY ./ ./

# Startup command
CMD ["npm", "start"]