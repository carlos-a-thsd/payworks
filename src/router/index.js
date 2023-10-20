import { createRouter, createWebHistory } from "vue-router";
import DashboarView from "../views/DashboardView.vue";
import Infraestructura from "../views/Infraestructura.vue";
import ComerciosView from "../views/ComerciosView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: DashboarView,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
