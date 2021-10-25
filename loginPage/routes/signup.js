const express = require('express')

const router = express.Router()
const doSignup = require('../controllers/user')

router.post('/signup', doSignup.signup)

module.exports = router