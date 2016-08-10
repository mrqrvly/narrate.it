//  PHOTO RESOURCE
//  ==============

//  Require Mongoose
//  ----------------
var mongoose = require('mongoose');

//  Define the photo resource model
//  -------------------------------
var PhotoSchema = new mongoose.Schema({
  title: String,
  photo: ???,
  userid: String
});

//  Declare photo as a model and attach schema
//  ------------------------------------------
module.exports = mongoose.model('Photo', ReviewSchema)
