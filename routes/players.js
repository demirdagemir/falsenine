var express = require('express');
var router = express.Router();
var Player = require('../models/player');
var axios = require('axios');

/* Get Player */
router.get('/', function (req, res, next) {
    var data;
    var config = {
    headers: { 'X-Auth-Token': '3cc7236eb92146f7a14d8af2c5397c00' },
    method: 'GET' }

    fetch('http://api.football-data.org/v1/competitions/', config)
    .done(function(response) {
        data = response.data;
    }).catch(function (error) {
        console.log(error);
        return error;
    });

    //console.log(data);
    return res.json(data);
});

module.exports = router;
