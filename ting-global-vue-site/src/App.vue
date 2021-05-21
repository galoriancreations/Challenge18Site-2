<template>
  <div id="app">
    <Transition name="page" mode="out-in">
      <RouterView />
    </Transition>
    <SpinningLogoBg />
  </div>
</template>

<script>
import SpinningLogoBg from "./components/extras/SpinningLogoBg";

export default {
  components: { SpinningLogoBg },
  computed: {
    io() {
      return this.$store.getters.io;
    },
  },
  created() {
    this.io.on("allBoards", ({ challenges }) =>
      this.$store.dispatch("updateResults", challenges)
    );
  },
};
</script>

<style lang="scss">
@import "./sass/base.scss";

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

#app {
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
  overflow: hidden;
  position: relative;
  min-height: 100vh;

  @include respond(mobile) {
    font-size: 1.5rem;
  }
}

h1,
h2,
h3,
h4 {
  font-family: "Spartan", sans-serif;
}

p {
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: inherit;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

.page-enter-active {
  transition: opacity 0.5s;
}

.page-leave-active {
  transition: opacity 0.5s;
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
}

.results-table {
  max-width: 90rem;
  margin: auto;

  * {
    text-align: center !important;
    font-size: 1.6rem;

    @include respond(mobile) {
      font-size: 1.5rem;
    }
  }

  .total-column {
    &,
    button {
      background-color: $color-gold-4 !important;
      font-weight: 700 !important;
      color: $color-blue-1 !important;
    }

    span {
      position: relative;
      z-index: 10;
    }
  }
}
</style>
