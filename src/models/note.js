//  NOTE RESOURCE
//  =============

//  Require Mongoose
//  ----------------
var mongoose = require('mongoose');

//  Define note resource model
//  --------------------------
var NoteSchema = new mongoose.Schema({
  title: String,
  content: String,
  userid: String
});

//  Declare Note as model and attach schema
//  ---------------------------------------
module.exports = mongoose.model('Note', NoteSchema)
