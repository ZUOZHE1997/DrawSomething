import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/homePage",
    name: "homePage",
    component: () => import("../views/DrawingBoard")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
