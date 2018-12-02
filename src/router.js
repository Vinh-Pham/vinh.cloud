import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Psyduck from '@/views/Psyduck'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/psyduck',
      name: 'psyduck',
      component: Psyduck
    }
  ]
})
