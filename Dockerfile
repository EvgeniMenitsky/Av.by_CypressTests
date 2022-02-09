FROM cypress/base
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install
RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run