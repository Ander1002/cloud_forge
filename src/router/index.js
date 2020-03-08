import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lista from '../components/Lista.vue'
import Dashboard from '../components/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Lista',
    name: 'Lista',
    component: Lista
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
