const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let messageSchema = new Schema ({
   to: {
       type: String
   },
   from: {
    type: String
   },
   message: {
       type: String
   }
});

let Message = mongoose.model('Message', messageSchema);

module.exports = Message;
