import router from "./router";
import store from "./store";

console.log(router);
router.beforeEach(to => {
  if (to.path === "/login") return true;
  else if (store.state.name === "") return { path: "/login" };
});
