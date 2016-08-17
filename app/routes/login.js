var express = require('express'),
    login   = express.Router(),
    User    = require('../models/user'),
    bcrypt  = require('bcrypt');

login.post('/', function(req, res, next) {
  User.findOne({username: req.body.username}, function(error, user) {
      if (error || !user) {
        res.send('Cound not find that user.');
      } else {
        bcrypt.compare(req.body.password, user.password, function(err, result) {
          if (err) {
            res.send ('ERROR: ' + err);
          } else if (result) {
            req.session.isLoggedIn = true;
            req.session.userID = user._id;
            res.redirect('/users');
          } else {
            res.send ('Wrong password!');
          };
        });
      };
    });
})

module.exports = login;
