<template> </template>

<script>
export default {
  async asyncData({ $axios, route }) {
    try {
      const { challenge } = await $axios.$post("/api", {
        getChallengeData: route.params.challengeId
      });
      return {
        challenge,
        error: null
      };
    } catch (error) {
      return { error };
    }
  }
};
</script>
