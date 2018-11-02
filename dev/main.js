import Vue from 'vue'
import App from './App'
import vueTabevents from '../dist/vue-tabevents.min.js'

Vue.use(vueTabevents)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
