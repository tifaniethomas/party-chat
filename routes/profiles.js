const express = require('express')
const router = express.Router()
const profilesCtrl = require('../controllers/profiles')
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET users listing. */
router.get('/profiles/:id', ensureLoggedIn, profilesCtrl.show) //user information like friends, messages, profile


module.exports = router