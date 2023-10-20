import { createRouter, createWebHistory } from 'vue-router'
import DashboarView from '../views/DashboardView.vue'
import ComerciosView from '../views/ComerciosView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: DashboarView
  },
  {
    path: '/comercios/:tipo',
    name: 'comercios',
    component: ComerciosView
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
