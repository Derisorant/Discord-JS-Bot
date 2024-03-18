// This is only necessary if you intend on hosting online, you can disregard this file for local hosting.

const http = require('http');
const app = require('./app');
const { hostname } = require('os');

const port = process.env.PORT || 4000;
const server = http.createServer(app);

server.listen(port, hostname => {
  console.log(`Started on port ${port}`)
});