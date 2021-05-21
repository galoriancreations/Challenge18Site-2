<template>
  <div class="section-heading-wrapper">
    <h2 class="section-heading">
      <slot />
    </h2>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../../sass/base.scss";

.section-heading-wrapper {
  text-align: center;
}

.section-heading {
  display: inline-block;
  font-size: 4rem;
  letter-spacing: -0.5px;
  font-weight: 800;
  position: relative;
  color: $color-blue-2;
  margin-bottom: 8rem;

  @include respond(mobile) {
    font-size: 3.4rem;
    margin-bottom: 6rem;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: calc(100% + 1rem);
    height: 0.5rem;
    width: 60%;
    max-width: 18rem;
    background-color: $color-blue-3;
  }
}
</style>
