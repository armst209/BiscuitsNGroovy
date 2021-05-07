FROM node:14

WORKDIR /usr/src/app

#copy package file(s)
COPY package*.json ./

#install dependencies
RUN npm install

#copy source code
COPY . .

EXPOSE 3001

CMD [ "serve", "-s", "build"]