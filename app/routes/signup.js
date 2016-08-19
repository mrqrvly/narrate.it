var express   = require('express'),
    signup    = express.Router(),
    UserModel = require('../models/user'),
    bcrypt    = require('bcrypt');

signup.post('/', function(req, res, next) {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    UserModel.create({
      firstname: req.body.firstname,
      lastname:  req.body.lastname,
      email:     req.body.email,
      username:  req.body.username,
      password:  hash
    }, function(err, user) {
      if (err) {
        console.log(err);
        res.send('There was an error!');
      } else {
        req.session.isLoggedIn = true;
        req.session.userID     = user._id;
        res.send('signup worked');
      }
    })
  });
});

module.exports = signup;
