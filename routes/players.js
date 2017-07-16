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




module.exports = router;
