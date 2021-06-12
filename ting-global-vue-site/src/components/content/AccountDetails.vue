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
      <div class="account-details__field">
        <h4 class="account-details__title">Challenge language</h4>
        <p class="account-details__text">
          {{ languageText || "Not filled yet" }}
        </p>
      </div>
    </div>
    <BaseButton variant="blue" @click="editProfileMode = true">
      <i class="fas fa-edit" /> Edit Profile
    </BaseButton>
    <template slot="modal">
      <EditProfile :active="editProfileMode" />
    </template>
  </DashboardSection>
</template>

<script>
import EditProfile from "./EditProfile";
import { labels, languageOptions } from "../../util/options";

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
    languageText() {
      const matchingLanguage = languageOptions.find(
        (language) => language.name === this.user.language
      );
      return matchingLanguage?.label;
    },
  },
  methods: {
    closeModal() {
      this.editProfileMode = false;
    },
  },
  provide() {
    return {
      labels: this.labels,
      closeModal: this.closeModal,
    };
  },
};
</script>

<style lang="scss">
@import "@/sass/base.scss";

.account-details {
  &__grid {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
    margin-bottom: 3rem;

    @include respond(tablet-sm) {
      grid-template-columns: 1fr 1fr;
    }

    @include respond(mobile-land) {
      grid-template-columns: 1fr;
      margin-bottom: 2.5rem;
    }
  }

  &__field {
    display: flex;
    flex-direction: column;
    align-items: center;
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
