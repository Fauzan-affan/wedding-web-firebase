import Vue from 'vue'
import App from './App.vue'
import VueDisqus from 'vue-disqus'
import VueJsModal from 'vue-js-modal'

Vue.use(VueDisqus)
Vue.use(VueJsModal)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
