import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Wechat from '../views/wechat/wechat.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'wechat',
    component: Wechat
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact/contact.vue')
  },
  {
    path: '/recover',
    name: 'recover',
    component: () => import('../views/recover/recover.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/mine/mine.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/detail/detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router