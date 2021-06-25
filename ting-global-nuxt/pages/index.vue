<template>
  <Page name="home" :showHeading="false">
    <Intro />
    <WhiteSection tag="main" class="home">
      <RecentResults />
      <SectionSeperator />
      <Testimonials />
      <SectionSeperator />
      <LatestNews />
      <SectionSeperator />
      <Partners />
    </WhiteSection>
  </Page>
</template>

<script>
import Intro from "../components/content/Intro";
import RecentResults from "../components/content/RecentResults";
import Testimonials from "../components/content/Testimonials";
import LatestNews from "../components/content/LatestNews";
import Partners from "../components/content/Partners";

export default {
  components: { Intro, RecentResults, Testimonials, LatestNews, Partners },
  head: {
    title: "Home – Challenge 18",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Challenge 18, conducted by Ting Global, is the most important sustainability and leadership games tournament in the world, in which clubs from all over the world collaborate in achieving the SDG’s."
      }
    ]
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/base.scss";
</style>
