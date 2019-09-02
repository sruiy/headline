import axios from 'axios'
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
  return config.data
}, function (err) {
  return Promise.reject(err)
})
export default axios
