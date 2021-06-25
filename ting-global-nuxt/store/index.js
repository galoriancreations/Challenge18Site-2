import socket from "socket.io-client";
import { baseURL } from "../assets/util/axios";

export const strict = false;

export const state = () => ({
  io: null
});

export const mutations = {
  setIo(state, payload) {
    state.io = payload;
  }
};

export const actions = {
  initSocket(context) {
    context.commit("setIo", socket(baseURL));
  }
};

export const getters = {
  io(state) {
    return state.io;
  }
};
