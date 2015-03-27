var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var busSchema = new Schema({
  name: String,
  regno: { type: String, required: true, unique: true },
  route: { type: String, required: true },
  location: {
        lat: Number,
        lng: Number
        },
    speed: Number,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it 
var Bus = mongoose.model('Bus', busSchema); 
// make this available to our users in our Node applications 
module.exports = Bus;
