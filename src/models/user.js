//  USER RESOURCE
//  =============

//  Require Mongoose
//  ----------------
var mongoose = require('mongoose');

//  Define the user resource model
//  ------------------------------
var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String
});

//  Declare user model and attach schema
//  ------------------------------------
module.exports = mongoose.model('User', UserSchema);
