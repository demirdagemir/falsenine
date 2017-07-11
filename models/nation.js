var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: { type: String, required: true},
    flagDir: { type: String }
})

module.exports = mongoose.model('Nation', schema);
