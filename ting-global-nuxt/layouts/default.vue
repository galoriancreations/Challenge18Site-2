<template>
  <div>
    <Nuxt />
    <SpinningLogoBg />
  </div>
</template>

<script>
import SpinningLogoBg from "../components/extras/SpinningLogoBg";
import { protect } from "../middleware/check-route";

export default {
  components: { SpinningLogoBg },
  computed: {
    io() {
      return this.$store.getters.io;
    },
    isLoggedIn() {
      return this.$store.getters.isAuth;
    },
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    initSocket() {
      if (!this.io) {
        this.$store.dispatch("initSocket");
        this.io.on("allBoards", ({ challenges }) =>
          this.$store.dispatch("updateResults", challenges)
        );
        if (this.user) {
          this.io.emit("joinRoom", this.user.id);
        }
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
      if (!value && protect.includes(this.$route.name)) {
        this.$router.replace("/");
      }
    }
  },
  mounted() {
    this.initSocket();
    this.setChallenges();
  }
};
</script>
