var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var routeSchema = new Schema({
  name:  { type: String, required: true, unique: true },

  stops: [],
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it 
var Route = mongoose.model('Route', routeSchema); 
// make this available to our users in our Node applications 
module.exports = Route;
