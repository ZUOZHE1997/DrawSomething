const data = require('./data')
const comment = require('./comment')

exports.leave = (socket) => {
  socket.emit('setUserNum', data.peoples.length) // 告诉其他人
}

exports.quit = (socket) => {
  socket.on('quit', async (name) => {
    console.log(name)
    // const index = data.peoples.indexOf(name)
    // if (index !== -1) {
    //   data.peoples.splice(index, 1)
    // }
    // console.log(`${name}离开了游戏`)
    // data.comments.push({ name: 'system', msg: `${data.user}离开了游戏` })
    // comment.sendComment(socket, io)
  })
}
