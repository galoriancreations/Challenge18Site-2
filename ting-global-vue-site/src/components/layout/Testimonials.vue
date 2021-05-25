<template>
  <section class="testimonials">
    <SectionHeading>Testimonials</SectionHeading>
    <div class="testimonials__slider"></div>
  </section>
</template>

<style lang="scss">
@import "@/sass/base.scss";

.testimonials {
  margin-top: 10rem;

  @include respond(mobile) {
    margin-top: 7rem;
  }
}
</style>
