import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/components/HelloWorld.vue'),
  },
  {
    path: '/:micro(micro-app):endPath(.*)',
    name: 'MicroApp',
    meta: { title: '微前端应用' },
    component: () => import('@/micro/MicroApp.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
