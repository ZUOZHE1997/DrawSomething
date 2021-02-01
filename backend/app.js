const Koa = require('koa')

const port = require('./config').port
const router = require('koa-router')()
const routers = require('./router/index')
const http = require('http')
const socket = require('socket.io')
const cors = require('@koa/cors')
const handleCors = require('./lib/cors')

const app = new Koa()

app.use(routers.routes())
app.use(router.allowedMethods())
app.use(handleCors)
// app.use(cors(handleCors))

const server = http.createServer(app.callback())
const io = socket(server)
server.listen(port, () => {
  console.log('Service started successfully 🍻')
})

//监听客户端连接 每个client对应一个开着的浏览器窗口

let msg = []

io.of('/chat').on('connection', (socket) => {
  console.log('a user connected')

  socket.on('message', async function (message) {
    if (msg.length > 100) msg.length = 0
    msg.push(message)
    socket.broadcast.emit('send', msg)
    socket.emit('send', msg)
  })
  //监听客户端断开连接
  socket.on('disconnect', async function () {})
})
