const express = require('express')
const router = express.Router()
const chatsCtrl = require('../controllers/chats')
const ensureLoggedIn = require('../config/ensureLoggedIn')
const ensureProfile = require('../config/ensureProfile')

router.get('/', ensureLoggedIn, chatsCtrl.index)
router.get('/:id', ensureLoggedIn, ensureProfile, chatsCtrl.show)
router.post('/:id', ensureLoggedIn, ensureProfile, chatsCtrl.create)
router.delete('/:id', ensureLoggedIn, chatsCtrl.delete)



module.exports = router