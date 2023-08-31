module.exports = function(req, res, next) {
    if ( req.user.userProfile ) return next()
    res.redirect('/profiles/new')
  }