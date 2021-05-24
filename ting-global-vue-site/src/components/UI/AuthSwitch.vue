<template>
  <div class="auth-switch">
    <p>{{ text }}</p>
    <BaseButton :link="link" variant="outline">{{ buttonText }}</BaseButton>
  </div>
</template>

<script>
export default {
  props: {
    mode: String,
  },
  computed: {
    text() {
      return this.mode === "register"
        ? "Already have an account?"
        : this.mode === "login"
        ? "Don't have an account yet?"
        : null;
    },
    link() {
      return this.mode === "register"
        ? "/login"
        : this.mode === "login"
        ? "/register"
        : null;
    },
    buttonText() {
      return this.mode === "register"
        ? "Login"
        : this.mode === "login"
        ? "Sign Up"
        : null;
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/base.scss";

.auth-switch {
  margin-top: 7rem;
  text-align: center;

  @include respond(mobile) {
    margin-top: 5rem;
  }

  p {
    font-size: 1.9rem;
    margin-bottom: 1.6rem;

    @include respond(mobile) {
      font-size: 1.7rem;
    }
  }

  .button {
    width: 18rem;

    @include respond(mobile) {
      font-size: 1.35rem;
    }
  }
}
</style>
