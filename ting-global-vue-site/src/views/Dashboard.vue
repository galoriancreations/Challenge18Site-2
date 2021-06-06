<template>
  <Page title="Dashboard" name="dashboard">
    <WhiteSection tag="main" class="dashboard">
      <DashboardSection title="Account Details" class="account-details">
        <div class="account-details__grid">
          <div
            v-for="(label, key) in labels"
            :key="key"
            class="account-details__field"
          >
            <h4 class="account-details__title">{{ label }}</h4>
            <p class="account-details__text">{{ user[key] }}</p>
          </div>
        </div>
      </DashboardSection>
      <DashboardSection title="My Challenges" class="my-challenges">
        <p v-if="hasNoChallenges" class="my-challenges__empty">
          You don't have any challenges yet.
        </p>
        <BaseButton
          link="/challenge-options"
          variant="blue"
          v-if="isOrganization"
        >
          Create new challenge
        </BaseButton>
        <BaseButton v-else variant="blue">Join a challenge</BaseButton>
      </DashboardSection>
    </WhiteSection>
  </Page>
</template>

<script>
import DashboardSection from "../components/layout/DashboardSection";

export default {
  components: { DashboardSection },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    labels() {
      const labels = {
        individual: {
          username: "Username",
          phone: "Phone number",
          fullName: "Full name",
          email: "Email",
          language: "Language to play",
        },
        organization: {
          username: "Username",
          memberName: "Lead staff member's name",
          memberRole: "Lead staff member's role",
          organization: "Organization/scholl name",
          city: "City/town",
          country: "Country",
          email: "Lead contact email",
          phone: "Lead contact phone number",
          language: "Language",
        },
        admin: {},
      };

      const labelsToDisplay = {};
      for (let key in labels[this.user.accountType]) {
        if (this.user[key]) {
          labelsToDisplay[key] = labels[this.user.accountType][key];
        }
      }

      return labelsToDisplay;
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

.dashboard-section {
  border-radius: 1rem;
  box-shadow: $boxshadow2;
  overflow: hidden;
  max-width: 80rem;
  margin: auto;

  &:not(:last-child) {
    margin-bottom: 9rem;

    @include respond(mobile) {
      margin-bottom: 6rem;
    }
  }

  &__heading {
    background-color: $color-blue-2;
    color: $color-gold-4;
    text-align: center;
    padding: 1.75rem 1rem 1.5rem;
    font-weight: 600;
    font-size: 2.5rem;

    @include respond(mobile) {
      font-size: 1.9rem;
    }
  }

  &__content {
    padding: 4rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @include respond(mobile) {
      padding: 3rem 2rem;
    }
  }

  &.my-challenges &__content {
    min-height: 40rem;

    @include respond(mobile) {
      min-height: 35rem;
    }
  }
}

.account-details {
  &__grid {
    width: 100%;
    max-width: 50rem;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    justify-content: space-between;
    gap: 2rem;

    @include respond(mobile) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }

  &__title {
    font-size: 1.75rem;

    @include respond(mobile) {
      font-size: 1.55rem;
    }
  }
}

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

  .button {
    margin: 0 auto;
    width: auto;
    font-weight: 600;
  }
}
</style>
