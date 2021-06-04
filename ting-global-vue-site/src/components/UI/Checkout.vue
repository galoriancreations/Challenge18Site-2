<template>
  <div class="checkout">
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
  inject: ["details"],
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
  created() {
    console.log(this.details);
  },
};
</script>

<style lang="scss">
.checkout {
  max-width: 70rem;
  margin: auto;
}
</style>
