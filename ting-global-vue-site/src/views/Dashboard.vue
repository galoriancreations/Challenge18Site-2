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

<style lang="scss">
@import "@/sass/base.scss";
.dashboard {
  .modal {
    box-shadow: $boxshadow1;

    &__container {
      max-width: 70rem;
      padding: 0;
      height: 85vh;
      overflow: auto;

      // .__view {
      //   display: flex;
      //   flex-direction: column;
      //   justify-content: center;
      // }
    }

    &__content {
      padding: 4rem;

      @include respond(mobile) {
        padding: 3rem 2rem;
      }
    }

    &__backdrop {
      background-color: rgba(#000, 0.6);
    }
  }
}
</style>
