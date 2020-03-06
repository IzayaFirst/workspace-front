import Vue from 'vue';
import Vuex from 'vuex';
import candidate from './candidate'
Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    candidate,
  },
  strict: debug,
});