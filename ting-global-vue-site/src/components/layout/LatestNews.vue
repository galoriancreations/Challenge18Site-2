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
      margin-left: 3rem;
      margin-right: 3rem;
    }
  }
}
</style>
