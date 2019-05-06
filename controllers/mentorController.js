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
            db.User.findByIdAndUpdate(req.params.id)
            .then(dbUsers => res.json(dbUsers))
            .catch((err) => console.log(err));
        },
        findByIdAndDelete(req, res) {
            db.User.findByIdAndDelete(req.params.id)
            .then(dbUsers => res.json(dbUsers))
            .catch((err) => console.log(err));
        },
        createAccount(req, res) {
            db.User.create({ })
        }

}