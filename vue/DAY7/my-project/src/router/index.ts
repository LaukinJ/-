import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import axios from 'axios'
import qs from 'qs'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/hi',
    name: 'hi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/mine.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach(async (to, from, next) => {
  let statue = await axios.post('http://localhost:3000/autologin', qs.stringify({
      // 从cookie拿
      token: ''
  }))
  // console.log(statue.data, to, from)

  // 令牌信息为真则进路由
  // 如果令牌为真，不过怎样都放它进路由
  if (statue.data) {
      next()
  }
  // 令牌为假或者没有令牌的情况
  else {
      // 如果你想在想进login登录页，放你进去
      if (to.name == 'login') {
          next()
      } 
      // 如果你想去其他页面的话，通通重定向到登录页
      else {
          // 进入登录页路由
          router.push({
              name: 'login'
          })
      }
  }
  // console.log(to, from, next)
  // next触发就可以让你通行进入路由

})

export default router
