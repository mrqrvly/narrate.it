var express  = require('express'),
    splash   = express.Router(),
    User     = require('../models/user'),
    validate = require('validate.js');


splash.get('/', function(req, res, next){
  res.render('splash')
})



module.exports = splash;
