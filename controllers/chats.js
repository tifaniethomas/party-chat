const Chats = require('../models/chat')

module.exports = {
    index,
    show,
}

async function index(req, res) {
    console.log('hitting chats/index')
    res.render('/index', { title: 'Party Chat' })
}

async function show(req, res) {
    console.log('hitting chats/show')
    // const thisUser =  req.user._id
    // const userProfile = await Profile.findById(thisUser)
    // res.render(`/${req.chanName}`, { title: `Party Chat - ${req.chanName}`})
}