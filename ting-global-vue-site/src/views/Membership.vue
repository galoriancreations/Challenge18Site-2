<template>
  <Page title="Premium Membership" name="membership">
    <WhiteSection tag="main" class="membership">
      <RegisterNote>
        Premium membership is currently available for organizations only. To
        join us as an individual user, you can
        <RouterLink to="/register">register for free</RouterLink>.
      </RegisterNote>
      <section class="inner-section">
        <SectionHeading small>Membership Plans</SectionHeading>
        <MembershipPlans />
      </section>
      <section class="inner-section">
        <SectionHeading small>Register Now</SectionHeading>
        <MembershipForm />
      </section>
    </WhiteSection>
  </Page>
</template>

<script>
import RegisterNote from "../components/UI/RegisterNote";
import MembershipPlans from "../components/UI/MembershipPlans";
import MembershipForm from "../components/UI/MembershipForm";

export default {
  components: { RegisterNote, MembershipPlans, MembershipForm },
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
