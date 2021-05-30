<template>
  <form class="form">
    <div class="form__field">
      <label for="username" class="form__label">
        Username (used for login)
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
      <label for="phone" class="form__label">Phone (used for login)</label>
      <input
        v-model="phone"
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
        v-model="fullName"
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
        v-model="email"
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
      <select v-model="group" id="group" class="form__input">
        <option value="international">International</option>
        <option value="national">National</option>
      </select>
    </div>
    <BaseButton variant="blue">Register</BaseButton>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      phone: "",
      fullName: "",
      email: "",
      group: "international",
      availability: null,
    };
  },
};
</script>
