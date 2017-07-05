var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

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

/* Sign in user */
router.post('/signin', function (req, res, next) {
  User.findOne({email: req.body.email}, function (err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      })
    }

    if (!user) {
      return res.status(401).json({
        title: 'No user found',
        error: {message: 'Invalid login credentials'}
      })
    }

    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(401).json({
        title: 'An error occurred',
        error: err
      })
    }

    var token = jwt.sign({user: user}, '_SEBA14_!secretkey?', {expiresIn: 3600});
    res.status(200).json({
      message: 'Successfully logged in',
      token: token,
      userId: user._id
    });
  });
});

module.exports = router;
