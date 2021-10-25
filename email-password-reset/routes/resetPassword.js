const express = require('express');
const router = express.Router();
const resetpassword = require('../controllers/resetPassword')

router.post('/', resetpassword.sendMail)
router.post('/:userId/:token', resetpassword.Reset)

module.exports = router;