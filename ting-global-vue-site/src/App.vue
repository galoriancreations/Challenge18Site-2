<template>
  <div id="app">
    <h1 class="counter">
      {{ counter }}
    </h1>
  </div>
</template>

<script>
import socket from "socket.io-client";

export default {
  data() {
    return {
      counter: 2000,
      io: socket("http://193.46.199.76:8087"),
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
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.counter {
  font-size: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
