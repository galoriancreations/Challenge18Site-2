<template>
  <Page title="Home" :showHeading="false">
    <Intro />
    <WhiteSection tag="main" class="home">
      <RecentResults />
      <LatestVideos />
      <Testimonials />
      <LatestNews />
      <Partners />
    </WhiteSection>
  </Page>
</template>

<script>
import Intro from "../components/layout/Intro";
import RecentResults from "../components/layout/RecentResults";
import LatestVideos from "../components/layout/LatestVideos";
import Testimonials from "../components/layout/Testimonials";
import LatestNews from "../components/layout/LatestNews";
import Partners from "../components/layout/Partners";

export default {
  components: {
    Intro,
    RecentResults,
    LatestVideos,
    Testimonials,
    LatestNews,
    Partners,
  },
};
</script>
