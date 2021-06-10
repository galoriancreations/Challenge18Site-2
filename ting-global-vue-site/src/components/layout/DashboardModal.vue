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

<style lang="scss">
@import "@/sass/base.scss";
.dashboard {
  .modal {
    box-shadow: $boxshadow1;

    &__container {
      max-width: 75rem;
      padding: 0;
      height: 85vh;
      overflow: auto;
    }

    &__content {
      padding: 4rem;
      position: relative;
      min-height: 85vh;

      @include respond(mobile) {
        padding: 3rem 2rem;
      }
    }

    &__backdrop {
      background-color: rgba(#000, 0.6);
    }
  }
}
</style>
