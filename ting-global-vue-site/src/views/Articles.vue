<template>
  <Page title="Articles" name="blog">
    <WhiteSection tag="main" class="articles">
      <div class="articles__grid">
        <NewsItem
          v-for="article in articles"
          :key="article.link"
          :article="article"
        />
      </div>
    </WhiteSection>
  </Page>
</template>

<script>
import articles from "../data/articles";
import NewsItem from "../components/UI/NewsItem";

export default {
  components: { NewsItem },
  data() {
    return { articles };
  },
};
</script>

<style lang="scss">
@import "@/sass/base.scss";

.articles {
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 6rem;
    row-gap: 8rem;

    @include respond(mobile-land) {
      grid-template-columns: 1fr;
    }

    @include respond(mobile) {
      row-gap: 6rem;
    }
  }
}
</style>
