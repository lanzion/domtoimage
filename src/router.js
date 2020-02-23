import Vue from "vue";
import Router from "vue-router";
const Home = () => import("@/views/Home");
const Login = () => import("@/views/Login");

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "home",
      component: Login
    }
  ]
});
