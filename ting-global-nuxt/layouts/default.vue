<template>
  <div>
    <Nuxt />
    <SpinningLogoBg />
  </div>
</template>

<script>
import SpinningLogoBg from "../components/extras/SpinningLogoBg";

export default {
  components: { SpinningLogoBg },
  computed: {
    io() {
      return this.$store.getters.io;
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
      console.log(this.user);
    }
  },
  mounted() {
    this.initSocket();
    this.setChallenges();
  }
};
</script>
