<template>
  <NuxtLink v-if="link" :to="link" :class="classes">
    <slot />
  </NuxtLink>
  <button v-else :class="classes" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    link: String,
    variant: String
  },
  computed: {
    classes() {
      return `button button--${this.variant}`;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/base.scss";

.button {
  display: block;
  width: 25rem;
  text-transform: uppercase;
  font: inherit;
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: 1.3px;
  border-radius: 100px;
  border: none;
  outline: none !important;
  transition: all 0.5s;
  text-align: center;
  cursor: pointer;
  padding: 1rem 3rem;
  margin: auto;

  @include respond(mobile) {
    font-size: 1.4rem;
  }

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

  &--white {
    background-color: #fff;
    color: $color-blue-2;
  }

  &:not(.action-button):hover {
    background-color: #fff;
    color: $color-azure;
    box-shadow: rgba(62, 57, 107, 0.3) 0px 6px 16px 0px;
  }

  &:hover {
    @media (hover: hover) {
      background-color: #fff;
      color: $color-azure;
      box-shadow: rgba(62, 57, 107, 0.3) 0px 6px 16px 0px;
    }
  }

  &--white:hover {
    background-color: rgba($color-azure-light, 0.8);
    color: $color-blue-2;
  }

  &--outline {
    background-color: transparent;
    color: $color-blue-3;
    border: 1.5px solid $color-blue-3;

    &:hover {
      background-color: $color-blue-3;
      color: #fff;
    }
  }

  &.view-all-button {
    margin-top: 5rem;
    font-size: 1.5rem;
    font-weight: 600;
    width: 22rem;

    @include respond(mobile) {
      margin-top: 4rem;
      font-size: 1.3rem;
    }
  }
}
</style>
