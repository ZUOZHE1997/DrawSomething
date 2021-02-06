const join = require('./join')
const disconnect = require('./disconnect')
const comments = require('./comment')
const leave = require('./leave')
const data = require('./data')
// console.log(comments)
module.exports = function Drawing(socket, io) {
  // console.log(data)
  join(socket, io) // 加入的方法
  disconnect(socket, io) // 失去链接的方法
  comments.setComment(socket, io) // 评论的方法
  comments.sendComment(socket, io) // 发送评论的方法
  leave.quit(socket)
}
