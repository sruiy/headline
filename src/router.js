import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login'
import Home from './views/home'
import homeMain from './components/home/secondRouter/homemain.vue'

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
        { path: '', component: homeMain }
        // { path: 'publish', component: homeMain },
        // { path: 'articles', component: homeMain },
        // { path: 'comment', component: homeMain },
        // { path: 'material', component: homeMain },
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
