const db = require('../models');

module.exports = {
    // find all sessions
    findAll(req, res) {
        db.Session.find({})
            .then(dbSessions => res.json(dbSessions))
            .catch((err) => console.log(err));
    },
    // find single session
    findById(req, res) {
        db.Session.findById(req.param._id)
            .then(dbSessions => res.json(dbSessions))
            .catch((err) => console.log(err));
    },
    // schedule a session
    createSession(req, res) {
        db.Session.create({
            mentor: req.body.mentor,
            location: req.body.location,
            date: req.body.date,
            time: req.body.time
        })
        .then(session => {
            return db.Session.findOneAndUpdate({} , { $push: { session: session._id } }, { new: true});
        })
        .then(session => res.json(session))
        .catch(err => console.log(err));
    },
    // view sessions
    findSession(req, res) {
        db.User.find({})
        .populate('sessions')
        .then(session => res.json(session))
        .catch(err => console.log(err));
    }
}