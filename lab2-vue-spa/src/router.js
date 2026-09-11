import { createRouter, createWebHistory } from 'vue-router'
import PrizesView from './views/PrizesView.vue'
import LaureatsView from './views/LaureatsView.vue'

const routes = [
  {
    path: '/',
    redirect: '/prizes'
  },
  {
    path: '/prizes',
    name: 'Prizes',
    component: PrizesView
  },
  {
    path: '/laureats',
    name: 'Laureats',
    component: LaureatsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router