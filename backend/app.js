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
// app.use(handleCors)
app.use(cors(handleCors))

const server = http.createServer(app.callback())
const io = socket(server)
server.listen(port, () => {
  console.log('Service started successfully 🍻')
})

let peoples = []
let user = ""
io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('join', async (username) => {
    console.log('username is ', username)
    user = username
    if (!peoples[username]) {
      socket.join('room1') // 加入房间
      peoples.push(user)
      console.log(peoples)
      io.sockets.in('room1').emit('sayHello', peoples)
    } else {
      socket.emit('repeatName', false)
    }
  })
  socket.on('disconnect', async () => {
    console.log('out ')
    // console.log
    const index = peoples.indexOf(user)
    if (index !== -1) {
      peoples.splice(index, 1)
    }
  })

  socket.on('disconnect', async function () {})
})
