import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from '../views/SignIn.vue'
import LogIn from '../views/LogIn.vue'
import Begginer from '../views/BeggiNer.vue'
import Intermediaire from '../views/IntermeDiaire.vue'
import Master from '../views/MastEr.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/begginer',
    name: 'begginer',
    component: Begginer
  },
  {
    path: '/intermediaire',
    name: 'intermediaire',
    component: Intermediaire
  },
  {
    path: '/master',
    name: 'master',
    component: Master
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
