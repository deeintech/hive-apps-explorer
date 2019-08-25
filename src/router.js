import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/trx',
      name: 'trx',
      component: () => import(/* webpackChunkName: "transactions" */ './views/Transactions.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/tribeslist',
      name: 'tribeslist',
      component: () => import(/* webpackChunkName: "tribeslist" */ './views/TribesList.vue')
    },
    {
      path: '/trx/:trxId',
      name: 'trxItem',
      props: true,
      component: () => import(/* webpackChunkName: "transaction" */ './views/TransactionItem.vue')
    },
    {
      path: '*',
      name: 'notFound',
      component: () => import(/* webpackChunkName: "notfound" */ './views/PageNotFound.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
