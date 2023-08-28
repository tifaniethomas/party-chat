const express = require('express')
const router = express.Router()
const chatsCtrl = require('../controllers/chats')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/chats', ensureLoggedIn, chatsCtrl.index) //user information like friends, messages, profile
router.get('/chats/:id', ensureLoggedIn, chatsCtrl.show) //shows someone's whole profile


module.exports = router