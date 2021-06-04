<template>
  <div class="checkout">
    <div class="checkout__info">
      <h3 class="checkout__heading">Account Details</h3>
      <div class="checkout__grid">
        <div class="checkout__field">
          <h4 class="checkout__title">Username</h4>
          <p class="checkout__value">{{ details.username }}</p>
        </div>
        <div class="checkout__field">
          <h4 class="checkout__title">Lead staff member's name</h4>
          <p class="checkout__value">{{ details.memberName }}</p>
        </div>
        <div class="checkout__field">
          <h4 class="checkout__title">Lead staff member's role</h4>
          <p class="checkout__value">{{ details.memberRole }}</p>
        </div>
        <div class="checkout__field">
          <h4 class="checkout__title">School/Organization</h4>
          <p class="checkout__value">{{ details.organization }}</p>
        </div>
        <div class="checkout__field">
          <h4 class="checkout__title">Town/City</h4>
          <p class="checkout__value">{{ details.city }}</p>
        </div>
        <div class="checkout__field">
          <h4 class="checkout__title">Country</h4>
          <p class="checkout__value">{{ details.country }}</p>
        </div>
        <div class="checkout__field">
          <h4 class="checkout__title">Lead contact email</h4>
          <p class="checkout__value">{{ details.email }}</p>
        </div>
        <div class="checkout__field">
          <h4 class="checkout__title">Lead contact phone number</h4>
          <p class="checkout__value">{{ details.phone }}</p>
        </div>
        <div class="checkout__field">
          <h4 class="checkout__title">Language</h4>
          <p class="checkout__value">{{ details.language }}</p>
        </div>
        <div class="checkout__field">
          <h4 class="checkout__title">Membership plan</h4>
          <p class="checkout__value">{{ planText }}</p>
        </div>
      </div>
      <BaseButton variant="blue" @click="backToForm">
        <i class="fas fa-edit" /> Edit
      </BaseButton>
    </div>
    <p class="total-price">Total to pay: ${{ totalPrice }}</p>
    <PayPal
      :amount="totalPrice"
      currency="USD"
      :client="credentials"
      env="sandbox"
      @payment-authorized="paymentAuthorized"
      @payment-completed="paymentCompleted"
      @payment-cancelled="paymentCancelled"
    />
  </div>
</template>

<script>
import PayPal from "vue-paypal-checkout";

export default {
  components: { PayPal },
  inject: ["details", "planOptions", "totalPrice", "backToForm"],
  data() {
    return {
      credentials: {
        sandbox:
          "AUNDipj94sstK0Ya1ip5S88UJurnn-d7_FpDE6iu0gKeUIFi3BBHWQxycJVxBgvUKtX11YbRGqZtiZ1T",
        production: "",
      },
      loading: false,
      error: null,
    };
  },
  computed: {
    planText() {
      const { label, price } = this.planOptions.find(
        (plan) => plan.type === this.details.plan
      );
      return `${label} / $${price} per year`;
    },
  },
  methods: {
    paymentAuthorized(data) {
      console.log("Payment Authorized");
      console.log(data);
    },
    paymentCompleted(data) {
      console.log("Payment Completed");
      console.log(data);
      this.$router.push("/challenge-options");
    },
    paymentCancelled(data) {
      console.log("Payment Cancelled");
      console.log(data);
      this.error = "Payment failed";
    },
  },
};
</script>

<style lang="scss">
@import "@/sass/base.scss";

.checkout {
  max-width: 70rem;
  margin: auto;
  line-height: 1.6;

  &__info {
    margin-bottom: 3.5rem;
    box-shadow: $boxshadow2;
    padding: 3.5rem 3rem;
    border-radius: 1rem;

    @include respond(mobile) {
      text-align: center;
      margin: 0 0 2.5rem;
      padding: 2.5rem 2rem;
    }

    & > .button {
      width: auto;
      padding: 0.8rem 3rem;
      font-weight: 600;
      margin-top: 3rem;
    }
  }

  &__heading {
    text-align: center;
    font-size: 2.8rem;
    color: $color-blue-2;
    margin-bottom: 3rem;

    @include respond(mobile) {
      font-size: 2.3rem;
      margin-bottom: 2rem;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    justify-content: space-between;
    grid-gap: 1.5rem;

    @include respond(mobile) {
      grid-template-columns: 1fr;
      justify-content: initial;
    }
  }

  &__title {
    font-size: 1.75rem;
    font-weight: 600;

    @include respond(mobile) {
      font-size: 1.6rem;
    }
  }
}

.paypal-button {
  * {
    width: 100% !important;
  }
}
</style>
