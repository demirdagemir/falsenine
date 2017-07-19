var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User'},
  playerId: { type: Schema.Types.ObjectId, ref: 'Player'}
})

module.exports = mongoose.model('Favorite', schema);