<template>
  <DashboardSection title="Account Details" class="account-details">
    <div class="account-details__grid">
      <div
        v-for="(label, key) in labels"
        :key="key"
        class="account-details__field"
      >
        <h4 class="account-details__title">
          {{ label }}
        </h4>
        <p class="account-details__text">
          {{ user[key] || "Not filled yet" }}
        </p>
      </div>
    </div>
    <BaseButton variant="blue" @click="editProfileMode = true">
      <i class="fas fa-edit" /> Edit Profile
    </BaseButton>
    <template slot="modal">
      <EditProfile :active="editProfileMode" @closed="editProfileMode = false"
    /></template>
  </DashboardSection>
</template>

<script>
import EditProfile from "./EditProfile";
import { labels } from "../../util/options";

export default {
  components: { EditProfile },
  data() {
    return {
      editProfileMode: false,
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    labels() {
      return labels[this.user.accountType];
    },
  },
  provide() {
    return {
      labels: this.labels,
    };
  },
};
</script>

<style lang="scss">
@import "@/sass/base.scss";

.account-details {
  &__grid {
    width: 100%;
    max-width: 50rem;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 3rem;

    @include respond(mobile) {
      grid-template-columns: 1fr;
      text-align: center;
      margin-bottom: 2.5rem;
    }
  }

  &__title {
    font-size: 1.75rem;
    font-weight: 600;

    @include respond(mobile) {
      font-size: 1.55rem;
    }
  }
}
</style>
