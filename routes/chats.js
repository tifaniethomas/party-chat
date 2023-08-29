const express = require('express')
const router = express.Router()
const chatsCtrl = require('../controllers/chats')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, chatsCtrl.index) //user information like friends, messages, profile
router.get('/:id', ensureLoggedIn, chatsCtrl.show) //shows someone's whole profile
router.post('/', ensureLoggedIn, chatsCtrl.create)


module.exports = router