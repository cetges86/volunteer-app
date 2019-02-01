const db = require("../models");
const mongoose = require('mongoose');

module.exports = {
    getAll: function (req, res) {
        db.Posts
            .find(req.query)
            .sort({ name: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getMany: function (req, res) {
        db.Posts
            .find({ 'author': req.params.author })
            .then(dbModel => res.json(dbModel))
            .catch(err => console.error(err));
    },
    findById: function (req, res) {
        if (mongoose.Types.ObjectId.isValid(req.params.id)) {
            db.Posts
                .findById(req.params.id)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err));
        }
    },
    create: function (req, res) {
        console.log('hit', req.body);
        db.Posts
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    volSignUp: function (req, res) {
        console.log(req.body)
        db.Posts
            .findByIdAndUpdate({ _id: req.params.id },
                {
                    $push: {
                        'volunteers':
                            { "name": req.body.name, "email": req.body.email }
                    }
                },
                { new: true })
            // .then(dbModel => console.log(dbModel.volunteers))
            .then(dbModel => res.json(dbModel))
            .catch(err => console.error(err));
    },
    delete: function (req, res) {
        db.Posts.deleteOne({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    }


}