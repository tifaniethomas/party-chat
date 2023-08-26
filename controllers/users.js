const User = require('../models/user')

module.exports = {
    index,
}

async function index(req, res) {
    const thisUser =  req.user._id
    res.render(`/user/${thisUser}`)
}