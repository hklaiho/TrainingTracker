/* TrainingTracker -- api.js */

var express = require('express');
var router = express();

router.get('/', function(req, res){
  res.write("Hello");
  res.end();
});

module.exports = router;
