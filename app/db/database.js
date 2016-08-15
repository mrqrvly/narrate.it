//  DATABASE CONFIGURATION
//  ======================

//  Require Mongoose
//  ----------------
var mongoose = require('mongoose');

//  Locate the database
//  -------------------
var connectionString = 'mongodb://localhost/users';

//  Connect to the database
//  -----------------------
mongoose.connect(connectionString);

//  Alert when connected
//  --------------------
mongoose.connection.on('connected', function() {
  console.log('Mongoose is connected at ' + connectionString + '.');
});

//  Alert when error occurs
//  -----------------------
mongoose.connection.on('error', function() {
  console.log('Mongoose connection error: ' + error);
});

//  Alert when mongoose disconnects
//  -------------------------------
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected.');
});
