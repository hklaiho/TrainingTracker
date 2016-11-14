/* TrainingTracker -- App.js */

var http        = require('http');
var path        = require('path');
var express     = require('express');

var app = express();
var server = http.createServer(app);

var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');

var jwt         = require('jsonwebtoken');
var routes      = require('./routes');

var api         = require('./api');
var config      = require('./config');
// var User    = require('./models/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.set('superSecret', config.secret);

app.use(bodyParser);

app.use('/', routes);

server.listen(80, 'localhost', function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
