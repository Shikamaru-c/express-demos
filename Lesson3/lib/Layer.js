function Layer (method, fn) {
  this.method = method
  this.handle = fn
}

Layer.prototype.handleMethod = function (req) {
  return this.method === req.method.toLowerCase()
}

Layer.prototype.handleRequest = function (req, res, next) {
  if (!this.handleMethod) return next()
  try {
    this.handle(req, res, next)
  } catch (err) {
    throw err
  }
}

module.exports = Layer