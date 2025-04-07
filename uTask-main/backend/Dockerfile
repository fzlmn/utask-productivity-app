# Use a Node.js version compatible with your app
FROM node:18.20.6

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that your backend will run on (9000 in this case)
EXPOSE 9000

# If using nodemon in development, run it with npm run dev (make sure this is configured in package.json)
CMD ["npm", "run", "start"]