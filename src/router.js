import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import Guideline from './views/Guideline'
import Table from './views/Table'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/guideline',
      name: 'guideline',
      component: Guideline
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    },
  ]
})