import Vue from 'vue'
import App from './App.vue'
import router from './router'
import elementUi from 'element-ui'
import './style/index.less'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import Main from './components/main.vue'
Vue.use(Main)
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.use(elementUi)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
