const express = require('./lib/express')
const app = express()

app.get(function (req, res) {
  res.end('get success')
})

app.post(function (req, res) {
  res.end('post success')
})

app.listen(3000, () => {
  console.log(`The server is on the port 3000`)
})