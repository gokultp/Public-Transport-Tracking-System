var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var busStopSchema = new Schema({
  name:  { type: String, required: true, unique: true },

        lat: Number,
        lng: Number,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it 
var BusStop = mongoose.model('BusStop', busStopSchema); 
// make this available to our users in our Node applications 
module.exports = BusStop;
