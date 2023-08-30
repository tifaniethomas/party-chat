const Chat = require('../models/chat')
const User = require('../models/user')

module.exports = {
    index,
    show,
    create,
    delete: deleteMessage,
}

async function index(req, res) {
    res.render('chats/index', { title: 'Party Chat' })
}

async function show(req, res) {
    console.log('hitting chats/show')
    const chat = await Chat.findOne({'chanName': req.params.id}).populate('messages.user')
    const users = await User.find({})
    res.render(`chats/${req.params.id}`, { title: `Party Chat - ${req.params.id}`, chat, users})
}

async function create(req, res) {
    console.log('hitting create/save')
    req.body.user = req.user
    const chat = await Chat.findOne({'chanName': req.params.id})
    chat.messages.push(req.body)
    try {
        await chat.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/chats/${req.params.id}`)
  }

  async function deleteMessage(req, res) {
    const chat = await Chat.findOne({'messages._id': req.params.id})
    console.log(`chatroom: ${chat}`)
    chat.messages.remove(req.params.id)
    await chat.save()
    res.redirect(`/chats/${chat.chanName}`)
  }