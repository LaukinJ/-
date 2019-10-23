import Vue from 'vue'
import VueRouter from 'vue-router'
import Wechat from '../views/wechat/wechat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'wechat',
    component: Wechat
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact/contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
