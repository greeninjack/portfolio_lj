const path = require('path')
const app = require("express")()

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../static', 'robots.txt'))

})

// Export your app
module.exports = app
