const data = require('./data')

module.exports = function disconnect(socket) {
  socket.on('disconnect', async (asd) => {
    console.log('out ', asd)
    const index = data.peoples.indexOf(data.user)
    if (index !== -1) {
      data.peoples.splice(index, 1)
    }
    io.sockets.in('room1').emit('sayHello', data.peoples.length)
  })
}
