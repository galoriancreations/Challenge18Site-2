<template>
  <section class="testimonials">
    <SectionHeading>Testimonials</SectionHeading>
    <agile :options="sliderOptions" class="testimonials__slider">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="testimonial.name"
        class="testimonials__slide"
        :ref="`slide${index}`"
      >
        <Testimonial :testimonial="testimonial" />
      </div>
      <template slot="prevButton"><i class="fas fa-chevron-left"/></template>
      <template slot="nextButton"><i class="fas fa-chevron-right"/></template>
    </agile>
  </section>
</template>

<script>
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
              slidesToShow: 2,
            },
          },
        ],
      },
      testimonials: [
        {
          imgSrc:
            "https://i0.wp.com/ting.global/wp-content/uploads/2021/04/Irit-Cohen.jpg?fit=303%2C307&amp;ssl=1",
          name: "Irit Cohen",
          rating: 5,
          role: "College Director, Shimon Peres School of Art and High Tech",
          text:
            "What captured my heart in this “crazy” program, which we are currently in the midst of, is that it corresponds with our school vision and work. Mainly in promoting entrepreneurship and repairing the world actively.",
        },
        {
          imgSrc:
            "https://www.gravatar.com/avatar/3008476a9614994b2538c9faa1b7e808?s=500&r=pg&d=mm",
          name: "Shaul Weigert",
          rating: 5,
          role:
            "Director of the value-social field at the Amal schools' network",
          text:
            "In recent weeks I have participated in the 18 Days of Sustainability & Leadership Challenge created by Sharon. The uniqueness of the challenge in my opinion in its originality and creativity. Many deal with challenging issues but it seems that the most important thing is to do it in an interesting way and Sharon was very successful in this. There is something serious about the daily commitment to do a task whose scope depends on your desire and seriousness is important. Hopefully, more people in general and educators will experience the challenge.",
        },
        {
          imgSrc:
            "https://i1.wp.com/ting.global/wp-content/uploads/2021/04/Efrat-Shaked-.jpg?fit=200%2C200&ssl=1",
          name: "Efrat Shaked",
          rating: 5,
          text:
            "Hello everyone! My name is Efrat Shaked and I am from The Doing Good Model social enterprise. Sharon, it was a pleasure, thanks a lot for your initiation, it was so accurate for my needs.",
        },
        {
          imgSrc:
            "https://i1.wp.com/ting.global/wp-content/uploads/2021/04/Fernanda-Matsuoka.jpg?fit=200%2C200&ssl=1",
          name: "Fernanda Matsuoka",
          rating: 5,
          role: "COO at Youth Climate Leaders (YCL)",
          text:
            "I wanna say thank you so much @Sharon Gal-Or for taking the lead in organizing the challenge. Hereby is my video. Wish you a blessing day!",
        },
      ],
    };
  },
  mounted() {
    console.log(this.$refs);
  },
};
</script>

//
<style lang="scss">
@import "../../sass/base.scss";

.testimonials {
  margin-top: 10rem;

  @include respond(mobile) {
    margin-top: 7rem;
  }

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
