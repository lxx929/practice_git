// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Header from './components/Head.vue';
import Footer from './components/Foot.vue';

Vue.config.productionTip = false;

Vue.component("Header", Header);
Vue.component("Footer", Footer);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
