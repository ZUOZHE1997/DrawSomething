const data = require('./data')
const comment = require('./comment')
// const leave = require('./leave')

module.exports = function disconnect(socket, io) {
  socket.on('disconnect', async (data) => {
    console.log(data)
    // socket.emit('')
    // const index = data.peoples.indexOf(data.user)
    // if (index !== -1) {
    //   data.peoples.splice(index, 1)
    // }
    // console.log(`${data.user}离开了游戏`)
    // data.comments.push({ name: 'system', msg: `${data.user}离开了游戏` })
    // comment.sendComment(socket, io)
    // io.sockets.in('room1').emit('sayHello', name,data.peoples.length)
  })
}
