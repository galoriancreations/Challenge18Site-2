<template> </template>

<script>
export default {
  async asyncData({ route, $axios }) {
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
