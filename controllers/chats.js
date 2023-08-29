const Chats = require('../models/chat')

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
    const room = await req.params.id
    // const thisUser =  req.user._id
    res.render(`chats/${ room }`, { title: `Party Chat - ${ room }`})    // const userProfile = await Profile.findBy
}

async function create(req, res) {
    const room = req.params.id
    console.log(req.body)
    try {
      const message = await Chat.create(req.body);
      console.log(message)
      // Redirect to the new movie's show functionality 
      res.redirect(`/chats/${ room }`);
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render(`chats/${ room }`, { errorMsg: err.message });
    }
  }