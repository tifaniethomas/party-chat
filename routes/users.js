const express = require('express')
const router = express.Router()
const usersCtrl = require('../controllers/users')
const ensureLoggedIn = require('../config/ensureLoggedIn')

/* GET users listing. */
router.get('/users', ensureLoggedIn, usersCtrl.index) //user information like friends, messages, profile


module.exports = router
