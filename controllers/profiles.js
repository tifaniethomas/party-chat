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
    console.log('getting to profiles/create')
    try {
        req.body.user = req.user._id
        const newProfile = await Profile.create(req.body)
        await User.findByIdAndUpdate(req.user._id, { profile: newProfile._id })
        res.redirect(`/profiles/${newProfile.id}`)
    } catch (err) {
        console.log(err)
        res.render('profiles/new', { errorMsg: err.message, title: 'Error' })
    } 
}

async function show(req, res) {
    const profileId =  req.params._id
    console.log(profileId)
    const userProfile = await Profile.findById({profileId})
    res.render(`/profiles/${profileId}`, { title: 'My Profile'})
}

async function edit(req, res) {
    const profile = await Profile.findOne({_id: req.params.id})
    if (!profile) return res.redirect('/profiles')
    res.render('profiles/edit', { profile })
}

async function update(req, res) {
    try {
        const updatedProfile = await Profile.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true} 
        )
        return res.redirect(`/profiles/${updatedProfile._id}`)
    } catch (err) {
        console.log(err.message)
        return res. redirect('/profiles')
    }
}