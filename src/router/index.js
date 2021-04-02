import Vue from 'vue'
import VueRouter from 'vue-router'
import SlidesLayout from '../views/slides/layout/SlidesLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: SlidesLayout,
    children: [
      {
        path: '/',
        name: 'Slides',
        component: () => import('@/views/slides/Slides')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
