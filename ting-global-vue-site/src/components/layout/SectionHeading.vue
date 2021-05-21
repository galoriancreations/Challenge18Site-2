<template>
  <div class="section-heading-wrapper">
    <h2 :class="classes">
      <slot />
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    extraClass: String,
  },
  computed: {
    classes() {
      let classes = "section-heading";
      if (this.extraClass) classes += ` ${this.extraClass}`;
      return classes;
    },
  },
};
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
    width: 50%;
    max-width: 18rem;
    border-top: 0.5rem dotted $color-blue-3;
  }
}
</style>
