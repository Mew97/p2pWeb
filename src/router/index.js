import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/view/main'
import Help from '@/view/Help'
import Home from '@/view/Home'
import Login from '@/view/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
