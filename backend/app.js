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

io.of('/play').on('connection', (socket) => {
  console.log('a user connected')

  socket.join('room1') // 加入房间
  io.emit("send","new user join")
  // socket.leave('room2') // 离开房间
  //监听客户端断开连接
  socket.on('disconnect', async function () {})
})
