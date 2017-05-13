var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UpcSchema = new Schema({
  product_name: {
    type: String,
    required: true
  },
  upc: {
    type: String,
    unique: true,
    required: true
  }
});

module.exports = mongoose.model('Upc', UpcSchema)
