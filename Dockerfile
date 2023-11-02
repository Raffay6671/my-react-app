# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY my-react-app/package*.json ./

# Install app dependencies
RUN npm install

# Copy all source files to the working directory
COPY my-react-app .

# Build your React app
RUN npm run build

# Expose the port your app will run on
EXPOSE 80

# Command to run your app
CMD [ "npm", "start" ]
