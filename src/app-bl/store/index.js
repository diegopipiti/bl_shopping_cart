import Vue from 'vue';
import Vuex from 'vuex';
import product from './modules/product';
import cart from './modules/cart';
import sniper from './modules/sniper';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    product,
    cart,
    sniper
  }
});
