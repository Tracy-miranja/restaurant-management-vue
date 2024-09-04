import Home from "@/components/Home.vue";
import signUp from "@/components/SignUp.vue";
import { createWebHistory, createRouter } from "vue-router";
import Login from "@/components/Login.vue";

const routes = [
  { name: "Home", component: Home, path: "/" },
  { name: "signUp", component: signUp, path: "/signUp" },
  { name: "LoginForm", component: Login, path: "/Login" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
