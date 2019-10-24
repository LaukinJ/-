import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.config.productionTip = false
const store = new Vuex.Store({
  state: {
    author: 'liu'
  },
  getters: {
    getAuthor(state) {
      return 'Mr.' + state.author
    }
  },
  mutations: {
    setAuthor(state, data) {
      state.author = data
    }
  }

})
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')