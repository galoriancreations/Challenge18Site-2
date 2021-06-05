import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import results from "./results";

import socket from "socket.io-client";
import { baseURL } from "../util/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { auth, results },
  state: {
    io: socket(baseURL)
  },
  getters: {
    io(state) {
      return state.io;
    }
  }
});
