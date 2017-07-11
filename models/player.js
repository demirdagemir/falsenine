var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    valueInEuros: { type: Number, required: true },
    contractedUntil: { type: Date, required: true },
    nationality: { type: Schema.Types.ObjectId, ref: 'Nation' },
    club: { type: Schema.Types.ObjectId, ref: 'Club'},
    position: { type: String, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    footed: { type: String, required: true },
    photoDir: { type: String}
})

module.exports = mongoose.model('Player', schema);
