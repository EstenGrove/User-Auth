import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {
      username: '',
      loggedIn: false,
      is_admin: false,
      token: null
    }
  },
  getters: {

  },
  mutations: {
    addToken(state, token) {
      state.user.authToken = webToken;
    },
    removeToken(state, token) {
      state.user.authToken = null;
    }
  },
  actions: {

  }
})
