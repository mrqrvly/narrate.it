//  LOCAL SERVER FILE
//  =================


//  Dependencies
//  ------------
var express    = require('express'),
    app        = express(),
    session    = require('express-session'),
    fs         = require('fs'),
    bodyParser = require('body-parser'),
    path       = require('path'),
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
app.use(express.static(__dirname + '/public/'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//  Find and linke up database
//  --------------------------
require('./db/database');


//  Require routes to server-side http
//  ----------------------------------
var index    = require('./routes/index'),
    login    = require('./routes/login'),
    signup   = require('./routes/signup'),
    notes    = require('./routes/notes'),
    features = require('./routes/features'),
    logout   = require('./routes/logout');


//  Map to the routes
//  -----------------
app.use('/?', index);
app.use('/login', login);
app.use('/signup', signup);
app.use('/notes', notes);
app.use('/features', features);
app.use('/logout', logout);


//  Start the server and listen at local port
//  -----------------------------------------
var server = app.listen(process.env.PORT || 2666, function() {
  console.log('Server listening at http://localhost:' + server.address().port);
});
