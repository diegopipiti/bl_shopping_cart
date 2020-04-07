import Vue from 'vue';
import App from './app-bl/App.vue';
import store from './app-bl/store';

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
