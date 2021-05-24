<template>
  <Page title="Become a Member" name="register">
    <WhiteSection tag="main" class="membership">
      <section class="inner-section">
        <SectionHeading small>Membership Plans</SectionHeading>
        <MemberPlans />
      </section>
      <section class="inner-section">
        <SectionHeading small>Register Now</SectionHeading>
        <RegistrationForm />
      </section>
    </WhiteSection>
  </Page>
</template>

<script>
import MemberPlans from "../components/UI/MemberPlans";
import RegistrationForm from "../components/UI/RegistrationForm";

export default {
  components: { MemberPlans, RegistrationForm },
};
</script>

<style lang="scss">
.inner-section {
  .section-heading {
    margin-bottom: 7rem;
  }

  &:not(:last-child) {
    margin-bottom: 9rem;
  }
}
</style>
