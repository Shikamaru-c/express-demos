function Layer (method, fn) {
  this.method = method
  this.handle = fn
}

Layer.prototype.handleMethod = function (req) {
  return this.method === req.method.toLowerCase()
}

Layer.prototype.handleRequest = function (req, res) {
  if (!this.handleMethod) return
  try {
    this.handle(req, res)
  } catch (err) {
    throw err
  }
}

module.exports = Layer