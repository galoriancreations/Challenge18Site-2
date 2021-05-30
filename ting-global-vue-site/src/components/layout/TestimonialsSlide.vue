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
              <i class="elementor-star-full"></i>
              <i class="elementor-star-full"></i>
              <i class="elementor-star-full"></i>
              <i class="elementor-star-full"></i>
              <i class="elementor-star-full"></i>
            </div>
            <span class="testimonial__title">{{ slide.tittle }}</span>
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
export default {
  props: ["slide"],
  components: {},
};
</script>

<style lang="scss">
.swiper__wrapper {
}
.swiper__container {
}
.testimonial__body {
  display: flex;
  flex-direction: column;
}
.testimonial__header {
  //   background-color: red;
  display: flex;
  padding-top: 10px;
}
.testimonial-image__container {
  max-width: 70px;
  margin: 0 20px 10px 10px;
}
.image {
  border-radius: 50%;
}
.testimonial__content {
  //   background-color: royalblue;
}
</style>
