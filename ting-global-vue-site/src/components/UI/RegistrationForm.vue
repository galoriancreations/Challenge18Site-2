<template>
  <form class="form">
    <div class="form__field">
      <label for="memberName" class="form__label">
        Lead staff member's mame
      </label>
      <input
        v-model="formData.memberName"
        id="memberName"
        thing="Lead staff member's name"
        required
        class="form__input"
      />
    </div>
    <div class="form__field">
      <label for="memberRole" class="form__label">
        Lead staff member's role
      </label>
      <input
        v-model="formData.memberRole"
        id="memberRole"
        thing="Lead staff member's role"
        required
        class="form__input"
      />
    </div>
    <div class="form__field">
      <label for="organization" class="form__label">
        Organization/school name
      </label>
      <input
        v-model="formData.organization"
        id="organization"
        thing="Organization/school name"
        required
        class="form__input"
      />
    </div>
    <div class="form__field">
      <label for="city" class="form__label">
        City/Town
      </label>
      <input
        v-model="formData.city"
        id="city"
        thing="City/Town"
        required
        class="form__input"
      />
    </div>
    <div class="form__field">
      <label for="country" class="form__label">
        Country
      </label>
      <input
        v-model="formData.country"
        id="country"
        thing="Country"
        required
        class="form__input"
      />
    </div>
    <div class="form__field">
      <label for="email" class="form__label">
        Lead contact email
      </label>
      <input
        v-model="formData.email"
        id="email"
        name="email"
        thing="Lead contact email"
        type="email"
        required
        class="form__input"
      />
    </div>
    <div class="form__field">
      <label for="phone" class="form__label">Lead contact phone number</label>
      <input
        v-model="formData.phone"
        id="phone"
        name="phone"
        type="tel"
        thing="Lead contact phone number"
        class="form__input"
      />
    </div>
    <div class="form__field">
      <label for="estimate" class="form__label">
        How many students are you planning to enter (estimate)?
      </label>
      <input
        v-model="formData.estimate"
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
        v-model="formData.questions"
        id="questions"
        name="questions"
        class="form__input form__textarea"
      />
    </div>
    <div class="form__field">
      <label for="reached" class="form__label">
        How did you hear about the Challenge 18 SDGs?
      </label>
      <textarea
        v-model="formData.reached"
        id="reached"
        name="reached"
        class="form__input form__textarea"
      />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        memberName: "",
        memberRole: "",
        organization: "",
        city: "",
        country: "",
        email: "",
        phone: "",
        estimate: null,
        questions: "",
        reached: "",
      },
    };
  },
};
</script>
