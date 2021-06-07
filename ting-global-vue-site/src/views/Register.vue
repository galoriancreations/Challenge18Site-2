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
import RegistrationForm from "../components/layout/RegistrationForm";

export default {
  components: { RegistrationForm, RegisterNote },
};
</script>

<style lang="scss">
@import "../sass/base.scss";
</style>
