const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
let Schema = mongoose.Schema;

let UserSchema = new Schema ({
    username: {
        type: String,
        unique: true
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
    online: {
        type: Boolean,
        default: false
    }, 
    dateCreated: {
        type: Date,
        default: Date.now
    },
    firstName: {
        type: String, 
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    mentee: {
        type: Boolean,
        default: false
    },
    mentor: {
        type: Boolean,
        default: false 
    },
    location: {
        type: String,
        trim: true
    },
    industry: {
        type: String
    },  
    yrsExp: {
        type: Number
    }, 
    linkedin: {
        type: String
    },
    img: {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
    },
    savedMentors: [{
        type: String
    }],
    chat: [{
        type: Schema.Types.ObjectId,
        ref: 'Chat'
    }]
});


let User = mongoose.model('User', UserSchema);

module.exports = User;