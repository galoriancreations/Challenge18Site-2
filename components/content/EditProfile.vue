<template>
  <DashboardModal title="Edit Profile" :active="active">
    <form class="form" @submit.prevent="submitHandler">
      <div class="form__field" v-for="key in textInputKeys" :key="key">
        <label :for="key" class="form__label">
          {{ labels[key] }}
        </label>
        <input
          v-model="formData[key]"
          :id="key"
          :required="key === 'username'"
          class="form__input"
          :placeholder="labels[key]"
        />
      </div>
      <div class="form__field">
        <label for="language" class="form__label">
          Challenge language
        </label>
        <v-select
          v-model="formData.language"
          :options="languageOptions"
          :reduce="option => option.name"
          required
          class="language-selector"
        />
      </div>
      <BaseButton variant="blue">Save profile</BaseButton>
      <BaseSpinner v-if="loading" />
      <ErrorMessage v-else-if="error" :error="error" />
    </form>
  </DashboardModal>
</template>

<script>
import { initialData, textInputKeys } from "../../assets/util/functions";
import { languageOptions } from "../../assets/util/options";

export default {
  props: {
    active: Boolean
  },
  inject: ["labels", "closeModal"],
  data() {
    return {
      formData: initialData({ ...this.labels, language: "Challenge language" }),
      textInputKeys: textInputKeys(this.labels),
      languageOptions,
      loading: false,
      error: null
    };
  },
  methods: {
    initData() {
      for (let key in this.formData) {
        this.formData[key] = this.$store.getters.user[key];
      }
    },
    async submitHandler() {
      this.loading = true;
      this.error = null;
      try {
        await this.$store.dispatch("updateUser", this.formData);
        this.closeModal();
      } catch (error) {
        this.error = error;
      }
      this.loading = false;
    }
  },
  mounted() {
    this.initData();
  }
};
</script>
