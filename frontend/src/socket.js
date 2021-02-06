import io from "socket.io-client";
import store from "./store";
import router from "./router";

const url = "http://localhost:3001";
// console.log(store, router);
const socket = io(url, {
  transports: ["websocket"]
});
let name = "";
const connect = () => {
  socket.on("connect", () => {
    console.log("in line");

    console.log(socket.id);
  });
  socket.on("send", data => {
    console.log(data);
  });
  socket.on("repeatName", data => {
    console.log(data);
    alert("昵称重复!!");
  });
  socket.on("setName", async name => {
    await store.dispatch("setName", name);
    await router.push("/homePage");
  });
  socket.on("setUserNum", num => {
    console.log(num);
    store.dispatch("setUserNumber", num);
  });
  socket.on("sendComment", data => {
    store.dispatch("setComment", data);
    console.log("接受的评论消息", data);
  });

  socket.on("disconnect", () => {
    socket.emit("quit", name);
  });
};

const send = username => {
  name = username;
  socket.emit("join", username);
};
const sendComment = msg => {
  console.log(msg);
  socket.emit("comment", msg);
};
export { send, connect, sendComment };
