<template>
  <div class="swiper__wrapper">
    <div class="swiper__container">
      <div class="testimonial__body">
        <div class="testimonial__header">
          <div class="testimonial-image__container">
            <img class="image" :src="slide.imgSrc" :alt="slide.name" />
          </div>
          <cite class="elementor-testimonial__cite">
            <span class="elementor-testimonial__name">{{ slide.name }}</span>
            <div class="elementor-star-rating">
              <star-rating
                v-bind:star-size="20"
                v-bind:show-rating="false"
                v-bind:read-only="true"
                v-bind:animate="true"
                v-model="slide.rating"
              ></star-rating>
            </div>
            <strong
              ><span class="testimonial__title">{{
                slide.tittle
              }}</span></strong
            >
          </cite>
        </div>
        <div class="testimonial__content">
          <div class="elementor-testimonial__text">
            {{ slide.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  props: ["slide"],
  components: { StarRating },
};
</script>

//
<style lang="scss">
.image {
  border-radius: 50%;
  max-width: 150px;
}
</style>
