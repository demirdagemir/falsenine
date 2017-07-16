var express = require('express');
var router = express.Router();
var Club = require('../models/club');

router.get('/getTeamId/:name', function(req,res,next) {
  Club.findOne({name: req.params.name}, function (err, club) {
      res.json({
        clubId: club._id
      });
    }
  )
});

router.get('/getPlayerClubById/:id', function(req,res,next) {
  Club.findOne({_id: req.params.id}, function (err, club) {
      res.json({
        club: club
      });
    }
  )
});

module.exports = router;
