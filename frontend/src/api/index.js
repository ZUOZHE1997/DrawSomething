import io from 'socket.io-client'

const socket = io('http://localhost:3000/play', {
  transports: ['websocket'],
})
export { socket, io }
