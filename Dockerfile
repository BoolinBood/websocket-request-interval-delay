FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the application files
COPY . .

# Expose the port the app runs on
EXPOSE 3001

# Command to start the application
CMD ["node", "server.js"]