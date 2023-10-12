import { createRouter, createWebHistory } from 'vue-router'
import DashboarView from '../views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: DashboarView
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
