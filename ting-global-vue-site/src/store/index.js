import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import results from "./results";

import socket from "socket.io-client";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { auth, results },
  state: {
    io: socket("https://193.46.199.76")
    // io: socket("http://193.46.199.76:8087")
  },
  getters: {
    io(state) {
      return state.io;
    }
  }
});
