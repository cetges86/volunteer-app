const db = require("../models");
const mongoose = require('mongoose');
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/volunteer-app/image/upload'
const axios = require("axios");
const FormData = require("form-data");
const sha1 = require("sha1");
const fs =require('fs');
require('dotenv').config();

module.exports = {
    getAll: function (req, res) {
        db.User
            .find(req.query)
            .sort({ name: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getOne: function (req, res) {
        console.log(req.params.user)
        if (req.params.user == null) {
            return "Try Again"
        } else {
            db.User
                .findOne({ 'email': req.params.user })
                .then(dbModel => res.json(dbModel))
                .catch(err => console.error(err));
        }
    },
    createUser: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    edit: function (req, res){
        console.log("Body: " + req.body);
        console.log("Params: " + req.params);
        console.log(req.params.id)
        db.User
            .findByIdAndUpdate({_id: req.params.id}, req.body)
            .then(dbModel =>res.json(dbModel))
            .catch(err => console.error(err));
    }
}