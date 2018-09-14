const http = require('http')

module.exports = function () {
  function app (req, res) {
    res.end('hello, world')
  }
  Object.setPrototypeOf(app, proto)
  return app
}

const proto = Object.create(null)

proto.listen = function () {
  const server = http.createServer(this)
  server.listen(...arguments)
}