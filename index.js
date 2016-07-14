'use strict';

// Dependencies
var express = require('express');
var mongoose = require('mongoose');

// Configuration
var config = require('./app/config/config');

// Express
var app = express();

// Middelware
require('./app/middelware/app.middelware')(app);

// Routes
app.get('/', function(req, res) {
  res.send('Hello World');
});

// Connection to database
mongoose.connect(config.db.uri, function(err) {
  console.log(err ? 'Connection to MongoDB failed!' : 'Connected to MongoDB at: ', config.db.uri);
});

// Connection to server
app.listen(config.server.port, function(err) {
  console.log(err ? 'Connection to node server failed!' : 'Server listening on port: ', config.server.port);
});
