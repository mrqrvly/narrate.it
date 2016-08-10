//  AUTHENTICATION CONTROLLER
//  =========================

//  Dependencies
//  ------------
var express = require('express'),
    Authentication = express.Router(),
    UserModel = require(__dirname + '/../models/user'),
    bcrypt = require('bcrypt');

Authentication.route('/?')
  .get(function(req, res, next) {
    res.render('splash');
  })

//  New user signup authentication
//  ------------------------------
Authentication.route('/signup')
  //  POST - '/signup/' - accepts username and password - new account form
  .post(function(req, res, next) {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
      UserModel.create({
        username: req.body.username,
        password: hash
      }, function(err, user) {
        if (err) {
          console.log(err);
          res.render('splash', {error: err});
        } else {
          req.session.isLoggedIn = true;
          req.session.userID     = user._id;
          res.render('collection');
        }
      })
    })
  })

//  Existing user login authentication
//  ----------------------------------
Authentication.route('/login')
  //  POST - '/logout/' - accepts login credentials - allows user into app
  .post(function(req, res, next) {
    UserModel.findOne({username: req.body.username}, function(error, user) {
      if (error || !user) {
        res.send('Cound not find that user.');
      } else {
        bcrypt.compare(req.body.password, user.password, function(err, result) {
          if (err) {
            res.send ('ERROR: ' + err);
          } else if (result) {
            req.session.isLoggedIn = true;
            req.session.userID = user._id;
            res.render('collection');
          } else {
            res.send ('Wrong password!');
          }
        })
      }
    })
  });

Authentication.route('/logout')
  .get(function(req, res, next) {
    req.session.isLoggedIn = false;
    res.redirect('/');
  });

//  Export controller for index access
//  ----------------------------------
module.exports = Authentication;
