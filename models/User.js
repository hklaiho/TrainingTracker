/* TrainingTracker -- User.js */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = mongoose.model('User', new Schema({
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    admin: {
      type: Boolean,
      required: true
    }
}));
