const data = require('./data')
const leave = require('./leave')
exports.setComment = (socket, io) => {
  socket.on('comment', async (message) => {
    // console.log(message)
    data.comments.push({ name: message.name, msg: message.msg })
    io.sockets.in('room1').emit('sendComment', data.comments)
  })
}
exports.sendComment = async (socket, io) => {
  await io.sockets.in('room1').emit('sendComment', data.comments)
  await leave.leave(socket)
}
