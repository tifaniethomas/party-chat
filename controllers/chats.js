const Chat = require('../models/chat')
const User = require('../models/user')

module.exports = {
    index,
    show,
    create,
    delete: deleteMessage,
}

async function index(req, res) {
    console.log('hitting chats/index')
    res.render('chats/index', { title: 'Party Chat' })
}

async function show(req, res) {
    console.log('hitting chats/show')
    const chat = await Chat.findOne({'chanName': req.params.id})
    const users = await User.find({})
    console.log(chat, users)
    res.render(`chats/${req.params.id}`, { title: `Party Chat - ${req.params.id}`, chat, users})
}

async function create(req, res) {
    // console.log(req)
    req.body.userName = req.user
    const chat = await Chat.findOne({'chanName': req.params.id}).populate('messages.user')
    chat.messages.push(req.body)
    try {
        console.log('hitting create/save')
        await chat.save()
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/chats/${req.params.id}`);
  }

  async function deleteMessage(req, res) {
    const chatroom = req.chanName
    console.log(`chatroom: ${chatroom}`)
    const chat = await Chat.findOne({ 'messages._id': req.params.id, 'message.user': req.user._id })
    console.log(`chat: ${chat}`)
    chat.messages.remove(req.params.id)
    await chat.save()
    res.redirect(`/movies/${chatroom}`)
  }