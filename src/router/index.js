import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './../pages/HomePage'
import AboutPage from './../pages/AboutPage'
import FaqPage from './../pages/FaqPage'
import RegisterPage from './../pages/RegisterPage'
import LoginPage from './../pages/LoginPage'

import { getAuth } from 'firebase/auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/faq',
    name: 'Faq',
    component: FaqPage,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
    meta: { onlyGuestUser: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: { onlyGuestUser: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, _, next) => {
  const isAuth = await getAuth().currentUser

  if (to.meta.onlyGuestUser) {
    if (isAuth) {
      next({ name: 'Home' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
