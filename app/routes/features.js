var express   = require('express'),
    features  = express.Router(),
    UserModel = require('../models/user'),
    NoteModel = require('../models/note');

features.get('/', function(req, res, next) {
  NoteModel.find(function(error, notes) {
    var featuresearch = [];
    for (var x in notes) {
      if (notes[x].userid === req.session.userID) {
        featuresearch.push(notes[x]);
      };
    };
  res.send(featuresearch);
  });
});

module.exports = features;
