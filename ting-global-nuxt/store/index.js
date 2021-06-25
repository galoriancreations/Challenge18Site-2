import Vuex from "vuex";

import user from "./user";
import results from "./results";
import players from "./players";

import socket from "socket.io-client";
import { baseURL } from "../assets/util/axios";

const createStore = () => new Vuex.Store({
  modules: { user, results, players },
  state: {
    io: null
  },
  mutations: {
    setIo(state, payload) {
      state.io = payload;
    }
  },
  actions: {
    initSocket(context) {
      context.commit("setIo", socket(baseURL));
    }
  },
  getters: {
    io(state) {
      return state.io;
    }
  }
});

export default createStore;
