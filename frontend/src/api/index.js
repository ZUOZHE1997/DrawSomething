import io from 'socket.io-client'

const socket = io('http://localhost:3001', {
  transports: ['websocket'],
})
let name = ''
const connect = (callback) => {
  socket.on('connect', () => {
    console.log('in line')
    socket.on('send', (data) => {
      console.log(data)
    })
    socket.on('repeatName', (data) => {
      console.log(data)
      if (!data) callback(false)
    })
    socket.on('sayHello', (data) => {
      console.log(data, 'success')
    })
    socket.on('disconnect', name)
    console.log(socket.id)
  })
}

const send = (username) => {
  name = username
  socket.emit('join', username)
}

export { send, connect }
