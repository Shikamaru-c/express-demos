function Layer (method, path = '*', fn) {
  this.method = method
  this.path = path
  this.handle = fn
}

Layer.prototype.handleMethod = function (req) {
  return this.method === req.method.toLowerCase()
}

Layer.prototype.handlePath = function (req) {
  if (this.path === '*' || this.path === req.url) {
    return true
  } else {
    return false
  }
}

Layer.prototype.handleRequest = function (req, res, next) {
  if (!this.handleMethod || !this.handlePath || this.handle.length > 3) return next()
  try {
    this.handle(req, res, next)
  } catch (err) {
    next(err)
  }
}

Layer.prototype.handleError = function (err, req, res, next) {
  if (!this.handleMethod || !this.handlePath || this.handle.length !== 4) return next(err)
  try {
    this.handle(err, req, res, next)
  } catch (err) {
    next(err)
  }
}

module.exports = Layer