import { createWebHistory, createRouter } from 'vue-router'
import Layout from '/src/layout/index.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Layout
    }
  ]
})