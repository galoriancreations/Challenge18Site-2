<template>
  <li :class="classes" @click="closeNav">
    <RouterLink :to="link" activeClass="active" exact :class="linkClasses">
      <slot />
    </RouterLink>
  </li>
</template>

<script>
export default {
  props: {
    link: String,
    reverse: Boolean,
    button: Boolean,
  },
  computed: {
    classes() {
      return {
        "header__nav-item": true,
        reverse: this.reverse,
      };
    },
    linkClasses() {
      return this.button ? "button button--gold" : null;
    },
  },
  inject: ["closeNav"],
};
</script>
