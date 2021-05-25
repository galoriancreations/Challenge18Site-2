<template>
  <form class="form">
    <div class="form__field">
      <label for="username" class="form__label">
        Username
      </label>
      <input
        v-model="username"
        id="username"
        placeholder="Your username"
        required
        class="form__input"
      />
    </div>
    <div class="form__field">
      <label for="phone" class="form__label">Phone</label>
      <input
        v-model="phone"
        id="phone"
        name="phone"
        type="tel"
        required
        placeholder="Phone number used for registration"
        class="form__input"
      />
    </div>
    <BaseButton variant="blue">Login</BaseButton>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      phone: "",
    };
  },
};
</script>
