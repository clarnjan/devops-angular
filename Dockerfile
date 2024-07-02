FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g @angular/cli && npm install
COPY . .
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]

