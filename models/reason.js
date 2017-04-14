var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReasonSchema = new Schema({
  reason: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Reason', ReasonSchema);
