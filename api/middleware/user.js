module.exports = function(app) {

  const User = app.models.user

  this.index = (req, res, next) => {
    return res.redirect('/users')
  }

  this.getAll = (req, res, next) => {
    let users = User.find()
    return res.json(users)
  }

  this.getByName = (req, res, next) => {
    let user = User.findByName(req.params.name)
    return res.json(user)
  }

  return this
}
