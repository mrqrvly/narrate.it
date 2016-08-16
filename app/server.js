//  LOCAL SERVER FILE
//  =================


//  Dependencies
//  ------------
var express    = require('express'),
    app        = express(),
    session    = require('express-session'),
    fs         = require('fs'),
    bodyParser = require('body-parser'),
    passport   = require('passport'),
    bcrypt     = require('bcrypt');


//  Configures a user session
//  -------------------------
app.use(session({
  name:              'storyu',
  resave:            false,
  saveUninitialized: false,
  secret:            'dp98q3jeoasdn983u4oijaekjf'
}));


//  Serve static files
//  ------------------
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//  Find and linke up database
//  --------------------------
require('./db/database');


var index  = require('./routes/index'),
    login  = require('./routes/login'),
    signup = require('./routes/signup'),
    logout = require('./routes/logout');


//  Mount the controllers for use
//  -----------------------------
app.use('/?', index);
app.use('/login', login);
app.use('/signup', signup);
app.use('/logout', logout);


//  Start the server and listen at local port
//  -----------------------------------------
var server = app.listen(process.env.PORT || 3000, function() {
  console.log('Server listening at http://localhost:' + server.address().port);
});
