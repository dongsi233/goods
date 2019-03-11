import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Product.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'routeActive',
  
  routes: [
    {
      path: '/',
      name: 'home',
      cnName: '商品',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      cnName: '评论',
      component: () => import(/* webpackChunkName: "about" */ './views/Detail.vue')
    },
    {
      path: '/merchant',
      name: 'merchant',
      cnName: '商家',
      component: () => import('./views/Merchant.vue')
    }
  ]
})
