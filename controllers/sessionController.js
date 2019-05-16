const db = require('../models');

module.exports = {
    findAll(req, res) {
        db.Session.find(req.query)
            .then(dbSessions => res.json(dbSessions))
            .catch((err) => console.log(err));
    },
    findById(req, res) {
        db.Session.findById(req.param.id)
            .then(dbSessions => res.json(dbSessions))
            .catch((err) => console.log(err));
    },
    createSession(req, res) {
        db.Session.create(req.body)
        .then(session => {
            const { virtualSession, inPerson, both, date, time } = session;
            res.json({
                virtualSession, inPerson, both, date, time
            });
        })
        .catch(err => {
            console.log(err);
        })
    }
}