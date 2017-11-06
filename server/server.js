const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes.js');
const routerAmongRoutes = require('./routes');

const {
  DB_URL,
  SERVER_PORT
} = require('./constants/constants.js');

const server = express();
server.use(bodyParser.json());

mongoose.Promise = global.Promise;

const connect = mongoose.connect(DB_URL, {
  useMongoClient: true
});

connect.then(() => {
  routes(server);
  server.listen(SERVER_PORT);
  console.log(`Server listening on port ${SERVER_PORT}`);
}, (err) => {
  console.log(`Error in connection to DB`);
});

module.exports = server;
