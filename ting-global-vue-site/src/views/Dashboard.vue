<template>
  <Page title="Dashboard" name="dashboard">
    <WhiteSection tag="main" class="dashboard">
      <AccountDetails />
      <MyChallenges />
    </WhiteSection>
  </Page>
</template>

<script>
import AccountDetails from "../components/layout/AccountDetails";
import MyChallenges from "../components/layout/MyChallenges";

export default {
  components: { AccountDetails, MyChallenges },
};
</script>
