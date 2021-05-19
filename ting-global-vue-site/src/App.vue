<template>
  <div id="app">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader";
import TheFooter from "./components/layout/TheFooter";
export default {
  components: { TheHeader, TheFooter },
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

html {
  font-size: 62.5%;
}

#app {
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
  overflow: hidden;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
