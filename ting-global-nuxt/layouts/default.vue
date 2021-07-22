<template>
  <div>
    <Nuxt />
    <SpinningLogoBg />
  </div>
</template>

<script>
import socket from "socket.io-client";
import { baseURL } from "../assets/util/axios";
import SpinningLogoBg from "../components/extras/SpinningLogoBg";

export default {
  components: { SpinningLogoBg },
  data() {
    return {
      io: socket(baseURL)
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuth;
    },
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    initSocket() {
      this.io.on("allBoards", ({ challenges }) =>
        this.$store.dispatch("results/updateResults", challenges)
      );
      if (this.isLoggedIn) {
        this.io.emit("joinRoom", this.user.id);
      }
    },
    restartSocket() {
      this.io.disconnect();
      this.io = socket(baseURL);
      this.initSocket();
    }
  },
  watch: {
    isLoggedIn(value) {
      if (value) {
        this.io.emit("joinRoom", this.user.id);
        this.$router.replace("/dashboard");
      } else {
        this.restartSocket();
        if (this.$route.meta.requiresAuth) {
          this.$router.replace("/");
        }
      }
    }
  },
  mounted() {
    this.initSocket();
  },
  provide() {
    return {
      io: this.io
    };
  }
};
</script>
