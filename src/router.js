import Vue from 'vue'
import VueRouter from 'vue-router'

import Employees from './views/employees/Employees.vue'
import EmployeeDetails from './views/employees/EmployeeDetails.vue'
import Home from './views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/employees', component: Employees },
    { path: '/employees/:id', component: EmployeeDetails },
    { path: '/', component: Home },
  ]
})