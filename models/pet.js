// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var petSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Return model
module.exports = restful.model('Pets', petSchema);
