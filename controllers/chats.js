const Chat = require('../models/chat')

module.exports = {
    index,
    show,
    create,
}

async function index(req, res) {
    console.log('hitting chats/index')
    res.render('chats/index', { title: 'Party Chat' })
}

async function show(req, res) {
    console.log('hitting chats/show')
    const msg = await Chat.findById(req.params.id).populate('messages')
    // const thisUser =  req.user._id
    res.render(`chats/${req.params.id}`, { title: `Party Chat - ${req.params.id}`, msg})    // const userProfile = await Profile.findBy
}

async function create(req, res) {
    // console.log(req)
    req.body.userName = req.user
    const chat = await Chat.findOne({'chanName': req.params.id});
    chat.messages.push(req.body)
    try {
        console.log('hitting create/save')
        await chat.save()
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/chats/${req.params.id}`);
  }