import Vue from 'vue'
import App from './App.vue'
import  {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import VueRouter from 'vue-router'
import router from './router'
import AOS from 'aos';

import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'aos/dist/aos.css';

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init({delay: 300});
  },
  router,
  render: h => h(App)
}).$mount('#app')
