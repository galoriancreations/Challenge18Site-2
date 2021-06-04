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
        Language to play
      </label>
      <select v-model="formData.language" id="language" class="form__input">
        <option v-for="option in languageOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
    <BaseButton variant="blue">Register</BaseButton>
    <p v-if="success">Success</p>
    <p v-else-if="error">Error</p>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        username: "",
        phone: "",
        fullName: "",
        email: "",
        language: "English",
      },
      languageOptions: [
        "English",
        "Chinese",
        "Spanish",
        "Portuguese",
        "French",
        "Russian",
        "Hebrew",
      ],
      availability: null,
      success: false,
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
      try {
        //const { data } = await axios.post("https://193.46.199.76/api", {
        const { data } = await axios.post("http://193.46.199.76:8087/api", {
          register: this.formData,
        });
        console.log(data);
        this.success = true;
      } catch (error) {
        console.log(error);
        this.error = true;
      }
    },
  },
  watch: {
    username(value) {
      console.log(value);
    },
  },
};
</script>
