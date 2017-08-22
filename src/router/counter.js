import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
  	increment_counter: state => state.count++,
    decrement_counter: state => state.count--
  }
});
export default store;