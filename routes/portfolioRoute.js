const express = require('express')
const{ sendEmailController } = require('../controllers/portfolioController');
//router object
const router = express.Router()

//route
router.post('/sendEmail', sendEmailController);

//export
module.exports = router