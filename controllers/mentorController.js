const db = require('../models');

module.exports = {
    findAll(req, res) {
        db.User.find(req.query)
            .then(dbUsers => res.json(dbUser))
            .catch((err) => console.log(err));
        },
        findById(req, res) {
            db.User.findById(req.params.id)
            .then(dbUsers => res.json(dbUsers))
            .catch((err) => console.log(err));
        },
        saveMentor(req, res) {
            
        }

}