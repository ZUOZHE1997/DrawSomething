import io from 'socket.io-client'

const socket = io('http://localhost:3001/play', {
  transports: ['websocket'],
})
export { socket, io }
