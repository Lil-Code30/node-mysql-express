FROM node:25.4.0-alpine

# Create app directory & set default dir so that next commands executes in /usr/app dir, liked cd-ing into /usr/app to execute npm install
WORKDIR /usr/app


# Copy package.json, wildcard used so both package.json AND package-lock.json are copied
# slash '/' at the end of app is important, so it created an app directory, otherwise you'll get an error

# Copy app files from root directory
COPY / /usr/app/


# Install app dependencies
RUN npm install

EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
