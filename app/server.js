//  LOCAL SERVER FILE
//  =================


//  Dependencies
//  ------------
var express    = require('express'),
    app        = express(),
    session    = require('express-session'),
    fs         = require('fs'),
    bodyParser = require('body-parser');


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

//  Find and linke up database
//  --------------------------
require('./db/database');

var splash = require('./routes/index'),
    users  = require('./routes/users');

//  Mount the controllers for use
//  -----------------------------
app.use('/?', splash);
app.use('/users', users);



//  Start the server and listen at local port
//  -----------------------------------------
var server = app.listen(process.env.PORT || 3000, function() {
  console.log('Server listening at http://localhost:' + server.address().port);
});
