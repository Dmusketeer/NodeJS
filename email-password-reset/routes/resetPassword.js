const express = require('express');
const router = express.Router();
const resetpassword = require('../controllers/resetPassword')

router.post('/sendresetlink', resetpassword.sendEmail)
router.post('/password-reset', resetpassword.Reset)

module.exports = router;