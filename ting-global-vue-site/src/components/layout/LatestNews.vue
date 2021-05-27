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
    </agile>
    <BaseButton link="/articles" variant="blue" class="view-all-button"
      >View All</BaseButton
    >
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
        navButtons: false,
        dots: false,
        responsive: [
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 2,
              navButtons: true,
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
    margin: -2rem -3rem;
  }

  .agile__list {
    padding: 2rem 0;
  }

  .agile__actions {
    position: absolute;
    left: -2rem;
    right: -2rem;
    top: 50%;
    transform: translateY(-50%);

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

      &:hover {
        color: $color-azure;
      }
    }
  }

  &__slide {
    padding: 0 3rem;
    height: 100%;
  }

  & > .button {
  }
}
</style>
