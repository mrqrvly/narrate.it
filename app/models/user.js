//  USER RESOURCE
//  =============

//  Require Mongoose
//  ----------------
var mongoose = require('mongoose');

//  Define the user resource model
//  ------------------------------
var UserSchema = new mongoose.Schema({
  firstName: String,
  lastname: String,
  email: String,
  username: String,
  password: String
});

//  Declare user model and attach schema
//  ------------------------------------
module.exports = mongoose.model('User', UserSchema);
