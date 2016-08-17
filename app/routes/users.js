var express  = require('express'),
    users    = express.Router(),
    User     = require('../models/user'),
    validate = require('validate.js');

users.get('/', function(req, res, next){
  res.render('users')
})



module.exports = users;
