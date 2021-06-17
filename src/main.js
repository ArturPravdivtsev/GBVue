import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import context from './plugins/contextMenu'
import modal from './plugins/modal'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(context)
Vue.use(modal)

new Vue({
  render: h => h(App),
  store,
  vuetify,
  router
}).$mount('#app')
