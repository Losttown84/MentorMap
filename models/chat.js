const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let chatSchema = new Schema ({
    to: {
        type: String
    },
    from: {
        type: String
    },
    sent: {
        type: Date,
        default: Date.now
    },
    message: {
        type: String
    },
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }]

});

let Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
