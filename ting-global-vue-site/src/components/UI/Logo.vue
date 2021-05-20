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
  height: 10rem;
  transition: height 0.5s;

  @include respond(mobile) {
    height: 8rem;
  }
}

.header.sticky .logo {
  height: 7rem;

  @include respond(mobile) {
    height: 6rem;
  }
}
</style>
