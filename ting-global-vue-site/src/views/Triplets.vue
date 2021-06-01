<template>
  <Page title="Triplets" id="triplets">
    <WhiteSection tag="main" class="triplets">
      <button @click.prevent="downdloadFile">Download</button>
      <BaseSpinner v-if="loading" />
    </WhiteSection>
  </Page>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async downdloadFile() {
      this.loading = true;
      try {
        const response = await axios({
          url:
            "https://docs.google.com/presentation/d/1cHTRY11katHSo10gHALC6xZ_ZlBexa4QlHg7hQ8qGwI",
          method: "GET",
          responseType: "blob",
        });

        const fileURL = window.URL.createObjectURL(new Blob([response.data]));
        const fileLink = document.createElement("a");

        fileLink.href = fileURL;
        fileLink.setAttribute("download", "file.pdf");
        document.body.appendChild(fileLink);

        fileLink.click();
      } catch (err) {
        console.log(err);
      }
      this.loading = false;
    },
  },
};
</script>
