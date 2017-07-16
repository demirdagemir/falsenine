var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  name: { type: String, required: true },
  position: { type: String },
  marketValue: { type: Number },
  jerseyNumber: { type: Number },
  dateOfBirth: { type: Date },
  contractedUntil: { type: Date },
  club_id: { type: Schema.Types.ObjectId, ref: 'Club' },
  nation_name: { type: String, ref: 'Nation' },
  attributes: {
    physical: {
      Acceleration: { type: Number },
      Agility: { type: Number },
      Balance: { type: Number },
      JumpingReach: { type: Number },
      NaturalFitness: { type: Number },
      Pace: { type: Number },
      Stamina: { type: Number },
      Strength: { type: Number },
      GoalkeeperRating:{ type: Number }
    },
    mental: {
      Aggression: { type: Number },
      Anticipation: { type: Number },
      Bravery: { type: Number },
      Composure: { type: Number },
      Concentration: { type: Number },
      Decision: { type: Number },
      Determination: { type: Number },
      Flair: { type: Number },
      Leadership: { type: Number },
      OfftheBall: { type: Number },
      Positioning: { type: Number },
      Teamwork: { type: Number },
      Vision: { type: Number },
      WorkRate:{ type: Number }
    },
    technical: {
      Crossing: { type: Number },
      Dribbling: { type: Number },
      Finishing: { type: Number },
      FirstTouch: { type: Number },
      FreeKickTaking: { type: Number },
      Heading: { type: Number },
      LongShots: { type: Number },
      LongThrows: { type: Number },
      Marking: { type: Number },
      Passing: { type: Number },
      PenaltyTaking: { type: Number },
      Tackling: { type: Number },
      Technique:{ type: Number }
    }
  }
})

module.exports = mongoose.model('Player', schema);
