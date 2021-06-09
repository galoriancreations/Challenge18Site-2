<template>
  <div :class="classes">
    <div class="modal__container">
      <vue-scroll>
        <div class="modal__content">
          <SectionHeading small> {{ title }} </SectionHeading>
          <slot />
        </div>
      </vue-scroll>
    </div>
    <div class="modal__backdrop" @click="closeModal" />
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
    title: String,
  },
  inject: ["closeModal"],
  computed: {
    classes() {
      return {
        modal: true,
        active: this.active,
      };
    },
  },
  watch: {
    active(value) {
      document.querySelector("body").style.overflow = value ? "hidden" : null;
    },
  },
};
</script>
