import axios from 'axios'
axios.interceptors.request.use(function (config) {
  let token = window.localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
//   debugger
}, function (err) {
  console.log(err)
})

export default axios
