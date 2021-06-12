<template>
  <Page title="Dashboard" name="dashboard">
    <WhiteSection tag="main" class="dashboard">
      <AccountDetails />
      <MyChallenges />
    </WhiteSection>
  </Page>
</template>

<script>
import AccountDetails from "../components/content/AccountDetails";
import MyChallenges from "../components/content/MyChallenges";

export default {
  components: { AccountDetails, MyChallenges },
};
</script>
