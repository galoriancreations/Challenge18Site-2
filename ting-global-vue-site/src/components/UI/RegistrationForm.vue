<template>
  <form class="form">
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
      <label for="group" class="form__label">
        Challenge group
      </label>
      <select v-model="formData.group" id="group" class="form__input">
        <option value="international">International</option>
        <option value="national">National</option>
      </select>
    </div>
    <div class="form__field">
      <label for="language" class="form__label">
        Language to play
      </label>
      <select
        v-model="formData.language"
        id="language"
        class="form__input"
        :disabled="formData.group === 'international'"
      >
        <option v-for="option in languageOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
    <BaseButton variant="blue">Register</BaseButton>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: "",
        phone: "",
        fullName: "",
        email: "",
        group: "international",
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
    };
  },
  computed: {
    username() {
      return this.formData.username;
    },
    group() {
      return this.formData.group;
    },
  },
  watch: {
    group(value) {
      if (value === "international") {
        this.formData.language = "English";
      }
    },
    username(value) {
      console.log(value);
    },
  },
};
</script>
