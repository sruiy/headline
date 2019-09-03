import Vue from 'vue'
import App from './App.vue'
import router from './beforeRouter'
import elementUi from 'element-ui'
import './style/index.less'
import 'element-ui/lib/theme-chalk/index.css'
import axios from './interceptors'
import Main from './components/components.vue'

Vue.use(Main)
Vue.use(axios)
// Vue.prototype.$axios = axios
Vue.use(elementUi)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
