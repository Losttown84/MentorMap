const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let SessionSchema = new Schema({
  mentor: {
    type: String
  },
  location: {
    type: String
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
