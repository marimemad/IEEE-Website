import Vue from 'vue'
import App from './App.vue'
import router from './router'

import AOS from 'aos'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import FollowUs from './components/FollowUs.vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.component('follow-us', FollowUs)
AOS.init();


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
