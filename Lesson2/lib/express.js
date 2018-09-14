const http = require('http')
const methods = require('./methods')
const Layer = require('./Layer')

module.exports = function () {
  function app (req, res) {
    app.dispatch(req, res)
  }
  Object.setPrototypeOf(app, proto)
  app.init()
  return app
}

const proto = Object.create(null)

proto.listen = function () {
  const server = http.createServer(this)
  server.listen(...arguments)
}

proto.init = function () {
  this.router = []
  methods.forEach(method => {
    this[method] = function (fn) {
      const layer = new Layer(method, fn)
      this.router.push(layer)
    }
  })
}

proto.dispatch = function (req, res) {
  this.router.forEach(layer => {
    layer.handleRequest(req, res)
  })
}