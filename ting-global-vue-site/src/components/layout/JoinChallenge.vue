<template>
  <DashboardModal
    title="Join a Challenge"
    :active="active"
    class="join-challenge"
  >
    <BaseSpinner v-if="loading" />
    <ErrorMessage v-else-if="errorLoading" :error="errorLoading" />
    <div v-else-if="!link" class="join-challenge__initial">
      <div class="join-challenge__section">
        <h3 class="join-challenge__subheading">Choose a language</h3>
        <select
          class="form__input join-challenge__language-selector"
          v-model="selectedLanguage"
        >
          <option
            v-for="language in languageOptions"
            :key="language"
            :value="language"
          >
            {{ language }}
          </option>
        </select>
      </div>
      <div class="join-challenge__section">
        <h3 class="join-challenge__subheading">Choose challenge template</h3>
        <div class="join-challenge__options">
          <div
            class="template-button"
            v-for="template in filteredTemplateOptions"
            :key="template"
          >
            <input
              type="radio"
              v-model="selectedTemplate"
              :value="template"
              :id="template"
            />
            <label :for="template">{{ template }}</label>
          </div>
        </div>
      </div>
      <BaseButton variant="blue" @click="submitHandler">Join</BaseButton>
      <BaseSpinner v-if="submitting" />
      <ErrorMessage v-else-if="errorSubmitting" :error="errorSubmitting" />
    </div>
    <div v-else class="join-challenge__link-section">
      <h3 class="join-challenge__subheading">
        Click this link to join the challenge
      </h3>
      <a class="join-challenge__link" :href="link" target="_blank">
        {{ link }}
      </a>
    </div>
  </DashboardModal>
</template>

<script>
import { languageOptions } from "../../util/options";
import axios from "../../util/axios";

export default {
  props: {
    active: Boolean,
  },
  inject: ["closeModal"],
  data() {
    return {
      selectedLanguage: null,
      languageOptions,
      selectedTemplate: null,
      templateOptions: [],
      loading: true,
      errorLoading: null,
      submitting: false,
      errorSubmitting: null,
      link: null,
    };
  },
  computed: {
    userLanguage() {
      return this.$store.getters.user?.language;
    },
    filteredTemplateOptions() {
      return this.templateOptions;
    },
  },
  methods: {
    async loadTemplates() {
      try {
        console.log(axios);
        this.templateOptions = [
          "International SDG",
          "Family",
          "Songs & Values",
        ];
        this.selectedTemplate = this.filteredTemplateOptions[0];
      } catch (error) {
        this.errorLoading = error;
      }
      this.loading = false;
    },
    submitHandler() {},
  },
  watch: {
    userLanguage(value) {
      this.selectedLanguage = value;
    },
    selectedLanguage() {
      this.selectedTemplate = this.filteredTemplateOptions[0];
    },
  },
  created() {
    this.selectedLanguage = this.userLanguage;
    this.loadTemplates();
  },
};
</script>

<style lang="scss">
@import "@/sass/base.scss";

.join-challenge {
  &__section {
    &:not(:last-of-type) {
      margin-bottom: 5rem;

      @include respond(mobile) {
        margin-bottom: 4rem;
      }
    }
  }

  &__subheading {
    font-size: 1.9rem;
    margin-bottom: 1.8rem;
    line-height: 1.6;

    @include respond(mobile) {
      font-size: 1.7rem;
    }
  }

  &__language-selector {
    text-align: center;
    display: block;
    cursor: pointer;
    max-width: 25rem;
    margin: auto;
  }

  &__options {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 5rem;

    @include respond(mobile) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin-bottom: 4rem;
    }
  }

  .button {
    width: 15rem;
  }

  &__link-section,
  .section-heading-wrapper + .error-message {
    position: absolute;
    width: 100%;
    padding: 0 4rem;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;

    @include respond(mobile) {
      padding: 0 2rem;
    }
  }

  &__link {
    font-size: 2.3rem;
    color: $color-blue-2;
    transition: color 0.5s;

    @include respond(mobile) {
      font-size: 2.1rem;
    }

    &:hover {
      color: $color-gold-3;
    }
  }
}

.template-button {
  input {
    display: none;
  }

  label {
    width: 100%;
    height: 100%;
    cursor: pointer;
    box-shadow: $boxshadow2;
    border-radius: 0.5rem;
    padding: 1.5rem;
    border: 0.2rem solid transparent;
    font-weight: 500;
    font-size: 1.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;

    @include respond(mobile) {
      font-size: 1.55rem;
    }

    &:hover {
      background-color: rgba($color-azure-light, 0.8);
    }
  }

  input:checked + label {
    background-color: rgba($color-azure-light, 0.8);
    border: 0.2rem solid $color-azure;
  }
}
</style>
