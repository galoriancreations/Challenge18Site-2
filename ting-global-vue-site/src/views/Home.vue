<template>
  <Page title="Home" :showHeading="false">
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
import Intro from "../components/layout/Intro";
import RecentResults from "../components/layout/RecentResults";
import Testimonials from "../components/layout/Testimonials";
import LatestNews from "../components/layout/LatestNews";
import Partners from "../components/layout/Partners";

export default {
  components: {
    Intro,
    RecentResults,
    Testimonials,
    LatestNews,
    Partners,
  },
};
</script>
