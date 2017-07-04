var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');

/* Sign up new user on the home page. */
router.post('/', function(req, res, next) {
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10),
    favoriteTeam: req.body.favoriteTeam,
    favoritePlayer: req.body.favoritePlayer
  });

  user.save(function (err, result) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      })
    }

    res.status(201).json({
      message: 'User successfully created',
      obj: result
    })
  })
});

module.exports = router;
