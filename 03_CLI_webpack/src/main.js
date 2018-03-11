import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueResource from 'vue-resource'

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap'
import 'popper.js'

Vue.config.productionTip = false;
Vue.use(VueResource);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
