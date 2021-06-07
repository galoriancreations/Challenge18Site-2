<template>
  <form class="form" @submit.prevent="submitHandler">
    <div class="form__field">
      <label for="username" class="form__label">
        Username (used for login)
      </label>
      <input
        v-model="formData.username"
        id="username"
        placeholder="Your username"
        required
        class="form__input"
      />
    </div>
    <div class="form__field">
      <label for="phone" class="form__label">Phone (used for login)</label>
      <input
        v-model="formData.phone"
        id="phone"
        type="tel"
        required
        placeholder="Phone number incl. country code"
        class="form__input"
      />
    </div>
    <div class="form__field">
      <label for="fullName" class="form__label">Full name</label>
      <input
        v-model="formData.fullName"
        id="fullName"
        required
        placeholder="Your full name"
        class="form__input"
      />
    </div>
    <div class="form__field">
      <label for="email" class="form__label">
        Email (optional)
      </label>
      <input
        v-model="formData.email"
        id="email"
        placeholder="Your email address"
        type="email"
        class="form__input"
      />
    </div>
    <div class="form__field">
      <label for="language" class="form__label">
        Challenge language
      </label>
      <select v-model="formData.language" id="language" class="form__input">
        <option v-for="option in languageOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
    <BaseButton variant="blue">Register</BaseButton>
    <BaseSpinner v-if="loading" />
    <ErrorMessage v-else-if="error" :error="error" />
  </form>
</template>

<script>
import { languageOptions } from "../../util/options";

export default {
  data() {
    return {
      formData: {
        username: "",
        phone: "",
        fullName: "",
        email: "",
        language: "English",
        accountType: "individual",
      },
      languageOptions,
      availability: null,
      loading: false,
      error: null,
    };
  },
  computed: {
    username() {
      return this.formData.username;
    },
  },
  methods: {
    async submitHandler() {
      this.loading = true;
      try {
        await this.$store.dispatch("auth", {
          mode: "register",
          data: this.formData,
        });
        this.$router.replace("/dashboard");
      } catch (error) {
        this.error = error;
      }
      this.loading = false;
    },
  },
  watch: {
    username(value) {
      console.log(value);
    },
  },
};
</script>
