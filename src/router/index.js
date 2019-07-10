import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/view/main'

import Help from '@/view/Help'

import Home from '@/view/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/test',
      name: 'Home',
      component: Home
    }
  ]
})
