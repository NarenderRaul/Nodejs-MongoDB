var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BarcodeSchema = new Schema({
  text: {
        type: String,
        required: true
    },
  reason: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Barcode', BarcodeSchema);
