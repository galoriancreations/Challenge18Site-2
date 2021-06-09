<template>
  <DashboardSection title="My Challenges" class="my-challenges">
    <p v-if="hasNoChallenges" class="my-challenges__empty">
      You don't have any challenges yet.
    </p>
    <BaseButton variant="blue" v-if="!isIndividual" @click="openModal">
      Create new challenge
    </BaseButton>
    <BaseButton v-else variant="blue" @click="openModal">
      Join a challenge
    </BaseButton>
    <template slot="modal">
      <JoinChallenge v-if="isIndividual" :active="modalOpen" />
      <CreateChallenge v-else :active="modalOpen" />
    </template>
  </DashboardSection>
</template>

<script>
import JoinChallenge from "./JoinChallenge";
import CreateChallenge from "./CreateChallenge";

export default {
  components: { JoinChallenge, CreateChallenge },
  data() {
    return {
      modalOpen: false,
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    hasNoChallenges() {
      return !this.user.challenges?.length;
    },
    isIndividual() {
      return this.user.accountType === "individual";
    },
  },
  methods: {
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
  },
  provide() {
    return {
      closeModal: this.closeModal,
    };
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
