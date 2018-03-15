import Vue from 'vue'
import Router from 'vue-router'
import type from '@/components/type'
import cont from '@/components/cont'
import conti from '@/components/conti'
import regeist from '@/components/regeist'
import all from '@/components/all'
import xiangqing from '@/components/xiangqing'
import login from '@/components/login'
import myhome from '@/components/myhome'

import HelloWorld from '@/components/HelloWorld'
import Cart from '@/components/Cart'
//import 'swiper/dist/css/swiper.css'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
   	},
    {
      path: '/type',
      name: 'type',
      component: type
    },
    {
      path: '/conti',
      name: 'conti',
      component: conti
    },
    {
      path: '/cont',
      name: 'cont',
      component: cont
    },
    {
      path: '/regeist',
      name: 'regeist',
      component: regeist
    },
    {
      path: '/all',
      name: 'all',
      component: all
    },
    {
      path: '/xiangqing',
      name: 'xiangqing',
      component: xiangqing
    },
     {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/myhome',
      name: 'myhome',
      component: myhome
    }
  ]
})
