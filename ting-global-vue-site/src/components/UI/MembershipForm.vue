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
      <label for="language" class="form__label">
        Language to play
      </label>
      <select
        v-model="language"
        id="language"
        class="form__input"
        :disabled="group === 'international'"
      >
        <option v-for="option in languageOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
    <!-- <div class="form__field">
      <label for="estimate" class="form__label">
        How many students are you planning to enter (estimate)?
      </label>
      <input
        v-model="estimate"
        id="estimate"
        type="number"
        class="form__input"
      />
    </div> -->
    <!-- <div class="form__field">
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
    </div> -->
    <div class="form__field form__plans">
      <label class="form__label">Membership plan</label>
      <div class="form__plans-list">
        <div
          class="form__plan"
          v-for="option in planOptions"
          :key="option.type"
        >
          <input
            type="radio"
            class="form__plan-input"
            :id="option.type"
            v-model="plan"
            :value="option.type"
          />
          <label :for="option.type" class="form__plan-box">
            <p class="form__plan-label">{{ option.label }}</p>
            <h3 class="form__plan-price">${{ option.price }}</h3>
            <p>per year</p>
          </label>
        </div>
      </div>
    </div>
    <BaseButton variant="blue">Proceed to checkout</BaseButton>
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
      language: "English",
      languageOptions: [
        "English",
        "Chinese",
        "Spanish",
        "Portuguese",
        "French",
        "Russian",
        "Hebrew",
      ],
      plan: "3 Years",
      planOptions: [
        { type: "3 Years", price: 150, label: "Three Years", years: 3 },
        { type: "2 Years", price: 250, label: "Two Years", years: 2 },
        { type: "1 Year", price: 350, label: "One Year", years: 1 },
      ],
      estimate: null,
      questions: "",
      reached: "",
    };
  },
  computed: {
    totalPrice() {
      const pickedPlan = this.planOptions.find(
        (plan) => plan.type === this.plan
      );
      return pickedPlan.price * pickedPlan.years;
    },
  },
  watch: {
    group(value) {
      if (value === "international") {
        this.language = "English";
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/sass/base.scss";

.form {
  &__plans {
    margin-bottom: 3.5rem;
  }
  &__plans-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    @include respond(mobile-land) {
      grid-template-columns: 1fr;
    }
  }

  &__plan-input {
    display: none;
  }

  &__plan-box {
    border: 0.3rem solid transparent;
    box-shadow: $boxshadow2;
    border-radius: 0.8rem;
    display: block;
    text-align: center;
    padding: 2rem;
    height: 100%;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      background-color: rgba($color-azure-light, 0.4);
    }
  }

  &__plan-input:checked + &__plan-box {
    border-color: $color-azure;
    background-color: rgba($color-azure-light, 0.4);
  }

  &__plan-label {
    font-size: 1.8rem;
    font-weight: 500;

    @include respond(mobile) {
      font-size: 1.7rem;
    }
  }

  &__plan-price {
    font-size: 3rem;
    color: $color-blue-2;
    margin: 1.5rem 0 0;

    @include respond(mobile) {
      font-size: 2.9rem;
    }
  }
}
</style>
