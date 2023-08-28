const express = require('express')
const router = express.Router()
const profilesCtrl = require('../controllers/profiles')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/profiles', ensureLoggedIn, profilesCtrl.index) //user information like friends, messages, profile
router.get('/profiles/:id', ensureLoggedIn, profilesCtrl.show) //shows someone's whole profile


module.exports = router