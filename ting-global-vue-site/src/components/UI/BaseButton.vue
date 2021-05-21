<template>
  <RouterLink v-if="link" :to="link" :class="`button button--${variant}`">
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
    variant: String,
  },
};
</script>

<style lang="scss">
@import "../../sass/base.scss";

.button {
  display: block;
  width: 25rem;
  text-transform: uppercase;
  font: inherit;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1.3px;
  border-radius: 100px;
  border: none;
  outline: none !important;
  transition: all 0.4s;
  text-align: center;
  cursor: pointer;
  padding: 1rem 3rem;
  margin: auto;

  &--gold {
    background-color: $color-gold-4;
    color: #000;
  }

  &--blue {
    background-color: $color-blue-3;
    color: #fff;
  }

  &--darkblue {
    background-color: $color-blue-2;
    color: #fff;
  }

  &:hover {
    background-color: #fff;
    color: $color-azure;
    box-shadow: rgba(62, 57, 107, 0.3) 0px 6px 16px 0px;
  }
  &:active {
    outline: none;
  }
}
</style>
