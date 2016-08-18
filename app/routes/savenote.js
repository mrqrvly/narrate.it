var express   = require('express'),
    savenote  = express.Router(),
    UserModel = require('../models/user'),
    NoteModel = require('../models/note');

module.exports = savenote;
