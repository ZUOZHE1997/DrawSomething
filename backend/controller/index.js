const join = require('./join')
const disconnect = require('./disconnect')

module.exports = function Drawing(socket, io) {
  join(socket, io)
  disconnect(socket)
}
