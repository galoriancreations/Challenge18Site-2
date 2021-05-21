<template>
  <WhiteSection class="team-results">
    <BaseSpinner v-if="loading" />
    <div v-else class="team-results__grid">
      <div v-for="team in teams" :key="team.team" class="team-results__item">
        <h2 class="team-results__heading">{{ team.team }}</h2>
        <vue-good-table
          class="results-table team-results__table"
          :columns="columns"
          :rows="team.users"
          theme="polar-bear"
        />
      </div>
    </div>
  </WhiteSection>
</template>

<script>
import { teamsArray } from "../../util/functions";

export default {
  data() {
    return {
      columns: [
        {
          label: "Player",
          field: "name",
        },
        {
          label: "Score",
          field: "score",
        },
      ],
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loadingResults;
    },
    results() {
      return this.$store.getters.results;
    },
    teams() {
      return teamsArray(this.results).filter((team) => team.users.length > 2);
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/base.scss";

.team-results {
  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 8rem;
    column-gap: 7rem;

    @include respond(tablet-sm) {
      column-gap: 5rem;
    }

    @include respond(mobile-land) {
      grid-template-columns: 1fr;
    }
  }

  &__heading {
    font-size: 2.8rem;
    font-weight: 800;
    color: $color-blue-2;
    word-wrap: break-word;
    text-align: center;
    margin-bottom: 4rem;
  }
}
</style>
