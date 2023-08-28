const Profile = require('../models/profile')

module.exports = {
    index,
    show,
}

async function index(req, res) {
    console.log('getting here')
    res.render('profiles/index', { title: 'My Profile' })
}

async function show(req, res) {
    const thisUser =  req.user._id
    const userProfile = await Profile.findById(thisUser)
    res.render(`/profiles/${thisUser}`, { title: 'My Profile', userProfile})
}