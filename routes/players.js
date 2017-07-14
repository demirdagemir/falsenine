var express = require('express');
var router = express.Router();
var Player = require('../models/player');
var axios = require('axios');

/* Create Player */
router.post('/create', function(req, res, next) {
  var player = new Player({
    name: req.body.name,
    marketValue: req.body.marketValue,
    dateOfBirth: req.body.dateOfBirth,
    contractedUntil: req.body.contractedUntil,
    nation_id: req.body.nation_id,
    club_id: req.body.club_id,
    jerseyNumber: req.body.jerseyNumber,
    position: req.body.pos,
    photoDir: req.body.photoDir
  })

  player.save(function (err, result) {
    if (err) {
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      })
    }

    res.status(201).json({
      message: 'Player successfully created',
      obj: result
    })
  })
});

module.exports = router;
