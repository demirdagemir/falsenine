var express = require('express');
var router = express.Router();
var Nation = require('../models/nation');

router.get('/getNation/:name', function(req,res,next) {
  Nation.findOne({name: req.params.name}, function (err, nation) {
      res.json({
        nation: nation
      });
    }
  )
});

module.exports = router;
