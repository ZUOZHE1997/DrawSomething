import io from "socket.io-client";
import store from "./store";
import router from "./router";

console.log(store, router);
const socket = io("http://localhost:3001", {
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
  socket.on("sayHello", async (name, num) => {
    await store.dispatch("setName", name);
    await store.dispatch("setUserNumber", num);
    await router.push("/homePage");
    console.log("房间有", num, "人");
  });
  socket.on("disconnect", name);
};

const send = username => {
  name = username;
  socket.emit("join", username);
};
export { send, connect };
