var express   = require('express'),
    notes     = express.Router(),
    UserModel = require('../models/user'),
    NoteModel = require('../models/note');

notes.get('/', function(req, res, next) {
  NoteModel.find(function(error, notes) {
    notes.reverse();
    var usernotes = [];
    for (var x in notes) {
      if (notes[x].userid === req.session.userID) {
        usernotes.push(notes[x]);
      };
    };
    res.send(usernotes);
  });
});

notes.post('/', function (req, res, next) {
  NoteModel.create({
    title: req.body.title,
    content: req.body.content,
    userid: req.session.userID
  }, function(err, user) {
    if (err) {
      console.log(err);
      res.send('There was an error!');
    } else {
      res.send('you posted something')
    };
  });
});

module.exports = notes;
