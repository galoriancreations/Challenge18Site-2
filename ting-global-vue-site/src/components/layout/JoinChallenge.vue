<template>
  <DashboardModal title="Join a Challenge" :active="active">
    <h3 class="join-challenge__subheading">Choose challenge template</h3>
  </DashboardModal>
</template>

<script>
export default {
  props: {
    active: Boolean,
  },
  inject: ["closeModal"],
  data() {
    return {
      templateOptions: ["International SDG", "Family", "Songs & Values"],
    };
  },
  methods: {
    submitHandler() {},
  },
};
</script>
