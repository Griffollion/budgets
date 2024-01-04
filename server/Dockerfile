FROM node:20

WORKDIR /bezkoder-app
COPY package.json .
RUN npm install
COPY . .
CMD npm start