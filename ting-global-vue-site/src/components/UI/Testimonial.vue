<template>
  <article class="testimonial">
    <img class="testimonial__icon" src="../../assets/icon-quotes.svg" />
    <p class="testimonial__text">{{ testimonial.text }}</p>
    <StarRating
      v-model="testimonial.rating"
      :star-size="20"
      :show-rating="false"
      :read-only="true"
      class="testimonial__rating"
    />
    <img
      class="testimonial__avatar"
      :src="testimonial.imgSrc"
      :alt="testimonial.name"
    />
    <h3 class="testimonial__name">{{ testimonial.name }}</h3>
    <p v-if="testimonial.role" class="testimonial__role">
      {{ testimonial.role }}
    </p>
    <!-- <div class="testimonial__header">
      <div class="testimonial-image__container">
        <img class="image" :src="testimonial.imgSrc" :alt="testimonial.name" />
      </div>
      <cite class="elementor-testimonial__cite">
        <span class="elementor-testimonial__name">{{ testimonial.name }}</span>
        <div class="elementor-star-rating">
          <StarRating
            v-model="testimonial.rating"
            :star-size="20"
            :show-rating="false"
            :read-only="true"
            :animate="true"
          ></StarRating>
        </div>
        <strong
          ><span class="testimonial__title">{{
            testimonial.title
          }}</span></strong
        >
      </cite>
    </div>
    <div class="testimonial__content">
      <div class="elementor-testimonial__text">
        {{ testimonial.text }}
      </div>
    </div> -->
  </article>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  components: { StarRating },
  props: {
    testimonial: Object,
  },
};
</script>

<style lang="scss">
@import "@/sass/base.scss";

.testimonial {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 1.6;

  &__text {
    position: relative;
    z-index: 1;
    margin-top: -2rem;
    font-weight: 500;
    font-size: 1.7rem;

    @include respond(mobile) {
      font-size: 1.5rem;
    }
  }

  &__rating {
    margin-top: 1rem;
  }

  &__avatar {
    width: 8rem;
    border-radius: 50%;
    border: 0.2rem solid $color-azure;
    margin-top: 2.5rem;

    @include respond(mobile) {
      width: 6.5rem;
    }
  }

  &__name {
    font-size: 1.9rem;
    color: $color-blue-2;
    margin-top: 1.5rem;

    @include respond(mobile) {
      font-size: 1.75rem;
    }
  }

  &__role {
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 500;
    max-width: 35rem;

    @include respond(mobile) {
      font-size: 1.4rem;
    }
  }
}
</style>
