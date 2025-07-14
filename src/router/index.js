import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/:lang',    
    children: [
      {
        path: 'index',
        name: 'Index',
        component: HomePage
      },
      {
        path: 'anonymous',
        name: 'Anonymous',
        component: HomePage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
