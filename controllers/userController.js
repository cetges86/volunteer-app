const db = require("../models");
const mongoose = require('mongoose');

module.exports = {
    getAll: function (req, res) {
        db.User
            .find(req.query)
            .sort({ name: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getOne: function (req, res) {
        console.log(req.params)
        db.User
            .findOne({ 'email': req.params.user })
            .then(dbModel => res.json(dbModel))
            .catch(err => console.error(err));
    },
    createUser: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }


}