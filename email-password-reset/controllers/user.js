const express = require('express')
const router = express.Router()
const { User, validate } = require('../models/user')

module.exports.Save = async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const user = await new User(req.body).save();
        res.send(user);
    } catch (error) {
        res.send("An error occured in user");
        console.log(error);
    }
}
