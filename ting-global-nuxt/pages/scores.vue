<template>
  <Page title="Scores" name="scores">
    <TeamResults />
  </Page>
</template>

<script>
import TeamResults from "../components/content/TeamResults";

export default {
  components: { TeamResults },
  head: {
    title: "Scores – Challenge 18"
  }
};
</script>
