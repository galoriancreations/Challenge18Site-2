<template>
  <DashboardSection title="My Challenges" class="my-challenges">
    <p v-if="hasNoChallenges" class="my-challenges__empty">
      You don't have any challenges yet.
    </p>
    <BaseButton link="/challenge-options" variant="blue" v-if="isOrganization">
      Create new challenge
    </BaseButton>
    <BaseButton v-else variant="blue" @click="joinChallengeMode = true">
      Join a challenge
    </BaseButton>
    <template slot="modal">
      <JoinChallenge
        :active="joinChallengeMode"
        @closed="joinChallengeMode = false"
      />
    </template>
  </DashboardSection>
</template>

<script>
import JoinChallenge from "./JoinChallenge";

export default {
  components: { JoinChallenge },
  data() {
    return {
      joinChallengeMode: false,
    };
  },
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
    min-height: 35rem;

    @include respond(mobile) {
      min-height: 30rem;
    }
  }
}
</style>
