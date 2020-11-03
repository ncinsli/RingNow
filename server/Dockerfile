FROM node:latest

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN npm i
RUN npm run build

EXPOSE 3004

CMD ["npm", "run", "start:production"]