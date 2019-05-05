const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema ({
    _id: Schema.Types.ObjectId,
    name: {
        first: String,
        last: String
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
    online: {
        type: Boolean,
        default: false
    }, 
    img: {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
    },
    chat: {
        type: Schema.Types.ObjectID,
        ref: 'Chat'
    },
    savedMentors: [{
        type: String
    }]
});

let User = mongoose.model('User', UserSchema);

module.exports = User;