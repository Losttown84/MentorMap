const db = require('../models');

module.exports = {
    findAll(req, res) {
        db.User.find(req.query)
            .then(dbUsers => res.json(dbUsers))
            .catch((err) => console.log(err));
        },
        findById(req, res) {
            db.User.findById(req.params.id)
            .then(dbUsers => res.json(dbUsers))
            .catch((err) => console.log(err));
        },
        findByIdAndUpdate(req, res) {
            db.User.findByIdAndUpdate(req.params.id, User)
            .then(dbUser => res.json(dbUser))
            .catch((err) => console.log(err));
        },
        findMentors(req, res) {
            db.User.find({ mentor: true })
            .then(dbUser => res.json(dbUser))
            .catch((err) => console.log(err));
        },
        findMentee(req, res) {
            db.User.find({ mentee: true})
            .then(dbUser => res.json(dbUser))
            .catch((err) => console.log(err));
        },
        onlineUsers(req, res) {
            db.User.find({ online: true})
            .then(dbUsers => res.json(dbUsers)) 
            .catch((err) => console.log(err));
        }
    }
    const styledcode = { color: "red", backgroundColor: "white" }
    {styledcode}
