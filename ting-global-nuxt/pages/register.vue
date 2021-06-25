<template>
  <Page title="Register" name="register">
    <WhiteSection tag="main" class="register">
      <RegisterNote>
        Free registration is currently available for individual users only. To
        join us as an organization, you can
        <RouterLink to="/membership">become a premium member</RouterLink>.
      </RegisterNote>
      <RegistrationForm />
    </WhiteSection>
  </Page>
</template>

<script>
import RegisterNote from "../components/UI/RegisterNote";
import RegistrationForm from "../components/content/RegistrationForm";

export default {
  components: { RegistrationForm, RegisterNote },
  head: {
    title: "Register – Challenge 18"
  },
  forLoggingIn: true
};
</script>

<style lang="scss">
@import "../assets/sass/base.scss";
</style>
