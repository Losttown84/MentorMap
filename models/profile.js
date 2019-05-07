const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let profileSchema = new Schema ({
    firstName: {
        type: String, 
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
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
    }]
});

let Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
