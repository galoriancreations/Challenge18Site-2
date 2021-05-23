<template>
  <Page title="Login" name="login">
    <WhiteSection></WhiteSection>
  </Page>
</template>

<script>
export default {
  computed: {
    io() {
      return this.$store.getters.io;
    },
  },
  created() {
    this.io.emit("loginRequest", {
      username: "Yinon",
      phone_number: "972587111965",
    });

    this.io.on("loginInfo", (data) => {
      console.log(data);
    });
  },
};
</script>
