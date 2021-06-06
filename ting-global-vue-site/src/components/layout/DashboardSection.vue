<template>
  <section class="dashboard-section">
    <h2 class="dashboard-section__heading">
      {{ title }}
    </h2>
    <div class="dashboard-section__content">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>
