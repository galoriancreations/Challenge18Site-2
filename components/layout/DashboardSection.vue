<template>
  <section class="dashboard-section">
    <div class="dashboard-section__container">
      <h2 class="dashboard-section__heading">
        {{ title }}
      </h2>
      <div class="dashboard-section__content">
        <slot />
      </div>
    </div>
    <slot name="button" />
    <slot name="modal" />
  </section>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/base.scss";

.dashboard-section {
  max-width: 85rem;
  margin: auto;

  &:not(:last-child) {
    margin-bottom: 8rem;

    @include respond(mobile) {
      margin-bottom: 5.5rem;
    }
  }

  &__container {
    border-radius: 1rem;
    box-shadow: $boxshadow2;
    overflow: hidden;
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
    padding: 4.5rem 3rem 6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @include respond(mobile) {
      padding: 3rem 2rem 5rem;
    }

    .button {
      margin: 0 auto;
      width: auto;
      font-weight: 600;
    }
  }

  &.my-challenges &__content,
  &.club-players &__content,
  &.my-drafts &__content {
    min-height: 30rem;
  }
}
</style>
