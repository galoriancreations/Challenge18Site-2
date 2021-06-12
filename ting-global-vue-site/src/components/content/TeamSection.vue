<template>
  <section class="team-section">
    <SectionHeading small>{{ title }}</SectionHeading>
    <div class="team-section__grid">
      <TeamMember v-for="member in team" :key="member.name" :member="member" />
    </div>
  </section>
</template>

<script>
import TeamMember from "../UI/TeamMember";

export default {
  components: { TeamMember },
  props: {
    title: String,
    team: Array,
  },
};
</script>

<style lang="scss">
@import "../../sass/base.scss";

.team-section {
  &:not(:last-child) {
    margin-bottom: 9rem;

    @include respond(mobile) {
      margin-bottom: 6rem;
    }
  }

  .section-heading {
    margin-bottom: 5rem;

    @include respond(mobile) {
      margin-bottom: 4rem;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem;
    align-items: start;

    @include respond(tablet-land) {
      grid-template-columns: 1fr 1fr;
      gap: 5rem 4rem;
    }

    @include respond(tablet-sm) {
      column-gap: 2.5rem;
    }

    @include respond(mobile) {
      grid-template-columns: 1fr;
      gap: 4rem;
    }
  }

  // TEMPORARY CODE UNTIL A BETTER SOLUTION IS FOUND
  &:not(:last-child) &__grid {
    .team-member {
      position: relative;
      left: 41vw;
      transform: translateX(-50%);

      @include respond(mobile) {
        left: initial;
        transform: none;
      }
    }
  }
}
</style>
