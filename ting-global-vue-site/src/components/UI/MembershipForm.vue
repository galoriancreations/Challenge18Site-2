<template>
  <form class="form">
    <div class="form__field">
      <label for="username" class="form__label">
        Username
      </label>
      <input v-model="username" id="username" required class="form__input" />
    </div>
    <div class="form__field">
      <label for="memberName" class="form__label">
        Lead staff member's mame
      </label>
      <input
        v-model="memberName"
        id="memberName"
        required
        class="form__input"
      />
    </div>
    <div class="form__field">
      <label for="memberRole" class="form__label">
        Lead staff member's role
      </label>
      <input
        v-model="memberRole"
        id="memberRole"
        required
        class="form__input"
      />
    </div>
    <div class="form__field">
      <label for="organization" class="form__label">
        Organization/school name
      </label>
      <input
        v-model="organization"
        id="organization"
        required
        class="form__input"
      />
    </div>
    <div class="form__field">
      <label for="city" class="form__label">
        City/Town
      </label>
      <input v-model="city" id="city" required class="form__input" />
    </div>
    <div class="form__field">
      <label for="country" class="form__label">
        Country
      </label>
      <input v-model="country" id="country" required class="form__input" />
    </div>
    <div class="form__field">
      <label for="email" class="form__label">
        Lead contact email
      </label>
      <input
        v-model="email"
        id="email"
        type="email"
        required
        class="form__input"
      />
    </div>
    <div class="form__field">
      <label for="phone" class="form__label">Lead contact phone number</label>
      <input v-model="phone" id="phone" type="tel" class="form__input" />
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
    <div class="form__field">
      <label for="estimate" class="form__label">
        How many students are you planning to enter (estimate)?
      </label>
      <input
        v-model="estimate"
        id="estimate"
        type="number"
        class="form__input"
      />
    </div>
    <div class="form__field">
      <label for="questions" class="form__label">
        Do you have any questions about the Challenge at this stage?
      </label>
      <textarea
        v-model="questions"
        id="questions"
        class="form__input form__textarea"
      />
    </div>
    <div class="form__field">
      <label for="reached" class="form__label">
        How did you hear about the Challenge 18 SDGs?
      </label>
      <textarea
        v-model="reached"
        id="reached"
        class="form__input form__textarea"
      />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      memberName: "",
      memberRole: "",
      organization: "",
      city: "",
      country: "",
      email: "",
      phone: "",
      group: "international",
      estimate: null,
      questions: "",
      reached: "",
    };
  },
};
</script>
