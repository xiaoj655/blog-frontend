import { createRouter, createWebHistory } from 'vue-router'
import loginGuard from './guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('@/views/home/index.vue') 
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('@/views/login/index.vue')
    }
  ]
})

router.beforeEach(loginGuard)

export default router
