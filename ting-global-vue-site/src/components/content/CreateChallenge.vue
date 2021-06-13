<template>
  <DashboardModal
    title="Create a Challenge"
    :active="active"
    class="new-challenge-modal"
  >
    <BaseSpinner v-if="loading" />
    <ErrorMessage v-else-if="error" :error="error" />
    <div class="new-challenge-modal__section">
      <h3 class="new-challenge-modal__subheading">Choose a language</h3>
      <v-select
        v-model="selectedLanguage"
        :options="languageOptions"
        :reduce="(option) => option.name"
        class="language-selector"
      />
    </div>
    <div class="new-challenge-modal__section">
      <h3 class="new-challenge-modal__subheading">
        Choose challenge template
      </h3>
      <div class="new-challenge-modal__options">
        <div
          class="template-button"
          v-for="template in filteredTemplateOptions"
          :key="template"
        >
          <label>{{ template }}</label>
        </div>
      </div>
    </div>
  </DashboardModal>
</template>

<script>
export default {
  props: {
    active: Boolean,
  },
  inject: ["closeModal"],
};
</script>
