<template>
  <DashboardModal
    title="Join a Challenge"
    :active="active"
    class="join-challenge"
  >
    <h3 class="join-challenge__subheading">Choose challenge template</h3>
    <div class="join-challenge__options">
      <div
        class="template-button"
        v-for="template in templateOptions"
        :key="template"
      >
        <input
          type="radio"
          v-model="selection"
          :value="template"
          :id="template"
        />
        <label :for="template">{{ template }}</label>
      </div>
    </div>
    <BaseButton variant="blue">Join</BaseButton>
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
      selection: "International SDG",
      templateOptions: ["International SDG", "Family", "Songs & Values"],
    };
  },
  methods: {
    submitHandler() {},
  },
};
</script>

<style lang="scss">
@import "@/sass/base.scss";

.join-challenge {
  &__subheading {
    margin-bottom: 3rem;
  }

  &__options {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .button {
    width: 15rem;
  }
}

.template-button {
  display: block;
  cursor: pointer;

  input {
    display: none;
  }

  label {
    display: block;
    width: 100%;
    height: 100%;
  }

  input:checked + label {
    background-color: $color-azure-light;
  }
}
</style>
