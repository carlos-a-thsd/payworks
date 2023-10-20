import { createRouter, createWebHistory } from "vue-router";
import DashboarView from "../views/DashboardView.vue";
import Infraestructura from "../views/Infraestructura.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: DashboarView,
  },

  {
    path: "/infraestructura",
    name: "infraestructura",
    component: Infraestructura,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
