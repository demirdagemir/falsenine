var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: { type: String, required: true},
    nation_id: { type: Schema.Types.ObjectId, ref: 'Nation'},
    logoDir: { type: String }
})

module.exports = mongoose.model('Club', schema);
