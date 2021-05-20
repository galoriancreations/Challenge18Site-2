<template>
  <div id="app">
    <Transition name="page" mode="out-in">
      <RouterView />
    </Transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
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
  transition: opacity 0.4s;
}

.page-leave-active {
  transition: opacity 0.4s;
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
}
</style>
