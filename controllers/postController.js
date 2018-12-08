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
    create: function (req, res) {
        console.log('hit', req.body);
        db.Posts
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }


}