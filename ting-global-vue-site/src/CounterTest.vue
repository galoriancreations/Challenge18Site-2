<template>
  <h1 class="counter">
    {{ counter }}
  </h1>
</template>

<script>
import socket from "socket.io-client";

// io: socket("http://193.46.199.76:8087"),
export default {
  data() {
    return {
      counter: 2000,
      // io: socket("https://0.0.0.0")
      io: socket("https://193.46.199.76:8087"),
    };
  },
  methods: {
    initSocket() {
      this.io.on("updateCounter", ({ newCount }) => {
        this.counter = newCount;
      });
    },
  },
  created() {
    this.initSocket();
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
