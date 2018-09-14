const express = require('./lib/express')
const app = express()

app.listen(3000, () => {
  console.log(`The server is on the port 3000`)
})