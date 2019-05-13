// Packages
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../models');

// With passport-local authenticate our user's username and password
passport.use(new LocalStrategy (
    {
        username: 'username'
    },
    
    function (username, password, done) {
        // check our database for the entered username. (all usernames are unique)
        db.User.findOne({ 
            $where: {username: username}
        }).then(function (dbUser) {
            // if there is no matching username
            if (!dbUser) {
                return done(null, false, {
                    message: 'Incorrect username. Please try again.'
                });
            }
            // if the username is correct, check password
            else if (!dbUser.validPassword(password)) {
                // if no matching password
                return done (null, false, {
                    message: 'Incorrect password. PLease try again.'
                });
            }
            // if none of the above, return the user
            return done(null, dbUser);
        });
    }
));

passport.serializeUser(function (user, cb){
    cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
    User.findById(id, function(err, user) {
        cb(err, user);
    });
});

module.exports = passport;