import Vue from 'vue'

import App from '@/App.vue'
import formatDateTime from '@/lib/datetime'
import store from '@/store'

Vue.config.productionTip = false

Vue.filter('toTextFromNow', content => formatDateTime(content))

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
