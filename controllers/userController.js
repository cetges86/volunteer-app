const db = require("../models");
const mongoose = require('mongoose');
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/volunteer-app/upload'
const axios = require("axios");
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
    uploadImage: function (req, res) {

        axios({
            url: CLOUDINARY_URL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
                'upload_preset': process.env.CLOUDINARY_UPLOAD_PRESET,
                'file': req.body
            }
        }).then(response => {
            console.log(response.body);
        }).catch(err => {
            console.log(err);
        });

    }



}