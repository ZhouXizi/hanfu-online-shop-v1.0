import { createRouter, createWebHistory } from "vue-router";
// import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ShoppingPage from "../views/ShoppingPage.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shoppingPage",
    name: "ShoppingPage",
    component: ShoppingPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
