<template>
  <li :class="classes" @click="closeNav">
    <RouterLink :to="link" activeClass="active" exact>
      <slot />
    </RouterLink>
  </li>
</template>

<script>
export default {
  props: {
    link: String,
    reverse: Boolean,
  },
  computed: {
    classes() {
      return {
        "header__nav-item": true,
        reverse: this.reverse,
      };
    },
  },
  inject: ["closeNav"],
};
</script>
