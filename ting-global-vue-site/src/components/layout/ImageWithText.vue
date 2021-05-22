<template>
  <div :class="classes">
    <img class="image-with-text__img" :src="image" :alt="alt" />
    <div class="image-with-text__content">
      <h3 v-if="title" class="image-with-text__title">
        {{ title }}
      </h3>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    alt: String,
    title: String,
    reverse: Boolean,
  },
  computed: {
    classes() {
      return {
        "image-with-text": true,
        "image-with-text--reverse": this.reverse,
      };
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/base.scss";

.image-with-text {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &--reverse {
    flex-direction: row-reverse;
  }

  &__img {
    width: 38vw;
    margin-right: 7rem;
  }

  &--reverse &__img {
    margin-right: 0;
    margin-left: 7rem;
  }

  &__content {
    p {
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
    }
  }
}
</style>
