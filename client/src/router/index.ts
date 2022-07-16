import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from '../views/SignIn.vue'
import LogIn from '../views/LogIn.vue'
import Beginner from '../views/BeginNer.vue'
import Intermediate from '../views/IntermeDiate.vue'
import Master from '../views/MastEr.vue'
import About from '../views/AboutView.vue'
import VideoBeginner from '../views/VideoBeginner.vue'
import VideoIntermediate from '../views/VideoIntermediate.vue'
import VideoMaster from '../views/VideoMaster.vue'
import UserProfile from  '../views/UserProfile.vue'

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
    component: About
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
    path: '/sheet/beginner',
    name: 'beginner',
    component: Beginner
  },
  {
    path: '/sheet/intermediate',
    name: 'intermediate',
    component: Intermediate
  },
  {
    path: '/sheet/master',
    name: 'master',
    component: Master
  },
  {
    path: '/videobeginner',
    name: 'videobeginner',
    component: VideoBeginner
  },
  {
    path: '/videointermediate',
    name: 'videointermediate',
    component: VideoIntermediate
  },
  {
    path: '/videomaster',
    name: 'videomaster',
    component: VideoMaster
  },
  {
    path : '/profile',
    name : 'profile',
    component : UserProfile
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
