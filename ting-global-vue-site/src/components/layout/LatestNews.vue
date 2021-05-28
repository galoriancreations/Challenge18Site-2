<template>
  <section class="latest-news">
    <SectionHeading>Latest News</SectionHeading>
    <agile class="latest-news__slider" :options="swiperOptions">
      <div
        v-for="article in articles"
        :key="article.link"
        class="latest-news__slide"
      >
        <NewsItem :article="article" :showButton="false" />
      </div>
      <template slot="prevButton"><i class="fas fa-chevron-left"/></template>
      <template slot="nextButton"><i class="fas fa-chevron-right"/></template>
    </agile>
    <BaseButton link="/articles" variant="blue" class="view-all-button">
      View All
    </BaseButton>
  </section>
</template>

<script>
import articles from "@/data/articles";
import NewsItem from "../UI/NewsItem";

export default {
  components: { NewsItem },
  data() {
    return {
      swiperOptions: {
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      },
    };
  },
  computed: {
    articles() {
      return articles
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 5);
    },
  },
};
</script>

<style lang="scss">
@import "@/sass/base.scss";

.latest-news {
  margin-top: 10rem;

  @include respond(mobile) {
    margin-top: 7rem;
  }

  &__slider {
    margin: 0 -3rem;
  }

  &__slide {
    padding: 0 3rem;
    height: 100%;
  }

  .agile {
    &__actions {
      margin-top: 2rem;

      @include respond(mobile-land) {
        padding: 0 $padding-sides-mobile;
      }

      @include respond(mobile) {
        padding: 0 calc(#{$padding-sides-mobile} + 1rem);
        margin-top: 1.5rem;
      }

      button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font: inherit;
        font-size: 3rem;
        font-weight: 800;
        color: $color-blue-2;
        transition: color 0.5s;

        @include respond(mobile) {
          font-size: 2.5rem;
        }

        &:hover {
          color: $color-azure;
        }
      }
    }

    &__dot {
      margin: 0 0.5rem;

      button {
        background-color: rgba($color-azure-light, 0.8);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: block;
        height: 1rem;
        width: 1rem;
        font-size: 0;
        line-height: 0;
        transition: all 0.5s;
      }

      &--current,
      &:hover {
        button {
          background-color: $color-blue-2;
        }
      }
    }
  }

  .button.view-all-button {
    margin-top: 4rem;
    @include respond(mobile-land) {
      margin-top: 3.5rem;
    }
  }
}
</style>
