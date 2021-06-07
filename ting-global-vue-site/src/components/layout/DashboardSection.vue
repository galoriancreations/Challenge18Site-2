<template>
  <section class="dashboard-section">
    <h2 class="dashboard-section__heading">
      {{ title }}
    </h2>
    <div class="dashboard-section__content">
      <slot />
    </div>
    <slot name="extra" />
  </section>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="scss">
@import "@/sass/base.scss";

.dashboard-section {
  border-radius: 1rem;
  box-shadow: $boxshadow2;
  overflow: hidden;
  max-width: 80rem;
  margin: auto;

  &:not(:last-child) {
    margin-bottom: 9rem;

    @include respond(mobile) {
      margin-bottom: 6rem;
    }
  }

  &__heading {
    background-color: $color-blue-2;
    color: $color-gold-4;
    text-align: center;
    padding: 1.75rem 1rem 1.5rem;
    font-weight: 600;
    font-size: 2.5rem;

    @include respond(mobile) {
      font-size: 1.9rem;
    }
  }

  &__content {
    padding: 4rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include respond(mobile) {
      padding: 3rem 2rem;
    }

    .button {
      margin: 0 auto;
      width: auto;
      font-weight: 600;
    }
  }
}
</style>
