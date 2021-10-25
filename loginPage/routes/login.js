const express = require('express')

const router = express.Router()
const doLogin = require('../controllers/user')

router.post('/login', doLogin.login)

module.exports = router