const express = require('./lib/express')
const app = express()

app.get('/', function (req, res, next) {
  throw(new Error('error'))
})

app.get('/', function (req, res, next) {
  console.log('can i used?')
})

app.get('/', function (err, req, res, next) {
  console.log(err)
  next()
})

app.get('/', function (req, res, next) {
  res.end('hello, world')
})

app.listen(3000, () => {
  console.log(`The server is on the port 3000`)
})