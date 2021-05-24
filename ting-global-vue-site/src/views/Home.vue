<template>
  <Page title="Home" :showHeading="false">
    <Intro />
    <RecentResults />
  </Page>
</template>

<script>
import Intro from "../components/layout/Intro";
import RecentResults from "../components/layout/RecentResults";

export default {
  components: { Intro, RecentResults },
};
</script>
