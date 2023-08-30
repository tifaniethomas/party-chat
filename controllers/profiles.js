const Profile = require('../models/profile')

module.exports = {
    index,
    show,
    create,
}

async function index(req, res) {
    console.log('getting here')
    res.render('profiles/index', { title: 'My Profile' })
}

async function show(req, res) {
    const user =  req.user.id
    const userProfile = await Profile.findById(user)
    res.render(`/profiles/${user}`, { title: 'My Profile', userProfile})
}

async function create(req, res) {
    console.log('getting to profiles/create')
//    try {
//     const profile = await Profile.create(req.body)
//     res.redirect(`/profiles/${user._id}`)
//    } catch (err) {
//     console.log(err)
//     res.render('profiles/new', { errorMsg: err.message })
//    } 
}