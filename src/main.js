import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import AOS from 'aos';
import 'aos/dist/aos.css';

=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import  {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

Vue.config.productionTip = false

new Vue({
  created(){
    AOS.init();
  },
  router,
  render: h => h(App)
}).$mount('#app')
