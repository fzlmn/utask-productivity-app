# Use a Node.js version that is compatible with Next.js
FROM node:18.20.6

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that Next.js will run on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]