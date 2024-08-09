FROM node:22.5.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN rm -rf node_modules

RUN npm install

COPY . .

EXPOSE 5173
EXPOSE 6006

CMD ["npm", "run", "dev"]
