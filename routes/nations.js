var express = require('express');
var router = express.Router();
var Nation = require('../models/nation');

router.get('/getNationId/:name', function(req,res,next) {
  Nation.findOne({name: req.params.name}, function (err, nation) {
      res.json({
        nationId: nation._id
      });
    }
  )
});

module.exports = router;
