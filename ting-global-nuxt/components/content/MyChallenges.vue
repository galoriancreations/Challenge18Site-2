<template>
  <DashboardSection title="My Challenges" class="my-challenges">
    <div v-if="!hasChallenges" class="my-challenges__empty">
      <p>
        You don't have any challenges yet.
        {{ isIndividual ? "Join" : "Create" }} your first!
      </p>
    </div>
    <div v-else class="my-challenges__table-container">
      <vue-good-table
        class="results-table my-challenges__table"
        :columns="columns"
        :rows="rows"
        theme="polar-bear"
      />
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

const myChallengesArray = challenges => {
  const arr = [];
  for (let key in challenges) {
    arr.push({ id: key, ...challenges[key] });
  }
  return arr;
};

export default {
  components: { JoinChallenge, CreateChallenge },
  data() {
    return {
      modalOpen: false,
      columns: [
        { field: "name", label: "Name", sortable: false },
        { field: "language", label: "Language", sortable: false },
        { field: "day", label: "Day", sortable: false },
        { field: "numOfUsers", label: "Users", sortable: false },
        { field: "score", label: "Score", sortable: false },
        { field: "invite", label: "Invite", sortable: false }
      ]
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    hasChallenges() {
      return this.user?.myChallenges && this.rows.length > 0;
    },
    isIndividual() {
      return this.user?.accountType === "individual";
    },
    rows() {
      return myChallengesArray(this.user?.myChallenges);
    }
  },
  methods: {
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    }
  },
  provide() {
    return {
      closeModal: this.closeModal
    };
  },
  mounted() {
    console.log(this.user.myChallenges);
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/base.scss";

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

  &__table {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
}

.dashboard-section {
  &.my-challenges &__content,
  &.club-players &__content,
  &.my-drafts &__content {
    min-height: 30rem;
  }
}
</style>
