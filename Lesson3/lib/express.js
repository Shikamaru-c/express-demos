const http = require('http')
const methods = require('./methods')
const Layer = require('./Layer')

module.exports = function () {
  function app (req, res) {
    app.handle(req, res)
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
}

methods.forEach(method => {
  proto[method] = function () {
    const fns = [...arguments]
    fns.forEach(fn => {
      if (typeof fn !== 'function') return
      const layer = new Layer (method, fn)
      this.router.push(layer)
    })
  }
})

proto.handle = function (req, res) {
  const router = this.router
  let id = 0
  next()
  function next () {
    router[id++].handleRequest(req, res, next)
  }
}

