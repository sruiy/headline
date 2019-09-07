import router from './router'
import NProgress from 'nprogress'
import '../node_modules/nprogress/nprogress.css'
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.path.startsWith('/home')) {
    let token = window.localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
router.afterEach(() => {
  NProgress.done()
})

export default router
