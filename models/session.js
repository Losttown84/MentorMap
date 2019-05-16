const mongoose = require("mongoose");
let Schema = mongoose.Schema;


let SessionSchema = new Schema({
    interest: {
        type: String
    },
  virtualSession: {
    type: Boolean,
    default: null
  },
  inPerson: {
    type: Boolean,
    default: null
  },
  both: {
    type: Boolean,
    default: null
  },
  date: {
    type: Date
  },
  time: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
}
});

let Session = mongoose.model('Session', SessionSchema);

module.exports = Session;
