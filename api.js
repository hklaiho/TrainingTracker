/* TrainingTracker - Api.js */

var express     = require('express');
var router = express();
var mongoose = require('mongoose');

var User       = require('./models/User');

// mongoose.connect("mongodb://" + ip + "/TrainingTracker/");

router.get('/', function(req, res){
    // bla blablabla
});

module.exports = router;
