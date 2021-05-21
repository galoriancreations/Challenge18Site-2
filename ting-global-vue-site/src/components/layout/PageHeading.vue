<template>
  <section class="page-heading" :id="name">
    <h1 class="page-heading__heading">
      {{ title }}
    </h1>
    <WavePatternBottom />
  </section>
</template>

<script>
export default {
  inject: ["name", "title"],
};
</script>

<style lang="scss">
@import "../../sass/base.scss";

.page-heading {
  height: 50rem;
  background-color: blue;
  position: relative;
  background-position: center;
  background-size: cover;
  padding: 0 $padding-sides-desktop;

  &#scores {
    background-image: linear-gradient(
        to right,
        rgba(#000, 0.2),
        rgba(#000, 0.2)
      ),
      url(../../assets/scores-bg.jpg);
  }

  &__heading {
    font-size: 6rem;
    color: #fff;
    font-weight: 800;
    margin-top: 25rem;
    text-align: center;
  }
}
</style>
