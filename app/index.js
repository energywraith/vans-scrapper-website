const app = require('./app') // varsinainen Express-sovellus
const http = require('http')

const server = http.createServer(app)

server.listen((process.env.PORT || 3001), () => {
  console.log(`Server running on port 3001`)
})