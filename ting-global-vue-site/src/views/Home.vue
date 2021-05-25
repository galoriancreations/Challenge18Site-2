<template>
  <Page title="Home" :showHeading="false">
    <Intro />
    <WhiteSection>
      <RecentResults />
      <LatestVideos />
    </WhiteSection>
  </Page>
</template>

<script>
import Intro from "../components/layout/Intro";
import RecentResults from "../components/layout/RecentResults";
import LatestVideos from "../components/layout/LatestVideos";

export default {
  components: { Intro, RecentResults, LatestVideos },
};
</script>
