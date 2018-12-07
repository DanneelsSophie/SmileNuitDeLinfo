import Vue from 'vue'
import Router from 'vue-router'
import Modules from '@/components/Modules'
import NotFound from '@/components/NotFound'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/modules',
      name: 'Modules',
      component: Modules
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: '404',
      component: NotFound
    }
  ]
})
