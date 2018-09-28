import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

import '@/style/theme'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
