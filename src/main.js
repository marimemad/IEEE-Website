import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue} from 'bootstrap-vue'
import { BootstrapVueIcons } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import AOS from 'aos'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import 'aos/dist/aos.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)

new Vue({
  created() {
    AOS.init({delay: 300});
  },
  router,
  render: h => h(App)
}).$mount('#app')
