var express = require('express');
var router = express.Router();
var Player = require('../models/player');

router.get('/getPlayerById/:id', function(req,res,next) {
  Player.findOne({_id: req.params.id}, function (err, player) {
    res.json({player: player})
  })
})

router.get('/getPlayerAttributesById/:id', function(req,res,next) {
  Player.findOne({_id: req.params.id}, function (err, player) {
    res.json({attributes: player.attributes})
  })
})

router.get('/search/:name', function(req,res,next) {
  Player.findOne({name: new RegExp(req.params.name, "i")}, function (err, player) {
    res.json({playerId: player._id})
  })
})

router.patch('/updateMentalRating/:id', function (req, res, next) {
  Player.findById(req.params.id, function (err, player) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!player) {
      return res.status(500).json({
        title: 'No Player Found!',
        error: {message: 'Player not found'}
      });
    }

    player.attributes.mental = req.body;

    player.save(function (err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Updated player rating',
        obj: result
      });
    });
  });
});

router.patch('/updateTechnicalRating/:id', function (req, res, next) {
  Player.findById(req.params.id, function (err, player) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!player) {
      return res.status(500).json({
        title: 'No Player Found!',
        error: {message: 'Player not found'}
      });
    }

    player.attributes.technical = req.body;

    player.save(function (err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Updated player rating',
        obj: result
      });
    });
  });
});

router.patch('/updatePhysicalRating/:id', function (req, res, next) {
  Player.findById(req.params.id, function (err, player) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    }
    if (!player) {
      return res.status(500).json({
        title: 'No Player Found!',
        error: {message: 'Player not found'}
      });
    }

    player.attributes.physical = req.body;

    player.save(function (err, result) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Updated player rating',
        obj: result
      });
    });
  });
});

module.exports = router;
