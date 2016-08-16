var express = require('express'),
    logout  = express.Router();

logout.post('/', function(req, res, next) {
  req.session.isLoggedIn = false;
  console.log('Registered logout.');
  console.log(req.session.userID);
  console.log('Logged in: ' + req.session.isloggedIn);
});

module.exports = logout;
