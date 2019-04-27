var passport = require("passport");
var localStrategy = require("passport-local").Strategy;

var db = require

passport.use(new localStrategy(

  {
    usernameField: "email"
  },
  function (email, password, done) {
    db.User.findOne({
      where: {
        email: email
      }
    }).then(function(dbUser) {
      if (!dbUser) {
        return done(null, false, {
          message: "Please insert a valid email."
        });
      }
      else if (!dbUser.validPassword(password)) {
        return done(null, false, {
          message: "That password does not match."
        });
      }
      return done(null, dbUser);
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, obj);
});

module.exports = passport;