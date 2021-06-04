<template>
  <form class="form" @submit.prevent="submitHandler">
    <div class="form__field">
      <label for="username" class="form__label">
        Username
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
      <label for="phone" class="form__label">Phone</label>
      <input
        v-model="formData.phone"
        id="phone"
        name="phone"
        type="tel"
        required
        placeholder="Phone number used for registration"
        class="form__input"
      />
    </div>
    <BaseButton variant="blue">Login</BaseButton>
    <p v-if="success">Logged in successfully</p>
    <p v-else-if="error">Error occured</p>
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
      },
      loading: false,
      error: null,
      success: false,
    };
  },
  methods: {
    async submitHandler() {
      try {
        //const { data } = await axios.post("https://193.46.199.76/api", {
        const { data } = await axios.post("http://193.46.199.76:8087/api", {
          signIn: this.postData,
        });
        console.log(data);
        this.success = true;
      } catch (error) {
        console.log(error);
        this.error = true;
      }
    },
  },
};
</script>
