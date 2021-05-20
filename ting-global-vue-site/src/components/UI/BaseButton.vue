<template>
  <RouterLink v-if="link" :to="link" class="button">
    <slot />
  </RouterLink>
  <button v-else class="button">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    link: String,
  },
};
</script>

<style lang="scss">
@import "../../sass/base.scss";

.button {
  display: block;
  padding: 1rem;
  background-color: $color-gold-4;
  color: #000;
  text-transform: uppercase;
  font: inherit;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 1.3px;
  border-radius: 100px;
  border: none;
  outline: none !important;
  transition: all 0.4s;
  text-align: center;
  cursor: pointer;
  padding: 1rem 3rem;

  &:hover {
    background-color: #fff;
    color: #007bff;
    box-shadow: rgba(62, 57, 107, 0.3) 0px 6px 16px 0px;
  }
  &:active {
    outline: none;
  }
}
</style>
