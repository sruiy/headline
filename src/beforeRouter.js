import router from './router'
router.beforeEach((to, from, next) => {
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

export default router
