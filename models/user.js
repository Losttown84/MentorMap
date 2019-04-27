const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema ({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: 'A username is required'
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
    mentee: {
        type: Boolean
    },
    mentor: {
        type: Boolean
    },
    socialHandles: {
        type: Map,
        of: String
    }
});

let User = mongoose.model('User', userSchema);

module.exports = User;