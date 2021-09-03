import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('../views/Store.vue')
  },
  {
    path: '/car/:name-:id',
    name: 'Car',
    component: () => import('../views/Car.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
