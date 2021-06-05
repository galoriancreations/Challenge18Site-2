<template>
  <form v-if="!checkoutMode" class="form" @submit.prevent="submitHandler">
    <div class="form__field">
      <label for="username" class="form__label">
        Username
      </label>
      <input
        v-model="formData.username"
        id="username"
        required
        class="form__input"
        placeholder="Username"
      />
    </div>
    <div class="form__field">
      <label for="organization" class="form__label">
        Organization/school name
      </label>
      <input
        v-model="formData.organization"
        id="organization"
        required
        class="form__input"
        placeholder="Organization/school name"
      />
    </div>
    <div class="form__field">
      <label for="memberName" class="form__label">
        Lead staff member's mame
      </label>
      <input
        v-model="formData.memberName"
        id="memberName"
        required
        class="form__input"
        placeholder="Lead staff member's mame"
      />
    </div>
    <div class="form__field">
      <label for="memberRole" class="form__label">
        Lead staff member's role
      </label>
      <input
        v-model="formData.memberRole"
        id="memberRole"
        required
        class="form__input"
        placeholder="Lead staff member's role"
      />
    </div>
    <div class="form__field">
      <label for="city" class="form__label">
        City/Town
      </label>
      <input
        v-model="formData.city"
        id="city"
        required
        class="form__input"
        placeholder="City/Town"
      />
    </div>
    <div class="form__field">
      <label for="country" class="form__label">
        Country
      </label>
      <input
        v-model="formData.country"
        id="country"
        required
        class="form__input"
        placeholder="Country"
      />
    </div>
    <div class="form__field">
      <label for="email" class="form__label">
        Lead contact email
      </label>
      <input
        v-model="formData.email"
        id="email"
        type="email"
        required
        class="form__input"
        placeholder="Lead contact email"
      />
    </div>
    <div class="form__field">
      <label for="phone" class="form__label">Lead contact phone number</label>
      <input
        v-model="formData.phone"
        id="phone"
        type="tel"
        required
        class="form__input"
        placeholder="Lead contact phone number"
      />
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
            v-model="formData.plan"
            :value="option.type"
          />
          <label :for="option.type" class="form__plan-box">
            <p class="form__plan-text">{{ option.label }}</p>
            <h3 class="form__plan-price">${{ option.price }}</h3>
            <p>per year</p>
          </label>
        </div>
      </div>
    </div>
    <p class="total-price">Total to pay: ${{ totalPrice }}</p>
    <BaseButton variant="blue">Proceed to checkout</BaseButton>
  </form>
  <Checkout v-else />
</template>

<script>
import Checkout from "./Checkout";

export default {
  components: { Checkout },
  data() {
    return {
      formData: {
        username: "",
        memberName: "",
        memberRole: "",
        organization: "",
        city: "",
        country: "",
        email: "",
        phone: "",
        language: "English",
        plan: "3-years",
        accountType: "organization",
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
      planOptions: [
        { type: "3-years", price: 150, label: "Three Years", years: 3 },
        { type: "2-years", price: 250, label: "Two Years", years: 2 },
        { type: "1-year", price: 350, label: "One Year", years: 1 },
      ],
      checkoutMode: false,
    };
  },
  computed: {
    username() {
      return this.formData.username;
    },
    totalPrice() {
      const pickedPlan = this.planOptions.find(
        (plan) => plan.type === this.formData.plan
      );
      return (pickedPlan.price * pickedPlan.years).toFixed(2).toString();
    },
  },
  methods: {
    submitHandler() {
      this.checkoutMode = true;
    },
    backToForm() {
      this.checkoutMode = false;
    },
  },
  watch: {
    username(value) {
      console.log(value);
    },
  },
  provide() {
    return {
      details: this.formData,
      planOptions: this.planOptions,
      totalPrice: () => this.totalPrice,
      backToForm: this.backToForm,
    };
  },
};
</script>

<style lang="scss">
@import "@/sass/base.scss";

.form {
  select {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }

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

  &__plan-text {
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

  .button {
    padding: 1.25rem;
  }
}

.total-price {
  text-align: center;
  font-weight: 600;
  font-size: 1.9rem;
  margin: 1rem 0 2.5rem;

  @include respond(mobile) {
    font-size: 1.7rem;
    margin: 0 0 2rem;
  }
}
</style>
