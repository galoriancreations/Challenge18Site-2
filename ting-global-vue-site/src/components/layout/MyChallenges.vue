<template>
  <DashboardSection title="My Challenges" class="my-challenges">
    <p v-if="hasNoChallenges" class="my-challenges__empty">
      You don't have any challenges yet.
    </p>
    <BaseButton link="/challenge-options" variant="blue" v-if="isOrganization">
      Create new challenge
    </BaseButton>
    <BaseButton v-else variant="blue">Join a challenge</BaseButton>
  </DashboardSection>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
    hasNoChallenges() {
      return !this.user.challenges || !this.user.challenges.length;
    },
    isOrganization() {
      return this.user.account_type === "organization";
    },
  },
};
</script>

<style lang="scss">
@import "@/sass/base.scss";

.my-challenges {
  &__empty {
    text-align: center;
    font-size: 1.85rem;
    margin-bottom: 4rem;

    @include respond(mobile) {
      font-size: 1.65rem;
      margin-bottom: 3rem;
    }
  }
}

.dashboard-section {
  &.my-challenges &__content {
    min-height: 40rem;

    @include respond(mobile) {
      min-height: 35rem;
    }
  }
}
</style>
