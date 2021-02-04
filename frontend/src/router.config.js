import { Home } from './views/Home'
import { Login } from './views/Login'

export const routers = [
  {
    path: '/',
    component: Login,
    auth: false,
  },
  {
    path: '/home',
    component: Home,
    auth: true,
  },
]
