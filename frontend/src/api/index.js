import io from 'socket.io-client'
import { store } from '../store'
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
      // callback(data)
      alert("昵称重复!!")
    })
    socket.on('sayHello', (name, num) => {
      store.dispatch({ type: 'setUserName', name: name })
      store.dispatch({ type: 'GetUserNum', userNum: num })

      console.log('房间有', num, '人')
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
