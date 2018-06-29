import http from 'http'
import app from './expressServer'
const port = 7001
const server = http.createServer(app)
server.listen(port, () => {
  console.log(`server is running on port ${port}`)
})
