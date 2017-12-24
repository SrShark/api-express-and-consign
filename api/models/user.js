module.exports = function(app) {

  const users = [
    {name: 'Sam'},
    {name: 'Terry'},
    {name: 'Jeff'},
    {name: 'Hayden'}
  ]

  this.find = () => {
    return users
  }

  this.findByName = (name) => {
    for (let u in users) {
      if (users[u].name.toLowerCase() === name.toLowerCase()) {
        return users[u]
      }
    }
  }

  return this
}
