import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import Store from './store'

Vue.config.productionTip = false

Vue.use(Vuex)

new Vue({
  render: h => h(App),
  Store,
}).$mount('#app')
