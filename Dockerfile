FROM node:25.4.0-alpine

ADD . /app/

WORKDIR /app


# Install app dependencies
RUN npm install

EXPOSE 3000

# Start the application
CMD npm run start
