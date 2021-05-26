<template>
  <Page title="Home" :showHeading="false">
    <Intro />
    <WhiteSection>
      <RecentResults />
      <LatestVideos />
      <Testimonials />
    </WhiteSection>
  </Page>
</template>

<script>
import Intro from "../components/layout/Intro";
import RecentResults from "../components/layout/RecentResults";
import LatestVideos from "../components/layout/LatestVideos";
import Testimonials from "../components/layout/Testimonials";

export default {
  components: { Intro, RecentResults, LatestVideos, Testimonials },
};
</script>
