const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ContactSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

let Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
