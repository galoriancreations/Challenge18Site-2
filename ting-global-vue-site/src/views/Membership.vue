<template>
  <Page title="Join as Member" name="membership">
    <WhiteSection tag="main" class="membership">
      <section class="inner-section">
        <SectionHeading small>Membership Plans</SectionHeading>
        <MembershipPlans />
      </section>
      <section class="inner-section">
        <SectionHeading small>Register Now</SectionHeading>
        <RegistrationForm />
      </section>
    </WhiteSection>
  </Page>
</template>

<script>
import MembershipPlans from "../components/UI/MembershipPlans";
import RegistrationForm from "../components/UI/RegistrationForm";

export default {
  components: { MembershipPlans, RegistrationForm },
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
