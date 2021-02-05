const Koa = require('koa')

const port = require('./config').port
const router = require('koa-router')()
const routers = require('./router/index')
const http = require('http')
const socket = require('socket.io')
const cors = require('@koa/cors')
const handleCors = require('./lib/cors')

const app = new Koa()
const Drawing = require('./controller/index')

app.use(routers.routes())
app.use(router.allowedMethods())

app.use(cors(handleCors))

const server = http.createServer(app.callback())
const io = socket(server)
server.listen(port, () => {
  console.log('Service started successfully 🍻')
})

io.on('connection', (socket) => {
  console.log('a user connected')
  Drawing(socket, io)
})
