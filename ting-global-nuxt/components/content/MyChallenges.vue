<template>
  <DashboardSection title="My Challenges" class="my-challenges">
    <div v-if="!hasChallenges" class="my-challenges__empty">
      <p>
        You don't have any challenges yet.
        {{ isIndividual ? "Join" : "Create" }} your first!
      </p>
    </div>
    <div v-else class="my-challenges__table-container" ref="tableContainer">
      <vue-good-table
        class="results-table my-challenges__table"
        :columns="columns"
        :rows="challenges"
        theme="polar-bear"
        max-height="46rem"
        :fixed-header="true"
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
import { dataArrayFromObject } from "../../assets/util/functions";
import Scrollbar from "smooth-scrollbar";

export default {
  components: { JoinChallenge, CreateChallenge },
  inject: ["io"],
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
      ],
      scrollbar: null
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    hasChallenges() {
      return !!this.user?.myChallenges && this.challenges.length > 0;
    },
    isIndividual() {
      return this.user?.accountType === "individual";
    },
    challenges() {
      return dataArrayFromObject(this.user.myChallenges);
    },
    table() {
      return process.client
        ? this.$refs.tableContainer?.querySelector(".vgt-responsive")
        : null;
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
  mounted() {
    if (this.hasChallenges) {
      this.scrollbar = Scrollbar.init(this.table);
    }
    this.io.on("myChallenges", () => {
      setTimeout(() => {
        if (!this.scrollbar) {
          this.scrollbar = Scrollbar.init(this.table);
        }
        this.scrollbar.scrollTop = this.table.scrollHeight;
      }, 10);
    });
  },
  provide() {
    return {
      closeModal: this.closeModal
    };
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

  &__table-container {
    align-self: flex-start;
    margin-bottom: 1.5rem;
  }

  &__table {
    line-height: 1.6;

    .scrollbar-track {
      z-index: 50;
    }
  }
}
</style>
