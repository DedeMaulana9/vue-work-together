import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const persistedstate = createPersistedState({
  paths: ['list'],
});

export default new Vuex.Store({
  plugins: [persistedstate],
  state: {
    list: [],
  },
  getters: {},
  mutations: {
    setList(state, payLoad) {
      state.list = payLoad;
    },
  },
  actions: {
    fetchNews(store) {
      axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=b841a35035064e8096fde7d14acccb88').then((response) => {
        store.commit('setList', response.data.articles);
      });
    },
  },
  modules: {},
});
