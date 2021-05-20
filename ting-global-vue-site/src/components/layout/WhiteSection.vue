<template>
  <section class="section-white">
    <slot />
  </section>
</template>

<style lang="scss">
@import "../../sass/base.scss";

.section-white {
  padding: 10rem $padding-sides-desktop;

  @include respond(mobile) {
    padding: 6rem $padding-sides-mobile;
  }
}
</style>
