<template>
  <DashboardSection title="My Challenges" class="my-challenges">
    <div v-if="!hasChallenges" class="my-challenges__empty">
      <p>You don't have any challenges yet.</p>
      <BaseButton variant="blue" @click="openModal">
        {{ isIndividual ? "Join a challenge" : "Create new challenge" }}
      </BaseButton>
    </div>
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
    hasChallenges() {
      return !!this.user.challenges?.length;
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
    p {
      text-align: center;
      font-size: 1.85rem;
      margin-bottom: 4rem;

      @include respond(mobile) {
        font-size: 1.65rem;
        margin-bottom: 3rem;
      }
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
