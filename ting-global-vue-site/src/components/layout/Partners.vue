<template>
  <section class="partners">
    <SectionHeading small>In Partnership With</SectionHeading>
    <agile :options="swiperOptions">
      <div v-for="image in images" :key="image" class="partners__slide">
        <img class="partners__img" :src="image" />
      </div>
    </agile>
  </section>
</template>

<script>
import image1 from "../../assets/partners/reshet.jpg";
import image2 from "../../assets/partners/fers.jpg";
import image3 from "../../assets/partners/hanson.jpg";
import image4 from "../../assets/partners/h+.jpg";
import image5 from "../../assets/partners/tlvseed.jpg";

export default {
  data() {
    return {
      images: [image1, image2, image3, image4, image5],
      swiperOptions: {
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        navButtons: false,
        dots: false,
        responsive: [
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 5,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
@import "../../sass/base.scss";

.partners {
  &__img {
    width: 100%;
    display: block;
  }
}

.about .partners {
  .section-heading {
    margin-bottom: 5rem;
  }
}

.home .partners {
  margin-top: 10rem;

  @include respond(mobile) {
    margin-top: 7rem;
  }
}
</style>
