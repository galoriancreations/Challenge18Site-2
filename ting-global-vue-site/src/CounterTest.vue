<template>
  <h1 class="counter">
    {{ counter }}
  </h1>
</template>

<script>
import socket from "socket.io-client";
import axios, { baseURL } from "./util/axios";

export default {
  data() {
    return {
      counter: 2000,
      io: socket(baseURL),
    };
  },
  methods: {
    initSocket() {
      this.io.on("updateCounter", ({ newCount }) => {
        this.counter = newCount;
      });
    },
  },
  async created() {
    this.initSocket();
    const { data } = await axios.post("/api", { allTemplateNames: true });
    console.log(data);
  },
};
</script>

<style lang="scss">
.counter {
  font-size: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
