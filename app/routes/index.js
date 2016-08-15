var express  = require('express'),
    router   = express.Router(),
    User     = require('../models/user'),
    validate = require('validate.js');

// GET - '/' - get splash page with login and signup
router.get('/', function(req, res, next) {
  res.render('users');
  res.send('You made it to the index page.')
});

module.exports = router;
