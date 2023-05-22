# Base image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Change .env.copy to .env
RUN cp .env.copy .env

# Copy the rest of the application code
COPY . .

# Expose port for the application
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]