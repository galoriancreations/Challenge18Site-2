<template>
  <div>
    <Nuxt />
    <SpinningLogoBg />
  </div>
</template>

<script>
import SpinningLogoBg from "../components/extras/SpinningLogoBg";
import socket from "socket.io-client";
import { baseURL } from "../assets/util/axios";

export default {
  components: { SpinningLogoBg },
  data() {
    return {
      io: socket(baseURL)
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    initSocket() {
      this.io.on("allBoards", ({ challenges }) =>
        this.$store.dispatch("results/updateResults", challenges)
      );
      if (this.user) {
        this.io.emit("joinRoom", this.user.id);
      }
    },
    setChallenges() {
      const challenges = JSON.parse(localStorage.getItem("challenges"));
      if (this.user && challenges) {
        this.$store.dispatch("updateChallenges", challenges);
      }
    }
  },
  watch: {
    isLoggedIn(value) {
      if (!value && this.$route.meta.requiresAuth) {
        this.$router.push("/");
      }
    }
  },
  mounted() {
    this.initSocket();
    this.setChallenges();
  },
  provide() {
    return {
      io: this.io
    };
  }
};
</script>
