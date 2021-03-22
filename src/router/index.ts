import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import indexPage from '../views/index'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: indexPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
