<template>
  <RouterLink to="/">
    <img class="logo" src="../../assets/logo18-1.png" @click="closeNav" />
  </RouterLink>
</template>

<script>
export default {
  inject: ["closeNav"],
};
</script>

<style lang="scss">
@import "../../sass/base.scss";
.logo {
  height: 12rem;

  @include respond(mobile) {
    height: 10rem;
  }
}
</style>
