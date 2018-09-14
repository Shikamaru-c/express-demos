const express = require('./lib/express')
const app = express()

app.get(function (req, res, next) {
  console.log(111)
  next()
}, function (req, res, next) {
  res.end('hello, world')
  next()
})

app.get('/', function (req, res, next) {
  console.log(222)
})

app.listen(3000, () => {
  console.log(`The server is on the port 3000`)
})