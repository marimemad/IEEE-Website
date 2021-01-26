import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import CS from '../views/CS.vue'
import RAS from '../views/RAS.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cs-committee',
    name: 'CS',
    component: CS
  },
  {
    path: '/ras-committee',
    name: 'RAS',
    component: RAS
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
