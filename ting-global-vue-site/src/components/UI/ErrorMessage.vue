<template>
  <p class="error zoom-in">
    {{ message }}
  </p>
</template>

<script>
export default {
  props: {
    error: [Error, String],
  },
  computed: {
    message() {
      if (typeof this.error === "string") {
        return this.error;
      } else {
        return (
          this.error.response?.data?.msg ||
          "An error occured. Please try again in a few moments."
        );
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/sass/base.scss";

.error {
  color: $color-error;
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;
  padding: 0 $padding-sides-mobile;
}

.form .error {
  margin-top: 5rem;

  @include respond(mobile) {
    margin-top: 4rem;
  }
}
</style>
