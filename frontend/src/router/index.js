import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/UserListView'
import Login from '../views/LoginView'
import SignUp from '../views/SignUpView'
const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: SignUp
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
