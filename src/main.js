import Vue from 'vue'
import App from './App.vue'
import VueDisqus from 'vue-disqus'
import router from './router'

Vue.use(VueDisqus)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
