import router from "./router";
import store from "./store";


router.beforeEach(to => {
  if (to.path === "/login") return true;
  else if (store.state.name === "") return { path: "/login" };
});
