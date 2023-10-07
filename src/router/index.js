import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/academic',
    name: 'academic project',
    component: () => import('../views/AcademicVue.vue')
  },
  {
    path: '/ExoTouch',
    name: 'ExoTouch',
    component: () => import('../views/ExoTouch.vue')
  },
  {
    path: '/electrostaticbrakes',
    name: 'Electrostatic brakes',
    component: () => import('../views/ElectrostaticbrakesVue.vue')
  },
  {
    path: '/rhim',
    name: 'RHIM',
    component: () => import('../views/rhimVue.vue')
  },
  {
    path: '/padders',
    name: 'Padders',
    component: () => import('../views/PaddersVue.vue')
  },
  {
    path: '/dvb',
    name: 'DVB',
    component: () => import('../views/DVBVue.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
