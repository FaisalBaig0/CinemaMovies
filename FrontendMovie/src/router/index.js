import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from "@/layouts/MainLayout.vue"

import SignUpPage from '../views/SignUpPageView.vue'
import LoginPageView from '../views/LoginPageView.vue';
import MoviesPageView from '../views/MoviesPageView.vue'
import LogoutPage from '../components/LogoutPage.vue'
import UpdateMovies from '../components/UpdateMovies.vue';
import ChangePassword from '../components/ChangePassword.vue'
import PageNotFound from '../components/PageNotFound.vue'

const routes = [
  {
    name: "MainLayout",
    path: "/",
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'signUp',
        component: SignUpPage
      },
      {
        path: '/login',
        name: 'login',
        component: LoginPageView
      },
      {
        path: '/movies',
        name: 'movies',
        component: MoviesPageView
      },
      {
        path: '/logout',
        name: 'logout',
        component: LogoutPage
      },
      {
        path: '/update/:id',
        name: 'update',
        component: UpdateMovies
      },
      {
        path: '/password',
        name: 'password',
        component: ChangePassword
      },
    ]
  },
  {
    path: '/:catchAll(.*)',
    component: PageNotFound

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
