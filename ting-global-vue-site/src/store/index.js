import Vue from "vue";
import Vuex from "vuex";
import user from "./user";
import results from "./results";

import socket from "socket.io-client";
import { baseURL } from "../util/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { user, results },
  state: {
    io: socket(baseURL)
  },
  getters: {
    io(state) {
      return state.io;
    }
  }
});
