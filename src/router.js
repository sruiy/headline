import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login'
import Home from './views/home'
import homeMain from './views/home/homemain.vue'
// import Comment from './views/comment'
// import Material from './views/material'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        { path: '', component: homeMain },
        // { path: 'publish', component: homeMain },
        { path: 'articles', component: () => import('./views/articles') },
        { path: 'comment', component: () => import('./views/comment') },
        { path: 'material', component: () => import('./views/material') }
        // { path: 'fansdata', component: homeMain },
        // { path: 'fansinfo', component: homeMain },
        // { path: 'fansimg', component: homeMain },
        // { path: 'fanslist', component: homeMain },
        // { path: 'account', component: homeMain }

      ]
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
