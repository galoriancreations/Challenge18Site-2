<template>
  <section class="testimonials">
    <SectionHeading>Testimonials</SectionHeading>
    <client-only :placeholder="serverPlaceholder">
      <agile :options="sliderOptions" class="testimonials__slider">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="testimonials__slide"
        >
          <Testimonial :testimonial="testimonial" />
        </div>
        <template slot="prevButton"><i class="fas fa-chevron-left"/></template>
        <template slot="nextButton"><i class="fas fa-chevron-right"/></template>
      </agile>
    </client-only>
  </section>
</template>

<script>
import testimonials from "../../assets/data/testimonials";
import Testimonial from "../UI/Testimonial";

export default {
  components: { Testimonial },
  data() {
    return {
      sliderOptions: {
        responsive: [
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      },
      testimonials
    };
  },
  computed: {
    serverPlaceholder() {
      return this.testimonials
        .map(testimonial => `${testimonial.name}: ${testimonial.text}`)
        .join("\n\n");
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/base.scss";

.testimonials {
  &__slider {
    margin: 0 -5rem;

    @include respond(tablet) {
      margin: 0 -3rem;
    }
  }

  &__slide {
    padding: 0 5rem;

    @include respond(tablet) {
      padding: 0 3rem;
    }
  }

  .agile {
    &__actions {
      margin-left: 5rem;
      margin-right: 5rem;

      @include respond(tablet) {
        margin-left: 3rem;
        margin-right: 3rem;
      }
    }
  }
}
</style>
