const express = require('express');
const Users = require('../controllers/user')
const router = express.Router();

router.post('/save', Users.Save)

module.exports = router;