<template>
  <section class="partners">
    <SectionHeading small>In Partnership With</SectionHeading>
    <div class="partners__grid"></div>
    <Swiper :options="swiperOptions">
      <SwiperSlide v-for="image in images" :key="image">
        <img class="partners__img" :src="image" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script>
import image1 from "../../assets/partners/reshet.jpg";
import image2 from "../../assets/partners/fers.jpg";
import image3 from "../../assets/partners/hanson.jpg";
import image4 from "../../assets/partners/h+.jpg";
import image5 from "../../assets/partners/tlvseed.jpg";

const slides = () => {
  return window.innerWidth < 750 ? 2 : window.innerWidth < 1000 ? 3 : 5;
};

export default {
  data() {
    return {
      images: [image1, image2, image3, image4, image5],
      swiperOptions: {
        slidesPerView: slides(),
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        observer: true,
      },
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.swiperOptions.slidesPerView = slides();
    });
  },
};
</script>

<style lang="scss">
@import "../../sass/base.scss";

.partners {
  .section-heading {
    margin-bottom: 5rem;
  }

  &__img {
    width: 100%;
    display: block;
  }
}
</style>
