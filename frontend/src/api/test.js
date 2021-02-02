
// io.on(‘connection’, function(socket) {
//     socket.on(‘message’, function(data) {
//           // 1.广播给自己
//           socket.emit(‘message’, data);
//           // 2. 广播给除了自己的其它客户端
//           socket.broadcast.emit(‘message’, data);
//           // 3. 广播给所有客户端
//           io.emit(‘message’, data);  // 等同于 io.sockets.emit()
//     });
// });