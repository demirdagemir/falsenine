var express = require('express');
var router = express.Router();
var Player = require('../models/player');
var User = require('../models/user');
var Favorite = require('../models/favorite')

router.post('/addFavorite', function(req, res, next) {
  User.findOne({_id: req.body.userId}, function (err, user) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      })
    }

    if (!user) {
      return res.status(401).json({
        title: 'No user found',
        error: {message: 'You are not logged in!!'}
      })
    }

   Player.findOne({_id: req.body.playerId}, function (err, player){

     if (err) {
       return res.status(500).json({
         title: 'An error occurred',
         error: err
       })
     }

     if (!player) {
       return res.status(401).json({
         title: 'No player found',
         error: {message: 'You are adding a player to favorites that does not exist.'}
       })
     }

     // Insert player to favorites if everything's on track.

    var favorite = new Favorite({
      userId: user._id,
      playerId: player._id
    });

     favorite.save(function (err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        })
      }

    res.status(201).json({
      message: 'Added to favorites!',
      obj: result,
      favId: result._id
    })
  })
  })
  })
});

router.post('/getFavorite', function (req, res, next) {
  Favorite.findOne({userId: req.body.userId, playerId: req.body.playerId}, function (err, favorite) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      })
    }

    if (!favorite) {
      return res.status(200).json({
        message: 'Player is not marked as favorite',
        markedAsFavorite: false
      })
    }

    res.status(200).json({
      message: 'Player is marked as favorite',
      markedAsFavorite: true,
      favId: favorite._id
    });
  });
});

router.delete('/deleteFavorite/:id', function (req, res, next) {
  Favorite.findById(req.params.id, function (err, favorite) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }

    if (!favorite) {
      return res.status(500).json({
        title: 'This player is not in the favorites',
        error: {message: 'Favorite entry not found'}
      });
    }

    favorite.remove(function (err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }

      res.status(200).json({
        message: 'Deleted from favorite',
        obj: result
      });
    });
  });
});

module.exports = router;