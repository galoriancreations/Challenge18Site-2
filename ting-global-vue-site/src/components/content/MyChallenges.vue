<template>
  <DashboardSection title="My Challenges" class="my-challenges">
    <div v-if="!hasChallenges" class="my-challenges__empty">
      <p>
        You don't have any challenges yet.
        {{ isIndividual ? "Join" : "Create" }} your first!
      </p>
    </div>
    <template slot="button">
      <ActionButton color="blue" @click="openModal">
        <i class="fas fa-plus" />
      </ActionButton>
    </template>
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

      @include respond(mobile) {
        font-size: 1.6rem;
      }

      &:not(:last-child) {
        margin-bottom: 1rem;
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
