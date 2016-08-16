var express  = require('express'),
    index    = express.Router(),
    User     = require('../models/user'),
    validate = require('validate.js');


index.get('/', function(req, res, next){
  res.render('index')
})



module.exports = index;
