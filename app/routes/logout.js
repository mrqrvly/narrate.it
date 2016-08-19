var express = require('express'),
    logout  = express.Router();

logout.post('/', function(req, res, next) {
  req.session.isLoggedIn = false;
});

module.exports = logout;
