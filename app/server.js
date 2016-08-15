//  LOCAL SERVER FILE
//  =================


//  Dependencies
//  ------------
var express    = require('express'),
    app        = express(),
    session    = require('express-session'),
    fs         = require('fs'),
    bodyParser = require('body-parser');


//  Serve static HTML instead of template engine
//  --------------------------------------------
app.use(express.static(__dirname + '/public'));


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


//  Mount the controllers for use
//  -----------------------------
app.use('/?', require('./controllers/authentication'));
// app.use('/notes/?', require('./controllers/notes'));
// app.use('/photos/?', require('./controllers/photos'));
// app.use('/users/?', require('./controllers/users'));


//  Start the server and listen at local port
//  -----------------------------------------
var server = app.listen(process.env.PORT || 3000, function() {
  console.log('Server listening at http://localhost:' + server.address().port);
});
