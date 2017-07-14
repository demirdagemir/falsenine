var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: { type: String, required: true },
    marketValue: { type: Number },
    dateOfBirth: { type: Date },
    contractedUntil: { type: Date },
    nation_id: { type: Schema.Types.ObjectId, ref: 'Nation' },
    club_id: { type: Schema.Types.ObjectId, ref: 'Club' },
    jerseyNumber: { type: Number },
    position: { type: String },
    photoDir: { type: String }
})

module.exports = mongoose.model('Player', schema);
