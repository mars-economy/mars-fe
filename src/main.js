import Vue from 'vue'
import VueFlex from 'vue-flex'
import 'vue-flex/dist/vue-flex.css'
import VModal from 'vue-js-modal'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGtag from 'vue-gtag'
import { apolloProvider } from './plugins/apollo/apollo'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

Vue.config.productionTip = false
Vue.use(VueFlex)
Vue.use(VModal)
Vue.use(VueGtag, {
  config: {
    id: 'G-M1VEG7HVF6'
  }
}, router)
Vue.use(VueLodash, {
  lodash: lodash
})

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
