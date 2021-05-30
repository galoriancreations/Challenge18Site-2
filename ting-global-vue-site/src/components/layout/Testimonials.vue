<template>
  <section class="testimonials">
    <SectionHeading>Testimonials</SectionHeading>
    <div class="slider__wrapper">
      <agile :options="myOptions">
        <TestimonialsSlide
          class="slide"
          v-bind:key="slide"
          v-bind:slide="slide"
          v-for="slide of testimonials"
        />
        <template slot="prevButton"><i class="fas fa-chevron-left"/></template>
        <template slot="nextButton"><i class="fas fa-chevron-right"/></template>
      </agile>
    </div>
  </section>
</template>

<script>
import { VueAgile } from "vue-agile";
import TestimonialsSlide from "../layout/TestimonialsSlide";

export default {
  myOptions: {
    navButtons: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          infinite: false,
        },
      },
    ],
  },
  data() {
    return {
      myOptions: {
        navButtons: false,

        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots: false,
            },
          },

          {
            breakpoint: 900,
            settings: {
              navButtons: true,
              dots: true,
              infinite: false,
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
          tittle: "@IritCohen",
          text:
            "What captured my heart in this “crazy” program, which we are currently in the midst of, is that it corresponds with our school vision and work. Mainly in promoting entrepreneurship and repairing the world actively ... - College Director, Shimon Peres School of Art and High Tech, Mrs. Irit Cohen",
        },
        {
          imgSrc:
            "https://i1.wp.com/ting.global/wp-content/uploads/2021/04/testimonial.jpeg?fit=171%2C172&ssl=1",
          name: "Shaul Weigert",
          rating: 5,
          tittle:
            "Director of the value-social field at the Amal schools' network",
          text:
            "In recent weeks I have participated in the 18 Days of Sustainability & Leadership Challenge created by Sharon. The uniqueness of the challenge in my opinion in its originality and creativity. Many deal with " +
            "challenging issues" +
            "but it seems that the most important thing is to do it in an interesting way and Sharon was very successful in this. There is something serious about the daily commitment to do a task whose scope depends on your desire and seriousness is important. Hopefully, more people in general and educators will experience the challenge.",
        },
        {
          imgSrc:
            "https://i1.wp.com/ting.global/wp-content/uploads/2021/04/Efrat-Shaked-.jpg?fit=200%2C200&ssl=1",
          name: "Efrat Shaked",
          rating: 5,
          tittle: "@EfratShaked  ",
          text:
            "Hello everyone! My name is Efrat Shaked  and I am from The Doing Good Model social enterprise. Sharon, it was a pleasure, thanks a lot for your initiation, it was so accurate for my needs.",
        },
        {
          imgSrc:
            "https://i1.wp.com/ting.global/wp-content/uploads/2021/04/Fernanda-Matsuoka.jpg?fit=200%2C200&ssl=1",
          name: "Fernanda Matsuoka",
          rating: 5,
          tittle: "@Fernanda Matsuoka",
          text:
            "I wanna say thank you so much @Sharon Gal-Or for taking the lead in organizing the challenge. Hereby is my video. Wish you a blessing day! - Fernanda Matsuoka COO at Youth Climate Leaders (YCL)",
        },
      ],
    };
  },
  components: {
    agile: VueAgile,
    TestimonialsSlide,
  },
};
</script>

<style lang="scss">
@import "../../sass/base.scss";

.agile {
  width: 100%;
}

.agile __dot {
  margin: 0 10px;
}

.recent-results {
  .button {
    margin-top: 5rem;
    font-size: 1.5rem;
    font-weight: 600;
    width: 22rem;

    @include respond(mobile) {
      margin-top: 4rem;
      font-size: 1.3rem;
    }
  }
}
.testimonials {
  margin-top: 10rem;
  @include respond(mobile) {
    margin-top: 7rem;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2.5rem;

    @include respond(tablet) {
      grid-template-columns: 1fr 1fr;
    }

    @include respond(mobile-land) {
      gap: 1.5rem;
    }

    @include respond(mobile) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  &__item {
    iframe {
      width: 100%;
      height: 17vw;
      display: block;
      border-radius: 0.8rem;

      @include respond(tablet) {
        height: 25vw;
      }

      @include respond(mobile) {
        height: 60vw;
      }
    }
  }
}
</style>
