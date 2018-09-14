const express = require('./lib/express')
const app = express()

app.get(function (req, res, next) {
  console.log(111)
  next()
}, function (req, res) {
  res.end('hello, world')
})

app.post(function (req, res) {
  res.end('post success')
})

app.listen(3000, () => {
  console.log(`The server is on the port 3000`)
})