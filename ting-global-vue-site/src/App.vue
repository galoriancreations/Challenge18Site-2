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

::selection {
  background-color: $color-gold-4;
  color: #000;
}

h1,
h2,
h3,
h4 {
  font-family: "Spartan", sans-serif;
}

p {
  line-height: 1.6;
  font-size: 1.75rem;

  @include respond(mobile) {
    line-height: 1.7;
    font-size: 1.55rem;
  }
}

a {
  text-decoration: none;
  color: inherit;
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

.agile {
  &__actions {
    margin-top: 2.5rem;

    @include respond(mobile) {
      margin-top: 1.5rem;
    }

    button {
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font: inherit;
      font-size: 3rem;
      font-weight: 800;
      color: $color-blue-2;
      transition: color 0.5s;

      @include respond(mobile) {
        font-size: 2.5rem;
      }

      &:hover {
        color: $color-azure;
      }
    }
  }

  &__dot {
    margin: 0 0.5rem;

    button {
      background-color: rgba($color-azure-light, 0.8);
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: block;
      height: 1rem;
      width: 1rem;
      font-size: 0;
      line-height: 0;
      transition: all 0.5s;
    }

    &--current,
    &:hover {
      button {
        background-color: $color-blue-2;
      }
    }
  }
}
</style>
