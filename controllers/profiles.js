const Profile = require('../models/profile')

module.exports = {
    show,
}

async function show(req, res) {
    const thisUser =  req.user._id
    res.render(`/profiles/${thisUser}`)
}