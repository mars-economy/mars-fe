import Vue from 'vue'
import VueFlex from 'vue-flex'
import 'vue-flex/dist/vue-flex.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueFlex)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
