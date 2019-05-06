const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema ({
    firstName: {
        type: String, 
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true,
        required: 'A password is required',
        match: [/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, 'Password must contain six characters, at least one letter and one number']    
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address'] 
    },
    chat: [{
        type: Schema.Types.ObjectId,
        ref: 'Chat'
    }],
    savedMentors: [{
        type: String
    }]
});

let User = mongoose.model('User', UserSchema);

module.exports = User;