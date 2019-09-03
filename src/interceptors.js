import axios from 'axios'
import { Message } from 'element-ui'
import router from './beforeRouter'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

axios.interceptors.request.use(function (config) {
  let token = window.localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
  //   debugger
}, function (err) {
  return Promise.reject(err)
})

// 统一处理响应头
axios.interceptors.response.use(function (config) {
  //   debugger
  // 有data就返回data,没有就返回一个空对象(?)
  return config.data ? config.data : {} // config
}, function (err) {
  //   debugger
  let status = err.response.status
  let message = ''
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 401:
      message = 'token过期或未传~~~~'
      window.localStorage.clear('token') // token可能过期需要清空再次登录
      router.push('/login')
      break
    case 507:
      message = '服务器数据库异常'
      break
    case 403:
      message = '用户非实名认证用户，无权限登录'
      break
    case 404:
      message = '手机号不正确'
      break
    default:
      message = '未知错误'
      break
  }
  Message.warning(message)

  return new Promise(function () {}) // 返回一个promise对象表示错误处理完
})
// export default axios
export default {
  install (Vue) {
    Vue.prototype.$axios = axios
  }
}
