module.exports = function(app) {

  const user = app.middleware.user

  app.get('/', user.index)
  app.get('/users', user.getAll)
  app.get('/users/:name', user.getByName)

  return this
}
