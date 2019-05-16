const User = require('../models/user')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	function(username, password, done) {
		console.log("this is username", username)
		User.findOne({ username: username }, (err, user) => {
			if (err) {
				console.log("user error", err)
				return done(err)
			}
			if (!user) {
				console.log("wrong username")
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!user.checkPassword(password)) {
				console.log("wrong password")
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
		})
	}
)

module.exports = strategy
