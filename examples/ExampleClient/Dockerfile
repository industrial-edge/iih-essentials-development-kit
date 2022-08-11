# Base Image setup
FROM node:12.18-alpine3.11

# Create app directory
RUN mkdir -p /src/app

# Copy app
COPY . /src/app

# Prepare working directory for start command
WORKDIR /src/app

# Install dependencies and build the application
RUN npm install
RUN npm run build

# Command to start
CMD ["node", "./dist/server.js"]