<template>
  <Page title="Page Not Found" name="notfound">
    <WhiteSection tag="main" class="notfound">
      <p>The page you're looking for does not exist.</p>
    </WhiteSection>
  </Page>
</template>

<script>
export default {
  mounted() {
    document.title = "Page Not Found – Challenge 18";
  }
};
</script>

<style lang="scss">
@import "@/assets/sass/base.scss";

.notfound {
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 2rem;
    font-weight: 500;
    text-align: center;

    @include respond(mobile) {
      font-size: 1.8rem;
    }
  }
}
</style>
