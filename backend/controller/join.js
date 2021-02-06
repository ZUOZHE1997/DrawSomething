const data = require('./data')
const comment = require('./comment')
// const leave = require('./leave')

module.exports = function join(socket, io) {
  socket.on('join', async (username) => {
    // console.log('username is ', username)
    if (!data.peoples.includes(username)) {
      data.user = username
      socket.join('room1') // 加入房间
      data.peoples.push(username) // 保存name
      // console.log(data)
      // io.sockets.in('room1').emit('sayHello', username, data.peoples.length) // 告诉其他人
      socket.emit('setName', username) // 告诉其他人
      // socket.emit('setUserNum' , data.peoples.length) // 告诉其他人

      await data.comments.push({ name: 'system', msg: `${username}加入游戏` })
      await comment.sendComment(socket, io)
      // await leave.leave(socket)
    } else {
      socket.emit('repeatName', true)
    }
  })
}
