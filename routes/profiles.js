const express = require('express')
const router = express.Router()
const profilesCtrl = require('../controllers/profiles')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, profilesCtrl.index) //user information like friends, messages, profile
router.get('/new', ensureLoggedIn, profilesCtrl.new)
router.post('/', ensureLoggedIn, profilesCtrl.create)
router.get('/:id', ensureLoggedIn, profilesCtrl.show) //shows someone's whole profile
router.get('/:id/edit', ensureLoggedIn, profilesCtrl.edit)
router.put('/:id', ensureLoggedIn, profilesCtrl.update)

module.exports = router