const Profile = require('../models/profile')
const User = require('../models/user')

module.exports = {
    index,
    new: newProfile,
    create,
    show,
    update,
    edit,
}

async function index(req, res) {
    const user = req.user.id
    const profile = Profile.findOne({user: `${user}`})
    const profileId = profile.id
    // console.log(profile)
    res.render('profiles/index', { title: 'My Profile', profileId })
}

function newProfile (req, res) {
    res.render('profiles/new', { title: 'New Profile', errorMsg: '' })
}

async function create(req, res) {
    console.log(`THIS IS USER:`,req.user)
    try {
        req.body.user = req.user._id
        const newProfile = await Profile.create(req.body)
        console.log(`THIS IS PROFILE:`, newProfile)
        await User.findByIdAndUpdate(req.user._id, { userProfile: newProfile._id })
        res.redirect(`/profiles/${newProfile._id}`)
    } catch (err) {
        console.log(err.message)
        res.render('profiles/new', { errorMsg: err.message, title: 'Error' })
    } 
}

async function show(req, res) {
    const profileId =  req.params.id
    console.log(profileId)
    const profile = await Profile.findById(profileId)
    res.render(`profiles/show`, { title: 'My Profile', profile})
}

async function edit(req, res) {
    const profile = await Profile.findOne({_id: req.params.id})
    if (!profile) return res.redirect('/profiles')
    res.render('profiles/edit', { profile })
}

async function update(req, res) {
    try {
        await Profile.findByIdAndUpdate(
            req.params.id,
            req.body 
        )
        return res.redirect(`/profiles/${req.params.id}`)
    } catch (err) {
        console.log(err.message)
        return res. redirect('/profiles')
    }
}