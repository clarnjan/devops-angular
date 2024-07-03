# Use the official Node.js image with Alpine Linux as a base
FROM node:alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) to WORKDIR
COPY package*.json ./

# Install Angular CLI globally and install dependencies
RUN npm install -g @angular/cli && npm install

# Copy the entire Angular project to WORKDIR
COPY . .

# Command to run when the container starts
CMD ["ng", "serve", "--host", "0.0.0.0"]

