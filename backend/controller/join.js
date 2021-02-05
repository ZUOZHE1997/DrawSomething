const data = require('./data')

module.exports = function join(socket, io) {
  socket.on('join', async (username) => {
    console.log('username is ', username)
    if (!data.peoples.includes(username)) {
      data.user = username
      socket.join('room1') // 加入房间
      data.peoples.push(username)
      console.log(data.peoples)
      io.sockets.in('room1').emit('sayHello', username, data.peoples.length)
    } else {
      socket.emit('repeatName', true)
    }
  })
}
